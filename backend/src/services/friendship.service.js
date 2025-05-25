const sequelize = require('../../db/database');
const { User, Friendship, Notification } = require('../../db/models')
const { Op } = require('sequelize');
const { sendNotification } = require('../socket/handlers/notification');
const notificationService = require('./notification.service');


let io = null;

function setIo(ioInstance) {
    io = ioInstance;
}

async function sendFriendRequest(requesterId, addresseeId) {
    try {
        if (requesterId === addresseeId) {
            return { error: "You cannot send friend request to yourself" }; //400
        }

        // console.log("Double call check");

        const [requester, addressee] = await Promise.all([
            User.findByPk(requesterId),
            User.findByPk(addresseeId)
        ]);

        if (!requester || !addressee) {
            return { error: "User not found" }; // 400
        }

        const result = await sequelize.transaction(async (transaction) => {
            const existingFriendship = await Friendship.findOne({
                where: {
                    [Op.or]: [
                        { requesterId, addresseeId },
                        { requesterId: addresseeId, addresseeId: requesterId }
                    ]
                }
            });

            if (existingFriendship) {
                const status = existingFriendship.status;

                if (status === 'pending') {
                    if (existingFriendship.requesterId === requesterId) {
                        return { error: "Friend request already sent" }; // 400
                    } else {
                        existingFriendship.status = 'accepted';
                        await existingFriendship.save();
                        return {
                            friendship: existingFriendship,
                            message: "Friend request accepted"
                        };
                    }
                } else if (status === 'accepted') {
                    return { error: "Users are already friends" }; //400
                } else if (status === 'blocked') {
                    if (existingFriendship.requesterId === requesterId) {
                        return { error: "You have blocked this user" };
                    } else {
                        return { error: "You are blocked by this user" };
                    }
                } else if (status === 'rejected') {
                    existingFriendship.status = 'pending';
                    existingFriendship.requesterId = requesterId;
                    existingFriendship.addresseeId = addresseeId;
                    await existingFriendship.save();

                    const resultData = {
                        friendship: existingFriendship,
                        message: "Friend request sent",
                        sendNotification: true,
                        notificationInfo: {
                            addresseeId,
                            requesterInfo: {
                                id: requester.id,
                                username: requester.username,
                                avatar: requester.avatar,
                                friendshipId: existingFriendship.id,
                            }
                        }
                    };

                    return resultData;
                }
            }

            const friendship = await Friendship.create({
                requesterId,
                addresseeId,
                status: 'pending'
            }, { transaction });

            return {
                friendship,
                message: "Friend request sent successfully",
                sendNotification: true,
                notificationInfo: {
                    addresseeId,
                    requesterInfo: {
                        id: requester.id,
                        username: requester.username,
                        avatar: requester.avatar,
                        friendshipId: friendship.id,
                    }
                }
            };
        });

        if (result.sendNotification) {
            await notificationService.createNotification(
                result.notificationInfo.addresseeId,  // кому
                'friend_request',                     // тип
                {                                     // данные
                    from: result.notificationInfo.requesterInfo
                },
                result.notificationInfo.requesterInfo.id // от кого
            );
        }

        if (result.sendNotification && io && io.notification) {
            io.notification.sendFriendRequest(
                result.notificationInfo.addresseeId,
                result.notificationInfo.requesterInfo,
            );
        }

        if (result.sendNotification) {
            delete result.sendNotification;
            delete result.notificationInfo;
        }

        return result;
    } catch (error) {
        console.error("Error sending friend request:", error);
        throw error;
    }
}

async function cancelFriendRequest(userId, friendshipId) {
    try {
        const friendRequest = await Friendship.findOne({
            where: {
                id: friendshipId,
                requesterId: userId,
                status: 'pending'
            },
            include: [
                {
                    model: User,
                    as: 'requester',
                    attributes: ['id', 'username', 'email', 'avatar']
                },
                {
                    model: User,
                    as: 'addressee',
                    attributes: ['id', 'username', 'email', 'avatar']
                },
            ]
        });

        if (!friendRequest) {
            return { error: "Friend request not found or you don't have permission to cancel it" };
        }

        const addresseeId = friendRequest.addresseeId;

        const requesterInfo = {
            id: friendRequest.requester.id,
            username: friendRequest.requester.username,
            avatar: friendRequest.requester.avatar,
            friendshipId: friendRequest.id
        };

        await friendRequest.destroy();

        if (io && io.notification) {
            io.notification.friendRequestCancelled(addresseeId, requesterInfo);
        }

        return { message: "Friend request cancelled successfully" };
    } catch (error) {
        console.error("Error cancelling friend request:", error);
        throw error;
    }
}

async function respondToFriendRequest(friendshipId, userId, accept) {
    try {
        const friendship = await Friendship.findOne({
            where: {
                id: friendshipId,
                addresseeId: userId,
                status: 'pending'
            },
            include: [
                {
                    model: User,
                    as: 'requester',
                    attributes: ['id', 'username', 'email', 'avatar']
                },
                {
                    model: User,
                    as: 'addressee',
                    attributes: ['id', 'username', 'email', 'avatar']
                },
            ]
        });
        
        if (!friendship) {
            return { error: "Friend request not found or already in processed" };
        }

        const addresseeInfo = {
            id: friendship.addressee.id,
            username: friendship.addressee.username,
            avatar: friendship.addressee.avatar,
            friendshipId: friendship.id
        };

        friendship.status = accept ? 'accepted' : 'rejected';
        await friendship.save();

        const notification = await Notification.findOne({
            where: {
                userId,
                type: 'friend_request',
                data: {
                    from: {
                        friendshipId: friendship.id
                    }
                }
            }
        });

        if (accept) {
            await notificationService.createNotification(
                friendship.requester.id,
                'friend_accepted', 
                {                      
                    by: addresseeInfo
                },
                friendship.addressee.id 
            );
        }

        if (io && io.notification) {

            if (accept) {
                io.notification.sendFriendAccepted(friendship.requester.id, addresseeInfo);
            } else {
                io.notification.friendRejected(friendship.requester.id, addresseeInfo);
            }
        }

        return {
            friendshipId,
            message: accept ? "Friend request accepted" : "Friend request rejected"
        }

    } catch (error) {
        console.error(`Error ${accept ? 'accepting' : 'rejecting'} friend request`, error);
        throw error;
    }
}

async function getIncomingRequests(userId) {
    try {
        const incomingRequests = await Friendship.findAll({
            where: {
                addresseeId: userId,
                status: 'pending'
            },
            include: [{
                model: User,
                as: 'requester',
                attributes: ['id', 'username', 'email', 'avatar']
            }],
            order: [['createdAt', 'DESC']]
        });

        return { requests: incomingRequests };

    } catch (error) {
        console.error("Error getting incoming requests:", error);
        throw error;
    }
}

async function getOutgoingRequests(userId, status = 'accepted') {
    try {

        const validStatuses = ['pending', 'accepted', 'rejected'];
        if (!validStatuses.includes(status)) {
            status = 'accepted';
        }

        const outgoingRequests = await Friendship.findAll({
            where: {
                requesterId: userId,
                status: 'accepted'
            },
            include: [{
                model: User,
                as: 'addressee',
                attributes: ['id', 'username', 'email', 'avatar']
            }],
            order: [['updatedAt', 'DESC']]
        });

        return { requests: outgoingRequests };

    } catch (error) {
        console.error(`Error getting ${status} outgoing requests:`, error);
        throw error;
    }
}

async function removeFriend(userId, friendId) {
    try {
        if (userId === friendId) {
            return { error: "You cannot remove yourself from friends" };
        }

        const [user, friend] = await Promise.all([
            User.findByPk(userId),
            User.findByPk(friendId)
        ]);

        if (!user || !friend) {
            return { error: "User not found" };
        }

        const friendship = await Friendship.findOne({
            where: {
                status: 'accepted',
                [Op.or]: [
                    { requesterId: userId, addresseeId: friendId },
                    { requesterId: friendId, addresseeId: userId }
                ]
            }
        });

        if (!friendship) {
            return { error: "Friendship not found" };
        }

        const userInfo = {
            id: user.id,
            username: user.username,
            avatar: user.avatar,
        }

        await friendship.destroy();

        if (io && io.notification) {
            io.notification.friendRemoved(friendId, userInfo);
        }

        return { message: "Friend removed successfuly" };

    } catch (error) {
        console.error("Error removing friend:", error);
        throw error;
    }
}

async function blockUser(userId, blockedUserId) {
    try {
        if (userId === blockedUserId) {
            return { error: "You cannot block yourself" };
        }

        const [user, blockedUser] = await Promise.all([
            User.findByPk(userId),
            User.findByPk(blockedUserId)
        ]);


        if (!user || !blockedUser) {
            return { error: "User not found" };
        }

        const existingFriendship = await Friendship.findOne({
            where: {
                [Op.or]: [
                    { requesterId: userId, addresseeId: blockedUserId },
                    { requesterId: blockedUserId, addresseeId: userId }
                ]
            }
        });

        if (existingFriendship) {
            if (existingFriendship.status === 'blocked' &&
                existingFriendship.requesterId === userId &&
                existingFriendship.addresseeId === blockedUser) {
                return { error: "User is allready blocked" };
            }

            existingFriendship.requesterId = userId;
            existingFriendship.addresseeId = blockedUserId;
            existingFriendship.status = 'blocked';
            await existingFriendship.save();

            return {
                friendship: existingFriendship,
                message: "User blocked successfully"
            };
        }

        const friendship = await Friendship.create({
            requesterId: userId,
            addresseeId: blockedUserId,
            status: 'blocked'
        });

        return {
            friendship,
            message: "User blocked successfully"
        };

    } catch (error) {
        console.error("Error block user:", error);
        throw error;
    }
}

async function unblockUser(userId, blockedUserId) {
    try {
        if (userId === blockedUserId) {
            return { error: "You cannot unblock yourself" };
        }

        const [user, blockedUser] = await Promise.all([
            User.findByPk(userId),
            User.findByPk(blockedUserId)
        ]);

        if (!user || !blockedUser) {
            return { error: "User not found" };
        }

        const blockRecord = await Friendship.findOne({
            where: {
                requesterId: userId,
                addresseeId: blockedUserId,
                status: 'blocked'
            }
        });

        if (!blockRecord) {
            return { error: "This user is not blocked by you" };
        }

        await blockRecord.destroy();

        return { message: "User unblocked successfully" };
    } catch (error) {
        console.error("Error unblocking user:", error);
        throw error;
    }
}

async function getPendingStatus(userId) {
    try {
        const pendingRequests = await Friendship.findAll({
            where: {
                requesterId: userId,
                status: 'pending',
            },
            include: [{
                model: User,
                as: 'addressee',
                attributes: ['id', 'username', 'email', 'avatar']
            }],
            order: [['createdAt', 'DESC']]
        });

        return {
            requests: pendingRequests,
            pendingUserIds: pendingRequests.map(req => req.addresseeId)
        };
    } catch (error) {
        console.error("Error getting sent pending requests:", error);
        throw error;
    }
}

async function countUserFriends(userId) {
    try {
        const count = await Friendship.count({
            where: {
                status: 'accepted',
                [Op.or]: [
                    { requesterId: userId },
                    { addresseeId: userId }
                ]
            }
        });

        return count;
    } catch (error) {
        console.error("Error counting user friends:", error);
        throw error;
    }
}

async function getUserFriends(userId) {
    try {
        const friendships = await Friendship.findAll({
            where: {
                status: 'accepted',
                [Op.or]: [
                    { requesterId: userId },
                    { addresseeId: userId }
                ]
            },
            include: [
                {
                    model: User,
                    as: 'requester',
                    attributes: ['id', 'username', 'email', 'avatar'],
                    where: {
                        id: { [Op.ne]: userId }
                    },
                    required: false
                },
                {
                    model: User,
                    as: 'addressee',
                    attributes: ['id', 'username', 'email', 'avatar'],
                    where: {
                        id: { [Op.ne]: userId }
                    },
                    required: false
                }
            ]
        });

        const friends = friendships.map(friendship => {
            return friendship.requesterId === userId ? friendship.addressee : friendship.requester;
        }).filter(Boolean);

        return { friends };

    } catch (error) {
        console.error("Error geting user friends:", error);
        throw error;
    }
}

module.exports = { countUserFriends, setIo, getPendingStatus, sendFriendRequest, cancelFriendRequest, respondToFriendRequest, getIncomingRequests, getOutgoingRequests, removeFriend, blockUser, unblockUser, getUserFriends };
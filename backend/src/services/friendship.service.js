const { User, Friendship } = require('../../db/models')
const { Op } = require('sequelize');

async function sendFriendRequest(requesterId, addresseeId) {
    try {
        if (requesterId === addresseeId) {
            return { error: "You cannot send friend request to yourself" }; //400
        }

        const [requester, addressee] = await Promise.all([
            User.findByPk(requesterId),
            User.findByPk(addresseeId)
        ]);

        if (!requester || !addressee) {
            return { error: "User not found" }; // 400
        }

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
                return {
                    friendship: existingFriendship,
                    message: "Friend request sent"
                };
            }
        }

        const friendship = await Friendship.create({
            requesterId,
            addresseeId,
            status: 'pending'
        });

        return {
            friendship,
            message: "Friend request sent successfully"
        };
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
            }
        });

        if (!friendRequest) {
            return { error: "Friend request not found or you don't have permission to cancel it" };
        }

        await friendRequest.destroy();

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
            }
        });

        if (!friendship) {
            return { error: "Friend request not found or already in processed" };
        }

        friendship.status = accept ? 'accepted' : 'rejected';
        await friendship.save();

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

        const  friendship = await Friendship.findOne({
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

        await friendship.destroy();

        return { message: "Friend removed successfuly" };

    } catch (error) {
        console.error("Error removing friend:", error);
        throw error;
    }
}

async function blockUser(userId, blockedUserId)
{
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

    } catch(error) {
        console.error("Error geting user friends:", error);
        throw error;
    }
}

module.exports = { sendFriendRequest, cancelFriendRequest, respondToFriendRequest, getIncomingRequests, getOutgoingRequests, removeFriend, blockUser, unblockUser, getUserFriends};
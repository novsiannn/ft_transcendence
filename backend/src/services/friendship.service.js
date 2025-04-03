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

module.exports = { sendFriendRequest, respondToFriendRequest, getUserFriends};
const { User, Friendship } = require('../../db/models')
const { Op } = require('sequelize');

async function sendFriendRequest(requesterId, addresseeId) {
    try {
        if (requesterId === addresseeId) {
            return { error: "You cannot send friend request to yourself" };
        }

        const [requester, addressee] = await Promise.all([
            User.findByPk(requesterId),
            User.findByPk(addresseeId)
        ]);

        if (!requester || !addressee) {
            return { error: "User not found" };
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
                    return { error: "Friend request already sent" };
                } else {
                    existingFriendship.status = 'accepted';
                    await existingFriendship.save();
                    return {
                        friendship: existingFriendship,
                        message: "Friend request accepted"
                    };
                }
            } else if (status === 'accepted') {
                return { error: "Users are already friends" };
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

module.exports = { sendFriendRequest };
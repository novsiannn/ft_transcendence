const { Friendship } = require('../../db/models');
const { Op } = require('sequelize');

async function areFriends(userId1, userId2) {
    try {
        if (userId1 === userId2) {
            return false;
        }

        const friendship = await Friendship.findOne({
            where: {
                status: 'accepted',
                [Op.or]: [
                    { requesterId: userId1, addresseeId: userId2 },
                    { requesterId: userId2, addresseeId: userId1 },
                ]
            }
        });

        if (friendship) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error checjing friendship:", error);
        return false;
    }
}

module.exports = areFriends;
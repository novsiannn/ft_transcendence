const friendshipService = require('../services/friendship.service');

const FriendshipController = {
    async sendFriendRequest(req, res) {
        try {

        } catch (error) {
            console.error("Error in sendFriendRequest controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        } 
    },

    async acceptFriendRequest(req, res) {
        try {

        } catch (error) {
            console.error("Error in acceptFriendRequest controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        } 
    },

    async rejectFriendRequest(req, res) {
        try {

        } catch (error) {
            console.error("Error in rejectFriendRequest controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        } 
    },

    async getUserFriends(req, res) {
        try {

        } catch (error) {
            console.error("Error in getUserFriends controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },
};

module.exports = FriendshipController;
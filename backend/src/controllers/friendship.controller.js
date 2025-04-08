const friendshipService = require('../services/friendship.service');

const FriendshipController = {
    async sendFriendRequest(req, res) {
        try {
            const requesterId = req.user.id;
            const { addresseeId } = req.body;
            if (!addresseeId) {
                return res.code(400).send({ error: "Addressee ID is required" })
            }

            const result = await friendshipService.sendFriendRequest(requesterId, addresseeId);

            if (result.error) {
                return res.code(400).send({ error: result.error });
            }

            return res.code(201).send(result);
        } catch (error) {
            console.error("Error in sendFriendRequest controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },

    async cancelFriendRequest(req, res) {
        try {
            const userId = req.user.id;
            const { friendshipId } = req.params;

            if (!friendshipId) {
                return res.code(400).send({ error: "Friendship ID is required" });
            }

            const result = await friendshipService.cancelFriendRequest(userId, friendshipId);

            if (result.error) {
                return res.code(400).send({ error: result.error });
            }

            return res.code(204).send(result);
        } catch (error) {
            console.error("Error in cancelFriendRequest controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },

    async acceptFriendRequest(req, res) {
        try {
            const userId = req.user.id;
            const { friendshipId } = req.params;

            if (!friendshipId) {
                return res.code(400).send({ error: "Friendship ID is required" })
            }

            const result = await friendshipService.respondToFriendRequest(friendshipId, userId, true);

            if (result.error) {
                return res.code(400).send({ error: result.error });
            }

            return res.code(200).send(result);
        } catch (error) {
            console.error("Error in acceptFriendRequest controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },

    async rejectFriendRequest(req, res) {
        try {
            const userId = req.user.id;
            const { friendshipId } = req.params;

            if (!friendshipId) {
                return res.code(400).send({ error: "Friendship ID is required" });
            }

            const result = await friendshipService.respondToFriendRequest(friendshipId, userId, false);

            if (result.error) {
                return res.code(400).send({ error: result.error });
            }

            return res.code(200).send(result);
        } catch (error) {
            console.error("Error in rejectFriendRequest controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },

    async getIncomingRequests(req, res) {
        try {
            const userId = req.user.id;

            // if (!userId) {
            //     return res.code(400).send({ error: "User not found" });
            // }

            const result = await friendshipService.getIncomingRequests(userId);

            return res.code(200).send(result);
        } catch (error) {
            console.error("Error in getIncomingRequests controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },

    async getOutgoingRequests(req, res) {
        try {
            const userId = req.user.id;

            const status = req.query.status || 'accepted';

            const result = await friendshipService.getOutgoingRequests(userId, status);

            return res.code(200).send(result);
        } catch (error) {
            console.error("Error in getOutgoingRequests controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },

    async removeFriend(req, res) {
        try {
            const userId = req.user.id;
            const { friendId } = req.params;

            if (!friendId) {
                return res.code(400).send({ error: "Friend ID is requierd" });
            }

            const result = await friendshipService.removeFriend(userId, friendId);

            if (result.error) {
                return res.code(400).send({ error: result.error });
            }

            return res.code(204).send(result);

        } catch (error) {
            console.error("Error in removeFriend controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },

    async blockUser(req, res) {
        try {
            const userId = req.user.id;
            const { blockedUserId } = req.params;

            if (!blockedUserId) {
                return res.code(400).send({ error: "Blocked user ID is required" });
            }

            const result = await friendshipService.blockUser(userId, blockedUserId);

            if (result.error) {
                return res.code(400).send({ error: result.error });
            }

            return res.code(200).send(result);

        } catch (error) {
            console.error("Error in blockUser controller:", error);
            return res.code(500).send({ error: "Internal serevr error" });
        }
    },

    async unblockUser(req, res) {
        try {
            const userId = req.user.id;
            const { blockedUserId } = req.params;

            if (!blockedUserId) {
                return res.code(400).send({ error: "Blocked user ID is required" });
            }

            const result = await friendshipService.unblockUser(userId, blockedUserId);

            if (result.error) {
                return res.code(400).send({ error: result.error });
            }

            return res.code(204).send(result);
        } catch (error) {
            console.error("Error in unblockUser controller:", error);
            return res.code(500).send({ error: "Internal serevr error" });
        }
    },

    async getUserFriends(req, res) {
        try {
            const userId = req.user.id;

            if (!userId) {
                return res.code(400).send({ error: "User not found" });
            }

            const result = await friendshipService.getUserFriends(userId);

            return res.code(200).send(result);
        } catch (error) {
            console.error("Error in getUserFriends controller:", error);
            return res.code(500).send({ error: "Internal server error" });
        }
    },
};

module.exports = FriendshipController;
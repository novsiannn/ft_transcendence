const gameService = require('../services/game.service');

const GameController = {
    async createCasualGame(req, res) {
    try {
        const userId = req.user.id;
        const friendId = req.body.friendId;
        if (!friendId) {
            return res.code(400).send({ error: 'Friend ID is required' });
        }
        const result = await gameService.createDuel(userId, friendId);
        if (result.error) {
            return res.code(400).send({ error: result.error });
        }
        return res.code(201).send({ 
            game: {
                id: result.game.id,
                player1Id: result.game.player1Id,
                player2Id: result.game.player2Id,
                status: result.game.status,
                gameMode: result.game.gameMode
            }
        });
    } catch (error) {
        console.error('Error creating casual game:', error);
        return res.code(500).send({ error: 'Failed to create casual game' });
    }
    },

    async BeInAQueue(req, res) {
        try {
            const userId = req.user.id;
            const result = await gameService.joinMatchmaking(userId);
            if (result.error) {
                return res.code(400).send({ error: result.error });
            }
            if (result.game) {  
                return res.code(201).send({ 
                    message: 'Game created',
                    game: {
                        id: result.game.id,
                        player1Id: result.game.player1Id,
                        player2Id: result.game.player2Id,
                        status: result.game.status,
                        gameMode: result.game.gameMode
                    }
                });
            }
            return res.code(200).send({ message: 'Added to matchmaking queue' });
        } catch (error) {
            console.error('Error in BeInAQueue:', error);
            return res.code(500).send({ error: 'Failed to process queue' });
        }
    },
    async checkUserInQueue(req, res) {
        try {
            const userId = req.user.id;
            const isInQueue = await gameService.isUserInQueue(userId);
            return res.code(200).send({ inQueue: isInQueue });
        } catch (error) {
            console.error('Error checking user in queue:', error);
            return res.code(500).send({ error: 'Failed to check queue status' });
        }
    },
    async leaveMatchmaking(req, res) {
        try {
            const userId = req.user.id;
            const result = await gameService.leaveMatchmaking(userId);
            if( result.error) {
                return res.code(400).send({ error: result.error });
            }
            return res.code(200).send({ message: result.message });
        } catch (error) {
            console.error('Error leaving matchmaking:', error);
            return res.code(500).send({ error: 'Failed to leave matchmaking queue' });
        }
    },
    // async leaveMatchmakingById(req, res) {
    //     try {
    //         const { userId } = req.params;
    //         const result = await gameService.leaveMatchmaking(userId);
    //         if (result.error) {
    //             return res.code(400).send({ error: result.error });
    //         }
    //         return res.code(200).send({ message: result.message });
    //     } catch (error) {
    //         console.error('Error leaving matchmaking:', error);
    //         return res.code(500).send({ error: 'Failed to leave matchmaking queue' });
    //     }
    // },
    // async updateGameStatus(req, res) {
    //     try {
    //         const { gameId } = req.params;
    //         const { status } = req.body;
            
    //         if (!gameId) {
    //             return res.code(400).send({ error: 'Game ID is required' });
    //         }
            
    //         if (!status) {
    //             return res.code(400).send({ error: 'Status is required' });
    //         }

    //         const result = await gameService.updateDuelStatus(gameId, status);
            
    //         if (result.error) {
    //             return res.code(400).send({ error: result.error });
    //         }
            
    //         return res.code(200).send({ 
    //             message: 'Game status updated successfully',
    //             game: {
    //                 id: result.game.id,
    //                 player1Id: result.game.player1Id,
    //                 player2Id: result.game.player2Id,
    //                 status: result.game.status,
    //                 gameMode: result.game.gameMode
    //             }
    //         });
            
    //     } catch (error) {
    //         console.error('Error updating game status:', error);
    //         return res.code(500).send({ error: 'Failed to update game status' });
    //     }
    // }


    //kilchenk
    async deleteGame(req, res) {
        try {
            const { gameId } = req.params;
            const userId = req.user.id;

            if (!gameId) {
                return res.code(400).send({ error: 'Game ID is required' });
            }

            const result = await gameService.deleteGame(gameId, userId);
            
            if (result.error) {
                if (result.error === 'Game not found') {
                    return res.code(404).send({ error: result.error });
                }
                if (result.error === 'You are not authorized to delete this game') {
                    return res.code(403).send({ error: result.error });
                }
                return res.code(400).send({ error: result.error });
            }

            return res.code(200).send({ 
                message: result.message 
            });
        } catch (error) {
            console.error('Error deleting game:', error);
            return res.code(500).send({ error: 'Failed to delete game' });
        }
    }
}



module.exports = GameController;
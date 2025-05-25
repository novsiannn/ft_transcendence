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
    }
}



module.exports = GameController;
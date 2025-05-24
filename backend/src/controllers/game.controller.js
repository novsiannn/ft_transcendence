const gameService = require('../services/game.service');

const GameController = {
    async createCasualGame(req, res) {
        try {
            const userId = req.user.id;
            const friendId = req.body.friendId;
            if (!friendId) {
                return res.code(400).send({ error: 'Friend ID is required' });
            }
            const duel = await gameService.createCasualGame(userId, friendId);
            if (duel.error) {
                return res.code(400).send({ error: duel.error });
            }
            res.code(201).send({ game: duel });
        }
        catch (error) {
            console.error('Error creating casual game:', error);
            return res.code(500).send({ error: 'Failed to create casual game' });
        }
    },
}

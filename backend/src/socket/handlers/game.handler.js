const GameState = require('../utils/GameState');
const gameService = require('../../services/game.service');

const games = new Map();

function handleJoinGame(socket, gameId) {
    try {
        socket.join(`game_${gameId}`);
        console.log(`User ${socket.user.id} joined game ${gameId}`);
        const room = socket.adapter.rooms.get(`game_${gameId}`);
        const roomSize = room?.size || 0;

        if (roomSize == 2) {
            socket.emit('game:error', { error: 'Game is ready' });
            let gameState = games.get(gameId);
            if (!gameState) {
                const socketsInRoom = Array.from(room);
                gameState = new GameState(socketsInRoom[0], socketsInRoom[1]);
                games.set(gameId, gameState);
                socket.to(`game_${gameId}`).emit('game:ready', gameState.getState());
                // socket.emit('game:ready', gameState.getState());
            }
        }
    }
    catch (error) {
        console.error('Error joining game:', error);
        socket.emit('game:error', { error: 'Failed to join game' });
    }
}


function initialize(io) {
    setInterval(() => {
        games.forEach((game, gameId) => {
            if (game.isRunning) {
                game.update();
                io.to(`game_${gameId}`).emit('game:update', game.getState());

                if (game.winner) {
                    gameService.finishGame(gameId, game.winner, game.getScore());
                    games.delete(gameId);
                }
            }
        });
    }, 1000 / 60); // 60 FPS
    io.on('connection', function(socket) {
        // socket.on('game:join', gameId =>
    });
}
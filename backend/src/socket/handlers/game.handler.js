const GameState = require('../utils/GameState');
const gameService = require('../../services/game.service');

const games = new Map();
let io = null; 

async function handleJoinQueue(socket) {
    socket.join(`mm_${socket.user.id}`);
    console.log(`User ${socket.user.id} joined matchmaking queue`);
}
async function handleLeaveFromQueue(socket){
    socket.leave(`mm_${socket.user.id}`);
    console.log(`User ${socket.user.id} left matchmaking queue`);
}

async function handleJoinGame(socket, gameId) {
    try {
        socket.join(`game_${gameId}`);
        console.log(`User ${socket.user.id} joined game ${gameId}`);
        const room = socket.adapter.rooms.get(`game_${gameId}`);
        const roomSize = room?.size || 0;
        if (roomSize == 2) {
            let gameState = games.get(gameId);
            if (!gameState) {
                const socketsInRoom = Array.from(room);
                gameState = new GameState(socketsInRoom[0], socketsInRoom[1]);
                games.set(gameId, gameState);
                io.to(`game_${gameId}`).emit('game:ready', gameState.getState());
            }
        }
        else if (roomSize > 2) {
            socket.emit('game:error', { error: 'Game is full' });
            socket.leave(`game_${gameId}`);
            console.log(`User ${socket.user.id} left game ${gameId} due to full room`);
        } else {
            socket.emit('game:waiting', { message: 'Waiting for another player to join' });
        }
    }
    catch (error) {
        console.error('Error joining game:', error);
        socket.emit('game:error', { error: 'Failed to join game' });
    }
}

async function handleLeaveGame(socket, gameId){
    socket.leave(`game_${gameId}`);
    console.log(`User ${socket.user.id} left game ${gameId}`);

    const game = games.get(gameId)
    if (game) {
        io.to(`game_${gameId}`).emit('game:finished', { message: 'Game finished' });
    }
}


function handleStartGame(socket, gameId) {
    const game = games.get(gameId);
    if (game) {
        game.start();
        io.to(`game_${gameId}`).emit('game:start', game.getState());
    } else {
        socket.emit('game:error', { error: 'Game not found' });
    }
}

async function handleRestartGame(socket, gameId) {
    const game = games.get(gameId);
    if (game) {
        game.restart();
        game.start();// не уверен, что это нужно
        io.to(`game_${gameId}`).emit('game:restart', game.getState());
    } else {
        socket.emit('game:error', { error: 'Game not found' });
    }
}

async function handleMovePaddle(socket, data) {
    const { gameId, playerId, direction } = data;
    const game = games.get(gameId);
    if (game) {
        game.movePaddle(playerId, direction);
        io.to(`game_${gameId}`).emit('game:update', game.getState());
    } else {
        socket.emit('game:error', { error: 'Game not found' });
    }
}

async function handleLeaveQueue(socket, gameId) {
    const duel = await gameService.getDuelInfo(gameId);
    userId = socket.user.id;
    const opponentId = duel.player1Id === userId ? duel.player2Id : duel.player1Id;
    gameService.leaveMatchmaking(opponentId);
    console.log(`User ${opponentId} left matchmaking queue for game ${gameId}`);
    const game = games.get(gameId);
    if(duel)
        io.to(`mm_${opponentId}`).emit('mm:ready', game.getState());
    else
        socket.emit("game:error", { error: 'Duel not found' });
}

async function initialize(io) {
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
    }, 1000 / 60); 
    io.on('connection', function(socket) {
        socket.on('game:join', gameId => handleJoinGame(socket, gameId));
        socket.on('mm:leave', gameId => handleLeaveQueue(socket, gameId));
        socket.on('game:joinQueue', () => handleJoinQueue(socket));
        socket.on('game:leaveQueue', () => handleLeaveFromQueue(socket));
    });
}

module.exports = { initialize };
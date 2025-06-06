const GameState = require('../utils/GameState');
const gameService = require('../../services/game.service');

const games = new Map();

async function handleJoinQueue(socket) {
    socket.join(`mm_${socket.user.id}`);
    console.log(`User ${socket.user.id} joined matchmaking queue`);
}
async function handleLeaveFromQueue(socket){
    socket.leave(`mm_${socket.user.id}`);
    console.log(`User ${socket.user.id} left matchmaking queue`);
}

// async function preGameTimer(io, gameId) {
//     let seconds = 30;
//     const room = socket.adapter.rooms.get(`game_${gameId}`);


// }
async function handleJoinGame(io, socket, gameId) {
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
                gameService.updateDuelStatus(gameId, 'playing')
                setTimer(io, gameId, gameState);
                console.log(`Game created in WEBSOCKETS for ${gameId}`);
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

async function setTimer(io, gameId, gameState)
{
    let seconds = 5; 
    while(seconds > 0) {
        io.to(`game_${gameId}`).emit('game:timer', { seconds });
        await new Promise(resolve => setTimeout(resolve, 1000));
        seconds--;
    }
    io.to(`game_${gameId}`).emit('game:ready', gameState.getState());
}

// async function handleLeaveGame(io, socket, gameId){
//     socket.leave(`game_${gameId}`);
//     console.log(`User ${socket.user.id} left game ${gameId}`);

//     const game = games.get(gameId)
//     if (game) {
//         io.to(`game_${gameId}`).emit('game:finished', { message: 'Game finished' });
//     }
// }


// function handleStartGame(io, socket, gameId) {
//     const game = games.get(gameId);
//     if (game) {
//         game.start();
//         io.to(`game_${gameId}`).emit('game:start', game.getState());
//     } else {
//         socket.emit('game:error', { error: 'Game not found' });
//     }
// }

// async function handleRestartGame(io,socket, gameId) {
//     const game = games.get(gameId);
//     if (game) {
//         game.restart();
//         game.start();
//         io.to(`game_${gameId}`).emit('game:restart', game.getState());
//     } else {
//         socket.emit('game:error', { error: 'Game not found' });
//     }
// }

async function handleMovePaddle(socket, data) {
    const { gameId, direction } = data; 
    const playerId = socket.user.id;
    let game = games.get(gameId);
    if (game) {
        game.movePaddle(playerId, direction);
    } else {
        console.error(`Game ${gameId} not found for player ${playerId}`);
    }
}

async function handleLeaveQueue(io, socket, gameId) {
    const duel = await gameService.getDuelInfo(gameId);
    if (!duel) {
        socket.emit("game:error", { error: 'Game not found' });
        return;
    }
    // const opponentId = duel.player1Id === socket.user.id ? duel.player2Id : duel.player1Id;
    const opponentId = duel.game.player1Id === socket.user.id ? duel.game.player2Id : duel.game.player1Id;
    await gameService.leaveMatchmaking(opponentId);
    console.log(`User ${opponentId} left matchmaking queue for game ${gameId}`);
    io.to(`mm_${opponentId}`).emit('mm:ready', duel);
}

async function initialize(io) {
    setInterval(() => {
        games.forEach((game, gameId) => {
            if (game.isRunning) {
                game.update();
                io.to(`game_${gameId}`).emit('game:update', game.getState());

                if (game.winner) {
                    gameService.finishDuel(gameId, game.paddles[game.player1Id].score, game.paddles[game.player2Id].score)
                        .then(() => {
                            io.to(`game_${gameId}`).emit('game:finished', { winner: game.winner });
                        })
                        .catch(error => {
                            console.error('Error finishing duel:', error);
                        });
                    games.delete(gameId);
                }
            }
        });
    }, 1000 / 60); 
    io.on('connection', function(socket) {
        socket.on('game:join', gameId => handleJoinGame(io, socket, gameId));
        socket.on('mm:leave', gameId => handleLeaveQueue(io, socket, gameId));
        socket.on('game:joinQueue', () => handleJoinQueue(socket));
        socket.on('game:leaveQueue', () => handleLeaveFromQueue(socket));
        socket.on('game:movePaddle', data => handleMovePaddle(socket, data));
    });
}

module.exports = { initialize };
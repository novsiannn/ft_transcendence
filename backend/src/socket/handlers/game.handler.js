const GameState = require('../utils/GameState');
const gameService = require('../../services/game.service');
const userTracker = require('../utils/userTracker'); 

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
        const duelInfo = await gameService.getDuelInfo(gameId);
        if (!duelInfo || !duelInfo.game) {
            socket.emit('game:error', { error: 'Game not found in database' });
            return;
        }
        if (duelInfo.game.status === 'cancelled') {// Here I check if the game was cancelled
            socket.emit('game:cancelled', {
                gameId: gameId,
            });
            return;
        }
        socket.join(`game_${gameId}`);
        console.log(`User ${socket.user.id} joined game ${gameId}`);
        const room = socket.adapter.rooms.get(`game_${gameId}`);
        const roomSize = room?.size || 0;
        if (roomSize == 2) {
            let gameState = games.get(gameId);
            if (!gameState) {
                const player1Id = duelInfo.game.player1Id;
                const player2Id = duelInfo.game.player2Id;

                gameState = new GameState(player1Id, player2Id);
                games.set(gameId, gameState);
                await gameService.updateDuelStatus(gameId, 'playing')
                setTimer(io, gameId, gameState);
                console.log(`Game created in WEBSOCKETS for game ${gameId}`);
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

async function handleJoinLocalGame(io, socket, data) {
    try {
        const { player1, player2 } = data;
        if (!player1 || !player2) {
            console.error('Invalid player data for local game:', data);
            socket.emit('game:error', { error: 'Invalid player data' });
            return;
        }
        let gameState = new GameState(player1, player2);
        gameState.isLocal = true; 
        const gameId = `${player1}_${player2}`;
        games.set(gameId, gameState);
        socket.join(`game_${gameId}`);
        console.log(`Local game created with ID: ${gameId}`);
        socket.emit('game:localCreated', { gameId });
        setTimer(io, gameId, gameState);
    } catch (error) {
        console.error('Error creating local game:', error);
        socket.emit('game:error', { error: 'Failed to create local game' });
    }
}

async function handleMoveLocalPaddle(socket, data) {
    const { gameId, direction, nickname } = data;
    console.log(`User ${nickname} is moving paddle in local game ${gameId} direction: ${direction}`);
    if (!gameId || !direction || !nickname) {
        socket.emit('localGame:error', { error: 'Missing required fields' });
        return;
    }
    let game = games.get(gameId);
    if (game) {
        game.movePaddle(nickname, direction);
        console.log(`Paddle moved in local game ${gameId} by ${nickname}`);
    } else {
        console.error(`Local game ${gameId} not found for player ${nickname}`);
        socket.emit('localGame:error', { error: 'Game not found' });
    }
}
function setTimer(io, gameId, gameState) {
    console.log("Timer started");
    let seconds = 5;
    
    const timerInterval = setInterval(() => {
        if (seconds > 0) {
            io.to(`game_${gameId}`).emit('game:timer', { seconds });
            console.log(`Timer = ${seconds}`);
            seconds--;
        } else {
            clearInterval(timerInterval);         
            const game = games.get(gameId);
            if (game) {
                game.start();
                io.to(`game_${gameId}`).emit('game:ready', game.getState());
                console.log(`Game ${gameId} started after timer`);
            }
        }
    }, 1000);
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
    console.log(`User ${playerId} is moving paddle in game ${gameId} direction: ${direction}`);
    if (!gameId || !direction) {
        console.error('Invalid data for paddle movement:', data);
        return;
    }
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
    gameService.gameEvents.on('gameCancelled', (data) => {
        const player1Socket = userTracker.getUserSocket(data.player1Id);
        const player2Socket = userTracker.getUserSocket(data.player2Id);
        if (player1Socket) 
            player1Socket.emit('game:cancelled', data);
        if (player2Socket)
            player2Socket.emit('game:cancelled', data);
        console.log(`Game ${data.gameId} cancelled and players notified`);
    });
    setInterval(() => {
        games.forEach(async (game, gameId) => {
            if (game.isRunning) {
                game.update();
                io.to(`game_${gameId}`).emit('game:update', game.getState());
                // console.log(`Game ${gameId} updated:`, game.getState());
            }
            if (game.winner && game.isLocal) {
                game.isRunning = false;
                io.to(`game_${gameId}`).emit('game:finished', { winner: game.winner });
                games.delete(gameId);
            }
            else if (game.winner && !game.settings.calculatedElo) {
                    game.isRunning = false;
                    try {
                        await gameService.finishDuel(gameId, game.paddles[game.player1Id].score, game.paddles[game.player2Id].score);
                        await game.calculateElo(gameId);
                        io.to(`game_${gameId}`).emit('game:finished', { winner: game.winner });

                        const sockets = await io.in(`game_${gameId}`).fetchSockets();
                        for (const socket of sockets) {
                        socket.leave(`game_${gameId}`);
                        console.log(`Socket ${socket.id} left game room ${gameId}`);
                        }

                        games.delete(gameId);
                    } catch (error) {
                        console.error('Error finishing game:', error);
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
        socket.on('game:joinLocal', data => handleJoinLocalGame(io, socket, data));
        socket.on('game:moveLocalPaddle', data => handleMoveLocalPaddle(socket, data));
    });
}

module.exports = { initialize };
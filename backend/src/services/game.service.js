const { Op } = require('sequelize');
const User = require('../../db/models/UserModel');
const PinPong = require('../../db/models/PinPongModel');
const { sendNotification } = require('../socket/handlers/notification');
const notificationService = require('./notification.service');
const EventEmitter = require('events');

let io = null;

function setIo(ioInstance) {
    io = ioInstance;
}


const mmQueue = new Set();
const processingGames = new Set();
const gameEvents = new EventEmitter();

async function updateElo(gameId)  {
    if (processingGames.has(gameId)) {
        console.log(`ELO update already in progress for game ${gameId}`);
        return { message: 'ELO update already in progress' };
    }
    processingGames.add(gameId);
    try {
        const game = await PinPong.findByPk(gameId);
        if (!game) {
            return { error: 'Game not found' };
        }
        if (game.changedElo === true) {
            console.log(`ELO already updated for game ${gameId}`);
            return { message: 'ELO already updated' };
        }
        const [player1, player2] = await Promise.all([
            User.findByPk(game.player1Id),
            User.findByPk(game.player2Id)
        ]);

        if (!player1 || !player2) {
            return { error: 'Players not found' };
        }
        const eloDiff = player1.elo - player2.elo;
        let diffFromBase;
        if(eloDiff >= -300 && eloDiff <= 300){
            diffFromBase = 0;
        }
        else if(eloDiff >= -400 && eloDiff <= 400) {
            diffFromBase = 1;
        }
        else if(eloDiff >= -500 && eloDiff <= 500) {
            diffFromBase = 2;
        }
        else if(eloDiff >= -600 && eloDiff <= 600) {
            diffFromBase = 3;
        }
        else if(eloDiff >= -700 && eloDiff <= 700) {
            diffFromBase = 4;
        }
        else if(eloDiff >= -800 && eloDiff <= 800) {
            diffFromBase = 5;
        }
        else if(eloDiff >= -900 && eloDiff <= 900) {
            diffFromBase = 6;
        }
        else 
            diffFromBase = 7;

        let newRatingUser1;
        let newRatingUser2;
        if(game.player1Score > game.player2Score) {
            if(eloDiff > 0) {
                newRatingUser1 = player1.elo + 25 - diffFromBase;
                newRatingUser2 = player2.elo - 25 + diffFromBase;
            }
            else {
                newRatingUser1 = player1.elo + 25 + diffFromBase;
                newRatingUser2 = player2.elo - 25 - diffFromBase;
            }
        }
        else {
            if(eloDiff < 0){
                newRatingUser2 = player2.elo + 25 - diffFromBase;
                newRatingUser1 = player1.elo - 25 + diffFromBase;
            }
            else {
                newRatingUser2 = player2.elo + 25 + diffFromBase;
                newRatingUser1 = player1.elo - 25 - diffFromBase;
            }
        }
        if (newRatingUser1 < 0) {
            newRatingUser1 = 0;
        }
        if (newRatingUser2 < 0) {
            newRatingUser2 = 0;
        }
        await Promise.all([
            player1.update({ elo: newRatingUser1 }),
            player2.update({ elo: newRatingUser2 }),
            game.update({ changedElo: true })
        ]);
        console.log(`ELO updated: ${player1.username} new ELO: ${newRatingUser1}, ${player2.username} new ELO: ${newRatingUser2}`);
        return { player1: newRatingUser1, player2: newRatingUser2 };
    } catch (error) {
        console.error('Error updating ELO:', error);
        return { error: 'Failed to update ELO' };
    } finally {
        processingGames.delete(gameId);
    }
}


async function createDuel(initiatorId, opponentId) {
    try {
        const [initiator, opponent] = await Promise.all([
            User.findByPk(initiatorId),
            User.findByPk(opponentId)
        ]);

        if (!initiator || !opponent) {
            return { error: 'One or both users not found' };
        }

        if (initiator.id === opponent.id) {
            return { error: 'Cannot create duel with yourself' };
        }

        let activeGame = await PinPong.findOne({
            where: {
                status: {
                    [Op.in]: ['waiting', 'playing']
                },
                [Op.or]: [
                    { player1Id: initiatorId },
                    { player2Id: initiatorId }
                ]
            }
        });

        if (activeGame) {
            return { error: 'Cannot join duel while in an active game, initiator already in a game' };
        }

        activeGame = await PinPong.findOne({
            where: {
                status: {
                    [Op.in]: ['waiting', 'playing']
                },
                [Op.or]: [
                    { player1Id: opponentId },
                    { player2Id: opponentId }
                ]
            }
        });

        if (activeGame) {
            return { error: 'Cannot join duel while in an active game, opponent already in a game' };
        }

        const existingGame = await PinPong.findOne({
            where: {
                status: {
                    [Op.in]: ['waiting', 'playing']
                },
                [Op.or]: [
                    {
                        player1Id: initiator.id,
                        player2Id: opponent.id
                    },
                    {
                        player1Id: opponent.id,
                        player2Id: initiator.id
                    }
                ]
            }
        });

        if (existingGame) {
            return { error: 'An active game already exists between these players' };
        }

        const game = await PinPong.create({
            player1Id: initiator.id,
            player2Id: opponent.id,
            player1Score: 0,
            player2Score: 0,
            status: 'waiting',
            gameMode: 'casual'
        });

        setTimeout(() => {
            checkAndCancelGame(game.id);
        }, 30000);
        
        if (io && io.notification) {
            const notificationData = {
                from: {
                    id: initiator.id,
                    username: initiator.username,
                    avatar: initiator.avatar
                },
                game: {
                    id: game.id,
                    player1Id: game.player1Id,
                    player2Id: game.player2Id,
                    status: game.status,
                    gameMode: game.gameMode,
                    createdAt: game.createdAt
                }
            };

            io.notification.sendFriendGameRequest(opponentId, notificationData);
        }

        await notificationService.createNotification(
            opponentId,
            'game_invite',
            {
                game: {
                    id: game.id,
                    player1Id: game.player1Id,
                    player2Id: game.player2Id,
                    status: game.status,
                    gameMode: game.gameMode,
                    createdAt: game.createdAt
                }
            },
            initiatorId
        );

        return { game };

    } catch (error) {
        console.error('Error creating duel:', error);
        return { error: 'Failed to create duel' };
    }
}

async function checkAndCancelGame(gameId) {
    try {
        const game = await PinPong.findByPk(gameId);
        
        if (!game) {
            console.log(`Game ${gameId} not found for auto-cancel check`);
            return;
        }

        if (game.status === 'waiting') {
            await game.update({
                status: 'cancelled',
            });
            
            console.log(`Game ${gameId} automatically cancelled due to timeout`);
            
            gameEvents.emit('gameCancelled', {
                gameId: gameId,
                player1Id: game.player1Id,
                player2Id: game.player2Id,
            });
            
        } else {
            console.log(`Game ${gameId} status is '${game.status}' - no auto-cancel needed`);
        }
        
    } catch (error) {
        console.error(`Error in auto-cancel for game ${gameId}:`, error);
    }
}

async function updateDuelStatus(duelId, status) {
    try {
        const duel = await PinPong.findByPk(duelId);
        if (!duel) {
            return { error: 'Duel not found' };
        }
        if (duel.status == 'finished') {
            return { error: 'Duel already finished' };
        }
        if (!['waiting', 'playing', 'finished', 'cancelled'].includes(status)) {
            return { error: 'Invalid status' };
        }
        await duel.update({ status });
        return { game: duel };
    } catch (error) {
        console.error('Error updating duel status:', error);
        return { error: 'Failed to update duel status' };
    }
}

async function finishDuel(duelId, user1Score, user2Score) {
    try {
        const duel = await PinPong.findByPk(duelId);
        if (!duel) {
            return { error: 'Duel not found' };
        }
        if (duel.status === 'finished') {
            return { error: 'Duel already finished' };
        }
        await duel.update({
            player1Score: user1Score,  
            player2Score: user2Score,  
            status: 'finished'
        });
        return { game: duel };
    } catch (error) {
        console.error('Error finishing duel:', error);
        return { error: 'Failed to finish duel' };
    }
}

async function joinMatchmaking(userId) {
    try {
        if (!userId) {
        return { error: 'User ID is required' };
        }
        const user = await User.findByPk(userId);
        if (!user) {
            return { error: 'User not found' };
        }   
        const activeGame = await PinPong.findOne({
            where: {
                status: {
                    [Op.in]: ['waiting', 'playing']  //Только реально активные игры
                },
                [Op.or]: [
                    { player1Id: userId },
                    { player2Id: userId }
                ]
            }
        });

        if (activeGame) {
            return { error: 'Cannot join matchmaking while in an active game' };
        }
        if(mmQueue.has(userId)) {
            return { error: 'Already in matchmaking queue' };
        }
        mmQueue.add(userId);
        console.log(`User ${userId} added to matchmaking queue`);
        for(const oponentId of mmQueue) {
            if(oponentId !== userId) {
                mmQueue.delete(userId);
                mmQueue.delete(oponentId);
                const game = await PinPong.create({
                    player1Id: oponentId,
                    player2Id: userId,
                    status: 'waiting',
                    gameMode: 'ranked'
                });
                setTimeout(() => {
                    checkAndCancelGame(game.id);
                }, 30000);
                console.log(`Matchmaking successful: ${userId} vs ${oponentId}`);
                return { game: game };
            }
        }
        console.log(`User ${userId} is waiting for an opponent`);
        return { message: 'Waiting for an opponent' };
    } catch (error) {
        console.error('Error in joinMatchmaking:', error);
        if (mmQueue.has(userId)) {
            mmQueue.delete(userId);
        }
        return { error: 'Failed to process queue' };
    }
}

async function leaveMatchmaking(userId) {
    if (mmQueue.has(userId)) {
        mmQueue.delete(userId);
        return { message: 'Left matchmaking queue' };
    }
    return { error: 'User not in matchmaking queue' };
}

async function isUserInQueue(userId) {
    return mmQueue.has(userId);
}

async function defineWinner(duelId) {
    try {
        const duel = await PinPong.findByPk(duelId);
        if (!duel) {
            throw new Error('Duel not found');
        }
        if (duel.status !== 'finished') {
            throw new Error('Duel not finished');
        }
        let winnerId;
        if (duel.player1Score > duel.player2Score) { 
            winnerId = duel.player1Id;
        } else if (duel.player2Score > duel.player1Score) { 
            winnerId = duel.player2Id; 
        } else {
            throw new Error('Duel is a draw');
        }
        return winnerId;
    } catch (error) {
        console.error('Error defining winner:', error);
        throw error;
    }
}

async function getDuelInfo(duelId) {
    try {
        const duel = await PinPong.findByPk(duelId);
        if (!duel) {
            return { error: 'Duel not found' };
        }
        
        return { 
            game: {
                id: duel.id,
                player1Id: duel.player1Id,
                player2Id: duel.player2Id,
                status: duel.status,
                gameMode: duel.gameMode,
            }
        };
    } catch (error) {
        console.error('Error getting duel info:', error);
        return { error: 'Failed to get duel info' };
    }
}

//kilchenk
async function deleteGame(gameId, userId) {
    try {
        const game = await PinPong.findByPk(gameId);
        if (!game) {
            return { error: 'Game not found' };
        }

        if (game.player1Id !== userId && game.player2Id !== userId) {
            return { error: 'You are not authorized to delete this game' };
        }


        await game.destroy();
        return { success: true, message: 'Game deleted successfully' };
    } catch (error) {
        console.error('Error deleting game:', error);
        return { error: 'Failed to delete game' };
    }
}

async function getUserGames(userId) {
    try {
        const games = await PinPong.findAndCountAll({
            where: {
                status: 'finished', // Только завершенные игры
                [Op.or]: [
                    { player1Id: userId },
                    { player2Id: userId }
                ]
            },
            include: [
                {
                    model: User,
                    as: 'Player1',
                    attributes: ['id', 'username']
                },
                {
                    model: User, 
                    as: 'Player2',
                    attributes: ['id', 'username']
                }
            ],
            order: [['createdAt', 'DESC']],
        });

        return {
            games: games.rows.map(game => ({
                id: game.id,
                player1Username: game.Player1.username,
                player2Username: game.Player2.username,
                player1Score: game.player1Score,
                player2Score: game.player2Score,
                gameDate: game.createdAt,
                currentUserIsPlayer1: game.player1Id === userId
            })),
            total: games.count
        };
    } catch (error) {
        console.error('Error getting user games:', error);
        return { error: 'Failed to get user games' };
    }
}

module.exports = {setIo, deleteGame, createDuel, finishDuel, joinMatchmaking, leaveMatchmaking, defineWinner, updateElo, updateDuelStatus, mmQueue, isUserInQueue, getDuelInfo, gameEvents, getUserGames };

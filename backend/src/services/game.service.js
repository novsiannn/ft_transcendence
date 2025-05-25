const { Op } = require('sequelize');
const User = require('../../db/models/UserModel');
const PinPong = require('../../db/models/PinPongModel');

const mmQueue = new Set();

async function updateElo(userId, eloDifference)  {
    try {
        const user = await User.findByPk(userId);
        if (!user) { throw new Error('User not found'); }

        await user.update({ elo: user.elo + eloDifference });
        return user;
    } catch (error) {
        console.error('Error updating Elo:', error);
        throw error;
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

        const existingGame = await PinPong.findOne({
            where: {
                status: {
                    [Op.not]: 'finished' 
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

        return { game };

    } catch (error) {
        console.error('Error creating duel:', error);
        return { error: 'Failed to create duel' };
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
                    player1Id: userId,
                    player2Id: oponentId,
                    status: 'waiting',
                    gameMode: 'ranked'
                });
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
// async function setPlayerAsReady(userId, duelId) {
//     try {
//         const duel = await PinPong.findByPk(duelId);
//         if (!duel) {
//             throw new Error('Duel not found');
//         }
//         if (duel.status !== 'created') {
//             throw new Error('Duel already finished');
//         }
//         if (userId === duel.user_1) {
//             await duel.update({ user_1_ready: true });
//         } else if (userId === duel.user_2) {
//             await duel.update({ user_2_ready: true });
//         } else {
//             throw new Error('User is not part of this duel');
//         }
//     } catch (error) {
//         console.error('Error setting player as ready:', error);
//         throw error;
//     }
// }
// async function leaveGame(userId, duelId) {
//     try {
//         const duel = await PinPong.findByPk(duelId);
//         if (!duel) {
//             throw new Error('Duel not found');
//         }
//         if (userId === duel.user_1) {
//             await duel.update({ user_1: null, user_1_ready: false });
//         } else if (userId === duel.user_2) {
//             await duel.update({ user_2: null, user_2_ready: false });
//         } else {
//             throw new Error('User is not part of this duel');
//         }
//     } catch (error) {
//         console.error('Error leaving game:', error);
//         throw error;
//     }
    
// }

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
        if (duel.user_1_score > duel.user_2_score) {
            winnerId = duel.user_1;
        } else if (duel.user_2_score > duel.user_1_score) {
            winnerId = duel.user_2;
        } else {
            throw new Error('Duel is a draw');
        }
        return winnerId;
    } catch (error) {
        console.error('Error defining winner:', error);
        throw error;
    }
}

module.exports = { createDuel, finishDuel, joinMatchmaking, leaveMatchmaking, defineWinner };
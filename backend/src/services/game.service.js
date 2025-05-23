const { Op } = require('sequelize');
const User = require('../../db/models/UserModel');
const PinPong = require('../../db/models/PinPongModel');

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

async function createDuel(user1Id, user2Id) {// TODO chack status of the duel
    try {
        user1Id = await User.findByPk(user1Id);
        user2Id = await User.findByPk(user2Id);
        if (!user1Id || !user2Id) {
            throw new Error('One or both users do not exist');
        }

        const existingGame = await PinPong.findOne({
            where: {
                status: 'created',
                [Op.or]: [
                    {
                        [Op.and]: [
                            { user_1: user1Id.id },
                            { user_2: user2Id.id }
                        ]
                    },
                    {
                        [Op.and]: [
                            { user_1: user2Id.id },
                            { user_2: user1Id.id }
                        ]
                    }
                ]
            }
        });

        if (existingGame) {
            throw new Error('A duel between these users is already in progress');
        }
        const duel = await PinPong.create({
            user_1: user1Id.id,
            user_2: user2Id.id,
            user_1_score: null,
            user_2_score: null,
            status: 'created'
        });
        return duel;

    } catch (error) {
        console.error('Error creating duel:', error);
        throw error;
    }
}

async function finishDuel(duelId, user1Score, user2Score) {
    try {
        const duel = await PinPong.findByPk(duelId);
        if (!duel) {
            throw new Error('Duel not found');
        }
        if (duel.status !== 'created') {
            throw new Error('Duel already finished');
        }
        await duel.update({
            user_1_score: user1Score,
            user_2_score: user2Score,
            status: 'finished'
        });
        return duel;
    } catch (error) {
        console.error('Error finishing duel:', error);
        throw error;
    }
    
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


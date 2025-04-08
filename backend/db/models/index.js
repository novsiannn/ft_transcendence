const User = require('./UserModel');
const Friendship = require('./FriendshipModel');

User.hasMany(Friendship, {
    as: 'sentRequests',
    foreignKey: 'requesterId',
});

User.hasMany(Friendship, {
    as: 'receivedRequests',
    foreignKey: 'addresseeId',
});

Friendship.belongsTo(User, {
    as: 'requester',
    foreignKey: 'requesterId',
});

Friendship.belongsTo(User, {
    as: 'addressee',
    foreignKey: 'addresseeId',
});

module.exports = { User, Friendship };

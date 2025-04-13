const User = require('./UserModel');
const Chat = require('./ChatModel');
const Message = require('./MessageModel');
const Friendship = require('./FriendshipModel');

// Friendship relations
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

// Chat and Message relations
User.hasMany(Message, {foreignKey: 'senderId', as: 'sentMessages'});
User.hasMany(Message, {foreignKey: 'receiverId', as: 'receivedMessages'});

User.belongsToMany(Chat, { through: 'UserChats', foreignKey: 'userId', as: 'chats'});

Chat.hasMany(Message, { foreignKey: 'chatId', as: 'messages' });
Chat.belongsToMany(User, { through: 'UserChats', foreignKey: 'chatId', as: 'users' });

module.exports = { User, Chat, Message, Friendship };
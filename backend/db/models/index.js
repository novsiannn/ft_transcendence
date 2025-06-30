const User = require('./UserModel');
const Chat = require('./ChatModel');
const Message = require('./MessageModel');
const Friendship = require('./FriendshipModel');
const Notification = require('./NotificationModel');
const PinPong = require('./PinPongModel');

// Friendship relations with CASCADE
User.hasMany(Friendship, {
    as: 'sentRequests',
    foreignKey: 'requesterId',
    onDelete: 'CASCADE'
});

User.hasMany(Friendship, {
    as: 'receivedRequests',
    foreignKey: 'addresseeId',
    onDelete: 'CASCADE'
});

Friendship.belongsTo(User, {
    as: 'requester',
    foreignKey: 'requesterId',
    onDelete: 'CASCADE'
});

Friendship.belongsTo(User, {
    as: 'addressee',
    foreignKey: 'addresseeId',
    onDelete: 'CASCADE'
});

// Notification relations with CASCADE
User.hasMany(Notification, {
    as: 'notifications',
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Notification, {
    as: 'sentNotifications',
    foreignKey: 'senderId',
    onDelete: 'CASCADE'
});

Notification.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Notification.belongsTo(User, {
    as: 'sender',
    foreignKey: 'senderId',
    onDelete: 'CASCADE'
});

// Chat and Message relations with CASCADE
User.hasMany(Chat, {
    foreignKey: 'user_1',
    as: 'ChatsAsUser1',
    onDelete: 'CASCADE'
});

User.hasMany(Chat, {
    foreignKey: 'user_2',
    as: 'ChatsAsUser2',
    onDelete: 'CASCADE'
});

Chat.belongsTo(User, { as: 'User1', foreignKey: 'user_1', onDelete: 'CASCADE'});
Chat.belongsTo(User, { as: 'User2', foreignKey: 'user_2', onDelete: 'CASCADE'});
Chat.hasMany(Message, { foreignKey: 'chatId', as: 'messages', onDelete: 'CASCADE' });

Message.belongsTo(Chat, { foreignKey: 'chatId', onDelete: 'CASCADE' });
Message.belongsTo(User, { as: 'sender', foreignKey: 'senderId', onDelete: 'CASCADE' });
Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiverId', onDelete: 'CASCADE' });

User.hasMany(Message, { foreignKey: 'senderId', as: 'sentMessages', onDelete: 'CASCADE' });
User.hasMany(Message, { foreignKey: 'receiverId', as: 'receivedMessages', onDelete: 'CASCADE' });

//Game relations with CASCADE
PinPong.belongsTo(User, { as: 'Player1', foreignKey: 'player1Id', onDelete: 'CASCADE' });
PinPong.belongsTo(User, { as: 'Player2', foreignKey: 'player2Id', onDelete: 'CASCADE' });
User.hasMany(PinPong, { as: 'GamesAsPlayer1', foreignKey: 'player1Id', onDelete: 'CASCADE' });
User.hasMany(PinPong, { as: 'GamesAsPlayer2', foreignKey: 'player2Id', onDelete: 'CASCADE' });

module.exports = { User, Chat, Message, Friendship, Notification, PinPong };
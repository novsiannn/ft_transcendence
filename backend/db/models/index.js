const User = require('./UserModel');
const Chat = require('./ChatModel');
const Message = require('./MessageModel');
const Friendship = require('./FriendshipModel');
const Notification = require('./NotificationModel');

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

// Notification relations
User.hasMany(Notification, {
    as: 'notifications',
    foreignKey: 'userId',
});

User.hasMany(Notification, {
    as: 'sentNotifications',
    foreignKey: 'senderId',
});

Notification.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId',
});

Notification.belongsTo(User, {
    as: 'sender',
    foreignKey: 'senderId',
});

// Chat and Message relations
Chat.belongsTo(User, { as: 'User1', foreignKey: 'user_1' });
Chat.belongsTo(User, { as: 'User2', foreignKey: 'user_2' });
Chat.hasMany(Message, { foreignKey: 'chatId', as: 'messages' });

Message.belongsTo(Chat, { foreignKey: 'chatId' });
Message.belongsTo(User, { as: 'sender', foreignKey: 'senderId' });
Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiverId' });

User.hasMany(Message, { foreignKey: 'senderId', as: 'sentMessages' });
User.hasMany(Message, { foreignKey: 'receiverId', as: 'receivedMessages' });

module.exports = { User, Chat, Message, Friendship, Notification };
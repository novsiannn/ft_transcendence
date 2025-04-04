const User = require("./UserModel");
const Chat = require("./ChatModel");
const Message = require("./MessageModel");

User.hasMany(Message, {foreignKey: 'senderId', as: 'sentMessages'});
User.hasMany(Message, {foreignKey: 'receiverId', as: 'receivedMessages'});

User.belongsToMany(Chat, { through: 'UserChats', foreignKey: 'userId', as: 'chats'});

Chat.hasMany(Message, { foreignKey: 'chatId', as: 'messages' });
Chat.belongsToMany(User, { through: 'UserChats', foreignKey: 'chatId', as: 'users' });

module.exports = { User, Chat, Message };
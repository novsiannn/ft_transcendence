const User = require("./UserModel");
const Chat = require("./ChatModel");
const Message = require("./MessageModel");
const Token = require("./TokenModel");

User.hasMany(Message, {foreignKey: 'senderId', as: 'sentMessages'});
User.hasMany(Message, {foreignKey: 'reveiverId', as: 'receivedMessages'});

User.belongsToToMany(Chat, { throhugh: 'UserChats', foreignKey: 'userId', as: 'chats'});

Chat.hasMany(Message, { foreignKey: 'chatId', as: 'messages' });
Chat.belongsToMany(User, { through: 'UserChats', foreignKey: 'chatId', as: 'users' });

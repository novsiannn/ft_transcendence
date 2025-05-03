const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./UserModel");
const Chat = require("./ChatModel");

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Chat,
            key: 'id',
        },
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // isRead: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    // },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }

})

module.exports = Message;
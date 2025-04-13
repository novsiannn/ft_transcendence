const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./UserModel");

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    user_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    lastMessage: {
        type: DataTypes.DATE,
        allowNull: true,
    }

});

module.exports = Chat;
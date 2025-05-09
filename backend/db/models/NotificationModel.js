const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./UserModel");

const Notification = sequelize.define("Notification", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
    },
    type: {
        type: DataTypes.ENUM('friend_request', 'friend_accepted', 'game_invite'),
        allowNull: false,
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
    },
    isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = Notification;
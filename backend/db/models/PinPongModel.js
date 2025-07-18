const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./UserModel");

const PinPong = sequelize.define("PinPong", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    player1Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    player2Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },
    // player1Ready: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    // },
    // player2Ready: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    // },
    player1Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    player2Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    status: {
        type: DataTypes.ENUM('waiting', 'playing', 'finished', 'cancelled'),
        defaultValue: 'waiting',
        allowNull: false
    },
    gameMode: {
        type: DataTypes.ENUM('ranked', 'casual'),
        defaultValue: 'casual',
        allowNull: false
    },
    changedElo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // background: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     defaultValue: null,
    // },
    // isFinished: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    // }

}, {
    timestamps: true,
});

module.exports = PinPong;
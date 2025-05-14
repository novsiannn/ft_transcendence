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
    winnerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id',
        },
    },
    isFinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    timestamps: true,
});
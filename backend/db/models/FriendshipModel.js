const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Friendship = sequelize.define("Friendship", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected', 'blocked'),
        defaultValue: 'pending',
        allowNull: false,
    },
    requesterId: {
        type: DataTypes.INTENGER,
        allowNull: false,
    },
    addresseeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Friendship;
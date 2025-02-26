const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./UserModel");

const Token = sequelize.define('Token', {
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

module.exports = Token;

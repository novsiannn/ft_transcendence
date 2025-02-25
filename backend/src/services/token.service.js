const jwt = require("jsonwebtoken");
const TokenModel = require("../../db/models/TokenModel");
// require("dotenv").config();

function generateTokens(payload) {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
  return {
      accessToken,
      refreshToken
  };
}

async function saveToken(userId, refreshToken) {
  const tokenData = await TokenModel.findOne({ where: { userId } });
  if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
  }
  const token = await TokenModel.create({ userId, refreshToken });
  return token;
}

module.exports = { generateTokens, saveToken };

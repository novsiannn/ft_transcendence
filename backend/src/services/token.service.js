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

async function validateAccessToken(token) {
  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    return userData;
  } catch (error) {
    return null;
  }
}

async function validateRefreshToken(token) {
  try {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return userData;
  } catch (error) {
    return null;
  }
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

async function removeToken(refreshToken) {
  try {
    const tokenData = await TokenModel.destroy({ where: { refreshToken } });
    return tokenData;
  } catch (error) {
    throw error;
  }
}

async function findToken(refreshToken) {
  try {
    const tokenData = await TokenModel.findOne({ where: { refreshToken } });
    return tokenData;
  } catch (error) {
    throw error;
  }
}

module.exports = { findToken, validateRefreshToken, validateAccessToken, removeToken, generateTokens, saveToken };

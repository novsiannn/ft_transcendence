const User = require("../../db/models/UserModel");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { sendActivationMail } = require("./mail.service");
const tokenService = require("./token.service");
const UserDto = require("../dtos/user.dto");
// const { logout } = require("../controllers/user.controller");

async function registration(username, email, password) {
  try {
    console.log("Starting registration process");
    const us = await User.findOne({ where: { email } });
    if (us) {
      throw new Error("User already exists");
    }
    const name = await User.findOne({ where: { username }});
    if (name) {
      throw new Error("Username already exists");
    }
    console.log("User does not exist, proceeding with registration");
    const hashPassword = await bcrypt.hash(password, 3);
    console.log("Password hashed");
    const activationLink = uuid.v4();
    console.log("Activation link generated");
    const user = await User.create({
      username,
      email,
      password: hashPassword,
      activationLink,
    });

    console.log("User created in database");
    try {
      sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`); //await !!!!!
      console.log("Activation mail sent");
    } catch (error) {
      console.error("Error sending activation mail:", error);
    }
    const userDto = new UserDto(user);
    console.log("User DTO created");
    const tokens = tokenService.generateTokens({ ...userDto });
    console.log("Tokens generated");
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    console.log("Refresh token saved");

    return {
      ...tokens,
      user: userDto,
    };
  } catch (error) {
    console.error("Error during registration process:", error);
    throw error;
  }
}

async function activate(activationLink) {
  const user = await User.findOne({ where: { activationLink } });
  if (!user) {
    return { error: "User not found" };
  }
  user.isActivated = true;
  await user.save();
}

async function login(email, password) {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return { error: "Incorrect password or email" };
  }
  const isPassEquals = await bcrypt.compare(password, user.password);
  if (!isPassEquals) {
    return { error: "Incorrect password or email" };
  }

  if (!user.isActivated) {
    return { error: "User is not activated" };
  }

  const userDto = new UserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });

  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return {
    ...tokens,
    user: userDto,
  };
}

async function logout(refreshToken) {
  try {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  } catch (error) {
    throw error;
  }
}

async function refresh(refreshToken) {
  if (!refreshToken) {
    return { error: "User not authorized" };
  }
  try {
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      return { error: "User not authorized" };
    }
    const user = await User.findOne({ where: { id: userData.id } });
    if (!user) {
      return { error: "User not found" };
    }
  
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
  
    return {
      ...tokens,
      user: userDto,
    };
  } catch (error) {
    console.error("Error during refresh process:", error);
  }
}

async function getAllUsers() {
  try {
      const users = await User.findAll();
      return users;
  } catch (error) {
      console.error("Error during getAllUsers process:", error);
      throw error;
  }
}

module.exports = { getAllUsers, refresh, logout, login, activate, registration };

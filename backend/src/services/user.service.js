const User = require("../../db/models/UserModel");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { sendActivationMail } = require("./mail.service");
const tokenService = require("./token.service");
const UserDto = require("../dtos/user.dto");

async function registration(email, password) {
  try {
    console.log("Starting registration process");
    const us = await User.findOne({ where: { email } });
    if (us) {
      console.log("User already exists");
      return { error: "User already exists" };
    }
    console.log("User does not exist, proceeding with registration");
    const hashPassword = await bcrypt.hash(password, 3);
    console.log("Password hashed");
    const activationLink = uuid.v4();
    console.log("Activation link generated");
    const user = await User.create({
      email,
      password: hashPassword,
      activationLink,
    });
    console.log("User created in database");
    sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`); //await !!!!!
    console.log("Activation mail sent");
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
    console.log("User not found");
    return { error: "User not found" };
  }
  user.isActivated = true;
  await user.save();
}

module.exports = { activate, registration };

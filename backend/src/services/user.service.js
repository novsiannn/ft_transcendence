const User = require("../../db/models/UserModel");
const Token = require("../../db/models/TokenModel");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { sendActivationMail } = require("./mail.service");
const tokenService = require("./token.service");
const UserDto = require("../dtos/user.dto");
const sequelize = require("../../db/database");
const fs = require("fs-extra");
const path = require("path");


async function registration(username, email, password) {
  try {
    const us = await User.findOne({ where: { email } });
    if (us) {
      return { error: "User already exists" };
    }
    const name = await User.findOne({ where: { username } });
    if (name) {
      return { error: "User already exists" };
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await User.create({
      username,
      email,
      password: hashPassword,
      activationLink,
    });

    // try {
    //   sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`); //await !!!!!
    //   console.log("Activation mail sent");
    // } catch (error) {
    //   console.error("Error sending activation mail:", error);
    // }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

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

  // if (!user.isActivated) {
  //   return { error: "User is not activated" };
  // }

  const userDto = new UserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });

  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return {
    ...tokens,
    user: userDto,
  };
}

async function saveAvatar(userId, fileBuffer, mimetype) {
  try {
    const fileExtension = mimetype.split("/")[1];
    const fileName = `user_${userId}_${Date.now()}.${fileExtension}`;
    const filePath = path.join(__dirname, '../../uploads/avatars', fileName);

    await fs.ensureDir(path.dirname(filePath));

    await fs.writeFile(filePath, fileBuffer);

    const avatarPath = `/uploads/avatars/${fileName}`;

    const user = await User.findByPk(userId);
    if (!user) {
      return { error: "User not found" };
    }

    if (user.avatar) {
      try {
        const oldAvatarPath = path.join(__dirname, '../..', user.avatar);
        if (fs.existsSync(oldAvatarPath) && user.avatar.includes('/uploads/avatars/')) {
          await fs.unlink(oldAvatarPath);
        }
      } catch (error) {
        console.error("Error during deleting old avatar:", error);
      }
    }

    user.avatar = avatarPath;
    await user.save();

    return {
      avatar: avatarPath,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        avatar: user.avatar,
        isActivated: user.isActivated,
      }
    };
  } catch (error) {
    console.error("Error saving avatar:", error);
    throw error;
  }
}

async function getUserProfile(userId) {
  try {
    const user = await User.findByPk(userId, {
      attributes: ['id', 'email', 'username', 'avatar', 'firstName', 'lastName', 'phoneNumber', 'isActivated']
    });

    if (!user) {
      return { error: "User not found" };
    }

    return { user };
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw error;
  }
}

async function updateUser(userId, updateData) {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return { error: "User not found" };
    }
    if (updateData.username) {
      const existingUser = await User.findOne({
        where: {
          username: updateData.username,
          id: { [sequelize.Sequelize.Op.ne]: userId } // !=
        }
      });
      if (existingUser) {
        return { error: "Username is already taken" };
      }
    }

    const allowedFields = ['username', 'firstName', 'lastName', 'phoneNumber'];
    const filteredUpdateData = {};
    for (const field of allowedFields) {
      if (field in updateData) {
        if (updateData[field] === null || updateData[field] === "") {
          filteredUpdateData[field] = null;
        } else {
          filteredUpdateData[field] = updateData[field];
        }
      }
    }

    // await user.update(updateData);
    await user.update(filteredUpdateData);

    const updatedUser = await User.findByPk(userId, {
      attributes: ['id', 'email', 'username', 'firstName', 'lastName', 'phoneNumber', 'isActivated']
    });

    return {
      user: updatedUser
    };
  } catch (error) {
    console.error("Error during updateUser process:", error);
    throw error;
  }
}

async function logout(refreshToken) {
  try {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  } catch (error) {
    throw error;
  }
}

async function deleteUserAccount(userId, password) {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return { error: "User not found" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: "Incorrect password" };
    }

    const avatarPath = user.avatar;

    await Token.destroy({ where: {userId} }); // have to delete

    await user.destroy();

    if (avatarPath && !avatarPath.includes('default')) {
      try {
        const fullAvatarPath = path.join(__dirname, '../..', avatarPath);
        if (fs.existsSync(fullAvatarPath)) {
          fs.unlinkSync(fullAvatarPath);
        }
      } catch (fileError) {
        console.error("Error deleting avatar file:", fileError);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error during account deletion:", error);
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

module.exports = { getAllUsers, refresh, logout, login, activate, registration, updateUser, saveAvatar, getUserProfile, deleteUserAccount };

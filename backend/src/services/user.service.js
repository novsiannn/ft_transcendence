const User = require("../../db/models/UserModel");
const PinPong = require("../../db/models/PinPongModel");
// const Token = require("../../db/models/TokenModel");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { sendActivationMail } = require("./mail.service");
const friendshipService = require('./friendship.service');
const tokenService = require("./token.service");
const UserDto = require("../dtos/user.dto");
const sequelize = require("../../db/database");
const fs = require("fs-extra");
const path = require("path");
const speakeasy = require('speakeasy');//ikhristi
const QRCode = require('qrcode');//ikhristi
const gameService = require('./game.service');//ikhristi
const { error } = require("console");
const { Op } = require('sequelize');

// const { logout } = require("../controllers/user.controller");

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

    return {
      message: "User registered successfully",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        isActivated: user.isActivated
      }
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

  if (user.isTwoFactorEnabled) {
    return {
      requiresTwoFactor: true,
      userId: user.id,
      email: user.email
    }
  }

  // if (!user.isActivated) {
  //   return { error: "User is not activated" };
  // }

  const userDto = new UserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });

  // await tokenService.saveToken(userDto.id, tokens.refreshToken);
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

async function deleteAvatar(userId) {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return { error: "User not found" };
    }

    if (!user.avatar) {
      return { error: "User doesn't have a custom avatar" };
    }

    try {
      const fullAvatarPath = path.join(__dirname, '../..', user.avatar);
      if (fs.existsSync(fullAvatarPath) && user.avatar.includes('/uploads/avatars/')) {
        await fs.unlink(fullAvatarPath);
      }
    } catch (fileError) {
      console.error("Error deleting avatar file:", fileError);
    }

    user.avatar = '';
    await user.save();

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        isTwoFactorEnabled: user.isTwoFactorEnabled
      }
    };
  } catch (error) {
    console.error("Error deleting avatar:", error);
    throw error;
  }
}


async function defineLvl(userId)
{
  try {
    const user = await User.findByPk(userId);
    if (!user)
      return { error: "User not found" };
    const elo = user.elo;
    let lvl;

    if(elo < 501) {
      lvl = 1;
    } else if(elo > 500 && elo < 751) {
      lvl = 2;
    } else if(elo > 750 && elo < 901) {
      lvl = 3;
    } else if(elo > 900 && elo < 1051) {
      lvl = 4;
    } else if(elo > 1050 && elo < 1201) {
      lvl = 5; 
    } else if(elo > 1200 && elo < 1351) {
      lvl = 6;
    } else if(elo > 1350 && elo < 1531) {
      lvl = 7;
    } else if(elo > 1530 && elo < 1751) {
      lvl = 8;
    } else if(elo > 1750 && elo < 2001) {
      lvl = 9;
    } else if(elo > 2000) {
      lvl = 10;
    }

    await user.update({ lvl: lvl });
  } catch (error) {
    console.error("Error defining user level:", error);
    throw error;
  }
}
async function getUserProfile(userId) {
  try {

    await defineLvl(userId);
    const user = await User.findByPk(userId, {
      attributes: ['id', 'email', 'username', 'avatar', 'firstName', 'lastName',
        'phoneNumber', 'isActivated', 'isTwoFactorEnabled', 'language',
        'lvl', 'elo'],
    });

    if (!user) {
      return { error: "User not found" };
    }

    const friendsCount = await friendshipService.countUserFriends(userId);
    const blokedUsersList = await friendshipService.getBlockedUsers(userId);

    const winrateStats = await countProcentWinrate(userId);
    const userGames = await gameService.getUserGames(userId);
    if (winrateStats.error) {
      return { error: winrateStats.error };
    }

    return {
      user: {
        ...user.toJSON(),
        winrate: winrateStats.winrate,
        totalGames: winrateStats.totalGames,
        wonGames: winrateStats.wonGames,
        blockedUserIds: blokedUsersList.blockedUserIds,
        blockedByUserIds: blokedUsersList.blockedByUserIds,
        friendsCount: friendsCount,
        recentGames: userGames.games
      }
    };

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
        if (updateData[field] === null ||
          updateData[field] === "" ||
          updateData[field] === 0 ||
          updateData[field] === "0" ||
          (typeof updateData[field] === 'string' && updateData[field].trim() === '')
        ) {
          filteredUpdateData[field] = null;
        } else {
          filteredUpdateData[field] = updateData[field];
        }
      }
    }

    // await user.update(updateData);
    await user.update(filteredUpdateData);

    await user.reload(); // delete mb

    const updatedUser = await User.findByPk(userId, {
      attributes: ['id', 'email', 'username', 'firstName', 'lastName', 'phoneNumber', 'isActivated', 'avatar']
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
    // const token = await tokenService.removeToken(refreshToken);
    return refreshToken;
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

    // await Token.destroy({ where: { userId } }); // have to delete

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
    // const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData) {
      return { error: "User not authorized" };
    }
    const user = await User.findOne({ where: { id: userData.id } });
    if (!user) {
      return { error: "User not found" };
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);

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
    const usersWithStats = await Promise.all(users.map(async (user) => {
      const winrateStats = await countProcentWinrate(user.id);
      const friendsCount = await friendshipService.countUserFriends(user.id);
      const blockedUsersList = await friendshipService.getBlockedUsers(user.id);
      const userGames = await gameService.getUserGames(user.id);
      return {
        ...user.toJSON(),
        winrate: winrateStats.winrate,
        totalGames: winrateStats.totalGames,
        wonGames: winrateStats.wonGames,
        blockedUserIds: blockedUsersList.blockedUserIds,
        blockedByUserIds: blockedUsersList.blockedByUserIds,
        friendsCount: friendsCount,
        recentGames: userGames.games  
      };
    }));
    return usersWithStats;
  } catch (error) {
    console.error("Error during getAllUsers process:", error);
    throw error;
  }
}

async function set2FA(userId) {
  try {
    const user = await User.findByPk(userId);
    if (user.isTwoFactorEnabled) {
      return { error: "2FA is already enabled for this user" };
    }
    const secret = speakeasy.generateSecret({
      name: `Transcendence:${user.email}`,
      length: 20
    });

    await user.update({ twoFactorSecret: secret.base32 });
    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url);

    console.log('2FA Setup:', {
      userId,
      secret: secret.base32,
      otpauthUrl: secret.otpauth_url
    });

    return {
      qrCodeUrl,
      secret: secret.base32
    }
  } catch (error) {
    console.error("Error during set2FA process:", error);
    throw error;
  }
}

async function verify2FA(userId, token) {
  try {
    const user = await User.findByPk(userId);
    if (!user || !user.twoFactorSecret) {
      return { error: "2FA not enabled for this user" };
    }

    const verif = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token: token,
    });

    console.log('2FA Verification Details:', {
      providedToken: token,
      secret: user.twoFactorSecret,
      verified: verif,
    });

    if (!verif) {
      return { error: "Invalid 2FA token" };
    }

    await user.update({
      isTwoFactorEnabled: true
    })

    return { verified: true };
  } catch (error) {
    console.error("Error in verify2FA service:", error);
    return { error: "Error verifying 2FA" };
  }
}

async function verify2FALogin(userId, token) {
  try {
    const user = await User.findByPk(userId);
    if (!user || !user.isTwoFactorEnabled) {
      return { error: "2FA not enabled for this user" };
    }

    const verif = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token: token,
    });

    if (!verif)
      return { error: "Invalid 2FA token" };

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: userDto,
    };

  } catch (error) {
    console.error("Error in 2FA login verification:", error);
    return { error: "Error verifying 2FA" };
  }
}

async function disable2FA(userId, token) {
  try {
    const user = await User.findByPk(userId);
    if (!user || !user.isTwoFactorEnabled) {
      return { error: "2FA not enabled for this user" };
    }

    const verif = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token: token,
    });

    if (!verif) {
      return { error: "Invalid 2FA token" };
    }

    await user.update({
      isTwoFactorEnabled: false,
      twoFactorSecret: null
    });

    return { success: true };
  } catch (error) {
    console.error("Error in disable2FA service:", error);
    return { error: "Error disabling 2FA" };
  }
}

async function setLanguage(userId, language) {
  try {

    if (!language) {
      return { error: "Language is required" };
    }
    const user = await User.findByPk(userId);
    if (!user)
      return { error: "User not found" };
    user.language = language;
    await user.save();
    return { message: "Language update successfully" };
  }
  catch (error) {
    console.error("Error in setLanguage service:", error);
    return { error: "Error setting language" };
  }
}

async function countProcentWinrate(userId) {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return { error: "User not found" };
    }

    // Получаем все игры пользователя
    const allGames = await PinPong.findAll({
      where: {
        status: 'finished',
        [Op.or]: [
          { player1Id: userId },
          { player2Id: userId }
        ]
      },
      attributes: ['player1Id', 'player2Id', 'player1Score', 'player2Score']
    });

    const totalGames = allGames.length;

    if (totalGames === 0) {
      return {
        winrate: 0,
        totalGames: 0,
        wonGames: 0
      };
    }

    // Подсчитываем победы вручную
    let wonGames = 0;
    allGames.forEach(game => {
      const isPlayer1 = game.player1Id === userId;
      const isPlayer2 = game.player2Id === userId;

      if (isPlayer1 && game.player1Score > game.player2Score) {
        wonGames++; // Игрок 1 победил
      } else if (isPlayer2 && game.player2Score > game.player1Score) {
        wonGames++; // Игрок 2 победил
      }
    });

    console.log('Query results:', {
      userId,
      totalGames,
      wonGames,
      lostGames: totalGames - wonGames
    });

    const winrate = Math.round((wonGames / totalGames) * 100);

    return {
      winrate,
      totalGames,
      wonGames
    };

  } catch (error) {
    console.error("Error in countProcentWinrate service:", error);
    return { error: "Error counting winrate" };
  }
}

async function getLeaderboard() {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'elo'],
      order: [['elo', 'DESC']]
    });

    const leaderboard = await Promise.all(users.map(async (user, index) => {
      const winrateStats = await countProcentWinrate(user.id);

      return {
        id: user.id,
        username: user.username,
        elo: user.elo,
        totalGames: winrateStats.totalGames,
        wonGames: winrateStats.wonGames,
        winrate: winrateStats.winrate,
      };
    }));

    return leaderboard;
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    throw error;
  }
}

module.exports = { getLeaderboard, deleteAvatar, getAllUsers, refresh, logout, login, activate, registration, updateUser, saveAvatar, getUserProfile, deleteUserAccount, set2FA, verify2FA, verify2FALogin, disable2FA, setLanguage, countProcentWinrate };
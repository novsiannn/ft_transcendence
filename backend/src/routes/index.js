const fastify = require('fastify');
const notificationController = require('../controllers/notification.controller');
// const { Model } = require('sequelize');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
// const Token = require('../../db/models/TokenModel');
const chatController = require('../controllers/chat.controller');
const FriendshipController = require('../controllers/friendship.controller');
const { schema } = require('../../db/models/UserModel');
const GameController = require('../controllers/game.controller');

const handle2FAEnable = (req, res) => {
  if (req._handled) return;
  req._handled = true;
  return userController.enable2FA(req, res);
};

const handle2FAVerify = (req, res) => {
  if (req._handled) return;
  req._handled = true;
  return userController.verify2FA(req, res);
};

const handleFindOrCreateChat = (req, res) => {
  if (req._handled) return;
  req._handled = true;
  return chatController.findOrCreateChat(req, res);
};

async function routes(fastify, options) {

  fastify.addSchema({
    $id: 'validateUsername',
    type: 'string',
    pattern: '^[a-zA-Zа-яА-Я0-9]([a-zA-Zа-яА-Я0-9_-]{1,14})[a-zA-Zа-яА-Я0-9]$',
  });

  fastify.addSchema({
    $id: 'validatePassword',
    type: 'string',
    pattern: '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
  });

  fastify.post('/registration', {
    schema: {
      description: 'Register a new user',
      tags: ['Authentication'],
      body: {
        type: 'object',
        required: ['username', 'email', 'password'],
        properties: {
          username: { $ref: 'validateUsername#' },
          email: { type: 'string', format: 'email' },
          password: { $ref: 'validatePassword#' }
        }
      },
      response: {
        201: {
          description: 'User created successfully',
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
                isActivated: { type: 'boolean' }
              }
            }
          }
        },
        400: {
          description: 'Validation error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        409: {
          description: 'User already exists',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    }
  }, userController.registration);


  fastify.get('/activate/:link', {
    schema: {
      description: 'Activate user account',
      tags: ['Authentication'],
      params: {
        type: 'object',
        required: ['link'],
        properties: {
          link: { type: 'string' }
        }
      },
      response: {
        200: {
          description: 'User activated successfully',
          type: 'string'
        },
        404: {
          description: 'User not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    }
  }, userController.activate);

  fastify.post('/login', {
    schema: {
      description: 'Login user',
      tags: ['Authentication'],
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 6 }
        }
      },
      response: {
        200: {
          description: 'User logged in successfully',
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
                isActivated: { type: 'boolean' },
                avatar: { type: 'string' }
              }
            }
          }
        },
        401: {
          description: 'Invalid credentials OR 2FA required',
          type: 'object',
          oneOf: [
            {
              description: 'Invalid credentials',
              type: 'object',
              properties: {
                error: { type: 'string' }
              },
              required: ['error']
            },
            {
              description: '2FA required',
              type: 'object',
              properties: {
                requiresTwoFactor: { type: 'boolean' },
                userId: { type: 'integer' },
                email: { type: 'string' }
              },
              required: ['requiresTwoFactor', 'userId', 'email']
            }
          ]
        },
        403: {
          description: 'User not activated',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    }
  }, userController.login)


  fastify.post('/user/avatar', {
    schema: {
      description: 'Upload user avatar',
      tags: ['Profile'],
      consumes: ['multipart/form-data'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'Avatar uploaded successfully',
          type: 'object',
          properties: {
            message: { type: 'string' },
            avatar: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
                avatar: { type: 'string' },
                isActivated: { type: 'boolean' }
              }
            }
          }
        },
        400: {
          description: 'Invalid file type',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        401: {
          description: 'User not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, userController.uploadAvatar);

  fastify.delete('/user/avatar', {
    schema: {
      description: 'Delete user avatar and set to default',
      tags: ['User'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'Avatar deleted successfully',
          type: 'object',
          properties: {
            message: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                username: { type: 'string' },
                email: { type: 'string' },
                avatar: { type: 'string' },
                firstName: { type: 'string', nullable: true },
                lastName: { type: 'string', nullable: true },
                phoneNumber: { type: 'string', nullable: true },
                isTwoFactorEnabled: { type: 'boolean' }
              }
            }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        401: {
          description: 'Unauthorized',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, userController.deleteAvatar);

  fastify.get('/user/profile', {
    schema: {
      description: 'Get user profile',
      tags: ['Profile'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'User profile retrieved successfully',
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
                avatar: { type: 'string' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                phoneNumber: { type: 'string' },
                isActivated: { type: 'boolean' },
                isTwoFactorEnabled: { type: 'boolean' },
                language: { type: 'string' },
                lvl: { type: 'integer' },
                elo: { type: 'integer' },
                winrate: { type: 'integer' },
                totalGames: { type: 'integer' },
                wonGames: { type: 'integer' },
                blockedUserIds: { 
                  type: 'array',
                  items: { type: 'integer' }
                },
                blockedByUserIds: { 
                  type: 'array',
                  items: { type: 'integer' }
                },
                friendsCount: { type: 'integer' },
              }
            }
          }
        },
        401: {
          description: 'User not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, userController.getUserProfile);

  fastify.post('/logout', {
    schema: {
      description: 'Logout user',
      tags: ['Authentication'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'User logged out successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    }
  }, userController.logout);

  fastify.get('/refresh', {
    schema: {
      description: 'Refresh user token',
      tags: ['Authentication'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'Token refreshed successfully',
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
                isActivated: { type: 'boolean' }
              }
            }
          }
        },
        401: {
          description: 'User not authorized',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    }
  }, userController.refreshUser);


  fastify.get('/users', {
    schema: {
      description: 'Get all users',
      tags: ['Users'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'Users list',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              email: { type: 'string' },
              username: { type: 'string' },
              firstName: { type: 'string' },
              lastName: { type: 'string' },
              phoneNumber: { type: 'string' },
              isActivated: { type: 'boolean' },
              avatar: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
              lvl: { type: 'integer' },
              elo: { type: 'integer' },
              winrate: { type: 'integer' },
              totalGames: { type: 'integer' },
              wonGames: { type: 'integer' },
              blockedUserIds: { 
                type: 'array',
                items: { type: 'integer' }
              },
              blockedByUserIds: { 
                type: 'array',
                items: { type: 'integer' }
              },
              friendsCount: { type: 'integer' },
            }
          }
        },
        401: {
          description: 'User not authorized',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, userController.getUsers);

  fastify.put('/user/profile', {
    schema: {
      description: 'Update user profile',
      tags: ['Profile'],
      security: [{ bearerAuth: [] }],
      body: {
        type: 'object',
        properties: {
          username: { type: 'string', minLength: 3 },
          firstName: { type: ['string', 'null'] },
          lastName: { type: ['string', 'null'] },
          phoneNumber: { type: ['string', 'null'] }
        }
      },
      response: {
        200: {
          description: 'User profile updated successfully',
          type: 'object',
          properties: {
            message: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
                firstName: { type: ['string', 'null'] },
                lastName: { type: ['string', 'null'] },
                phoneNumber: { type: ['string', 'null'] },
                isActivated: { type: 'boolean' },
                avatar: { type: 'string' }
              }
            }
          }
        },
        400: {
          description: 'Invalid data',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        401: {
          description: 'User not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        409: {
          description: 'Username already taken',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, userController.updateUser);

  fastify.delete('/user/profile', {
    schema: {
      description: 'Delete user account',
      tags: ['Profile'],
      security: [{ bearerAuth: [] }],
      body: {
        type: 'object',
        required: ['password'],
        properties: {
          password: { type: 'string', minLength: 6 }
        }
      },
      response: {
        204: {
          description: 'User account deleted successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Password required',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        401: {
          description: 'Incorrect password',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, userController.deleteUserAccount);

  fastify.post('/user/language', {
    schema: {
      description: 'Set user language preference',
      tags: ['Profile'],
      security: [{ bearerAuth: [] }],
      body: {
        type: 'object',
        required: ['language'],
        properties: {
          language: {
            type: 'string'
          }
        }
      },
      response: {
        200: {
          description: 'Language updated successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Invalid language',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, userController.setLanguage);
  // 2FA start
  // fastify.get('/user/profile', { preHandler: authMiddleware }, userController.getUserProfile);
  fastify.post('/2fa/enable', {
    preHandler: authMiddleware,
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            qrCodeUrl: { type: 'string' },
            secret: { type: 'string' }
          }
        }
      }
    }
  }, handle2FAEnable);

  fastify.post('/2fa/verify', {
    preHandler: authMiddleware,
    schema: {
      body: {
        type: 'object',
        required: ['token'],
        properties: {
          token: { type: 'string', minLength: 6, maxLength: 6 }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            verified: { type: 'boolean' }
          }
        }
      }
    }
  }, handle2FAVerify);

  fastify.post('/2fa/login', {
    schema: {
      body: {
        type: 'object',
        required: ['userId', 'token'],
        properties: {
          userId: { type: 'number' },
          token: { type: 'string', minLength: 6, maxLength: 6 }
        }
      },
      response: {
        200: {
          description: '2FA login successful',
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                username: { type: 'string' },
                isActivated: { type: 'boolean' }
              }
            }
          }
        },
        401: {
          description: 'Invalid 2FA token',
          type: 'object',
          properties: {
            error: { type: 'string' }
          },
          required: ['error']
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    }
  }, userController.verify2FALogin)

  fastify.post('/2fa/disable', {
    preHandler: authMiddleware,
    schema: {
      body: {
        type: 'object',
        required: ['token'],
        properties: {
          token: { type: 'string', minLength: 6, maxLength: 6 }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    }
  }, userController.disable2FA);

  //friendship start
  fastify.post('/friendship', {
    schema: {
      description: 'Send a friend request',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      body: {
        type: 'object',
        required: ['addresseeId'],
        properties: {
          addresseeId: { type: 'integer' }
        }
      },
      response: {
        201: {
          description: 'Friend request sent successfully',
          type: 'object',
          properties: {
            friendship: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                requesterId: { type: 'integer' },
                addresseeId: { type: 'integer' },
                status: { type: 'string', enum: ['pending', 'accepted', 'rejected', 'blocked'] },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' }
              }
            },
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.sendFriendRequest);
  fastify.get('/friendship/sent-pending', {
    schema: {
      description: 'Get sent pending friend requests',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'List of sent pending friend requests',
          type: 'object',
          properties: {
            requests: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  requesterId: { type: 'integer' },
                  addresseeId: { type: 'integer' },
                  status: { type: 'string', enum: ['pending'] },
                  createdAt: { type: 'string', format: 'date-time' },
                  updatedAt: { type: 'string', format: 'date-time' },
                  addressee: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      username: { type: 'string' },
                      email: { type: 'string' },
                      avatar: { type: 'string' }
                    }
                  }
                }
              }
            },
            pendingUserIds: {
              type: 'array',
              items: { type: 'integer' }
            }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.getSentPendingRequests);
  fastify.delete('/friendship/outgoing/:friendshipId', {
    schema: {
      description: 'Cancel a pending friend request',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['friendshipId'],
        properties: {
          friendshipId: { type: 'integer' }
        }
      },
      response: {
        204: {
          description: 'Friend request cancelled successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.cancelFriendRequest);
  fastify.put('/friendship/:friendshipId/accept', {
    schema: {
      description: 'Accept a friend request',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['friendshipId'],
        additionalProperties: true,
        properties: {
          friendshipId: { type: 'integer' }
        }
      },
      response: {
        200: {
          description: 'Friend request accepted successfully',
          type: 'object',
          properties: {
            friendship: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                requesterId: { type: 'integer' },
                addresseeId: { type: 'integer' },
                status: { type: 'string', enum: ['pending', 'accepted', 'rejected', 'blocked'] },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' }
              }
            },
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.acceptFriendRequest);
  fastify.put('/friendship/:friendshipId/reject', {
    schema: {
      description: 'reject a friend request',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['friendshipId'],
        additionalProperties: true,
        properties: {
          friendshipId: { type: 'integer' }
        }
      },
      response: {
        200: {
          description: 'Friend request rejected successfully',
          type: 'object',
          properties: {
            friendship: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                requesterId: { type: 'integer' },
                addresseeId: { type: 'integer' },
                status: { type: 'string', enum: ['pending', 'accepted', 'rejected', 'blocked'] },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' }
              }
            },
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.rejectFriendRequest);
  fastify.get('/friendship/incoming', {
    schema: {
      description: 'Get incoming friend requests',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'List of incoming friend requests',
          type: 'object',
          properties: {
            requests: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  requesterId: { type: 'integer' },
                  addresseeId: { type: 'integer' },
                  status: { type: 'string', enum: ['pending'] },
                  createdAt: { type: 'string', format: 'date-time' },
                  updatedAt: { type: 'string', format: 'date-time' },
                  requester: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      username: { type: 'string' },
                      email: { type: 'string' },
                      avatar: { type: 'string' }
                    }
                  }
                }
              }
            }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.getIncomingRequests);
  fastify.get('/friendship/outgoing', {
    schema: {
      description: 'Get outgoing friend requests filtered by status',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      querystring: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            enum: ['pending', 'accepted', 'rejected'],
            default: 'accepted'
          }
        }
      },
      response: {
        200: {
          description: 'List of accepted outgoing friend requests',
          type: 'object',
          properties: {
            requests: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  requesterId: { type: 'integer' },
                  addresseeId: { type: 'integer' },
                  status: { type: 'string', enum: ['accepted'] },
                  createdAt: { type: 'string', format: 'date-time' },
                  updatedAt: { type: 'string', format: 'date-time' },
                  addressee: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      username: { type: 'string' },
                      email: { type: 'string' },
                      avatar: { type: 'string' }
                    }
                  }
                }
              }
            }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.getOutgoingRequests);
  fastify.delete('/friendship/:friendId', {
    schema: {
      description: 'Remove a friend',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['friendId'],
        properties: {
          friendId: { type: 'integer' }
        }
      },
      response: {
        204: {
          description: 'Friend removed successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.removeFriend);
  fastify.post('/friendship/:blockedUserId/block', {
    schema: {
      description: 'Block a user',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['blockedUserId'],
        properties: {
          blockedUserId: { type: 'integer' }
        }
      },
      response: {
        200: {
          description: 'User blocked successfully',
          type: 'object',
          properties: {
            friendship: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                requesterId: { type: 'integer' },
                addresseeId: { type: 'integer' },
                status: { type: 'string', enum: ['blocked'] },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' }
              }
            },
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.blockUser);
  fastify.delete('/friendship/:blockedUserId/block', {
    schema: {
      description: 'Unblock a user',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['blockedUserId'],
        properties: {
          blockedUserId: { type: 'integer' }
        }
      },
      response: {
        204: {
          description: 'User unblocked successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.unblockUser);
  fastify.get('/friendship', {
    schema: {
      description: 'Get user\'s friends',
      tags: ['Friendship'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'List of friends',
          type: 'object',
          properties: {
            friends: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  username: { type: 'string' },
                  email: { type: 'string' },
                  avatar: { type: 'string' },
                }
              }
            }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, FriendshipController.getUserFriends);
  // notification routes
  fastify.get('/notifications', {
    schema: {
      description: 'Get user notifications',
      tags: ['Notifications'],
      security: [{ bearerAuth: [] }],
      querystring: {
        type: 'object',
        properties: {
          limit: { type: 'integer', description: 'Maximum number of notifications to return', default: 20 }
        }
      },
      response: {
        200: {
          description: 'List of user notifications',
          type: 'object',
          properties: {
            notifications: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  type: { type: 'string', enum: ['friend_request', 'friend_accepted', 'friend_rejected', 'friend_removed', 'game_invite'] },
                  senderId: { type: 'integer' },
                  data: { type: 'object' },
                  isRead: { type: 'boolean' },
                  createdAt: { type: 'string', format: 'date-time' },
                  sender: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      username: { type: 'string' },
                      avatar: { type: 'string', nullable: true }
                    }
                  }
                }
              }
            },
            hasUnread: { type: 'boolean' }
          }
        },
        401: {
          description: 'User not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, notificationController.getNotifications);

  fastify.put('/notifications/read-all', {
    schema: {
      description: 'Mark all notifications as read',
      tags: ['Notifications'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'Notification marked as read',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        401: {
          description: 'User not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        404: {
          description: 'Notification not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, notificationController.markAsRead);

  fastify.delete('/notifications/:notificationId', {
    schema: {
      description: 'Delete a notification',
      tags: ['Notifications'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['notificationId'],
        properties: {
          notificationId: { type: 'integer', description: 'Notification ID to delete' }
        }
      },
      response: {
        204: {
          description: 'Notification deleted successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        401: {
          description: 'User not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        404: {
          description: 'Notification not found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, notificationController.deleteNotification);
  // Chat routes
  fastify.post('/chat/create', {
    schema: {
      description: 'Create or find existing chat',
      tags: ['Chat'],
      security: [{ bearerAuth: [] }],
      body: {
        type: 'object',
        required: ['targetUserId'],
        properties: {
          targetUserId: { type: 'integer' }
        }
      },
      response: {
        200: {
          description: 'Chat created or found successfully',
          type: 'object',
          properties: {
            chatId: { type: 'integer' },
            user1: { type: 'integer' },
            user2: { type: 'integer' }
          }
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, chatController.findOrCreateChat);

  fastify.get('/chat/messages/:chatId', {
    schema: {
      description: 'Get chat messages',
      tags: ['Chat'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        required: ['chatId'],
        properties: {
          chatId: { type: 'integer' }
        }
      },
      response: {
        200: {
          description: 'Chat messages retrieved successfully',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              chatId: { type: 'integer' },
              senderId: { type: 'integer' },
              content: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' }
            }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, chatController.getChatMessages);

  fastify.get('/chats', {
    schema: {
      description: 'Get user chats',
      tags: ['Chat'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          description: 'User chats retrieved successfully',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              userId: { type: 'integer' },
              username: { type: 'string' },
              avatar: { type: 'string' },
              message: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  content: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' }
                }
              }
            }
          }
        },
        500: {
          description: 'Internal server error',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    preHandler: authMiddleware
  }, chatController.getUserChats);
  //GAME ROUTES
  fastify.post('/game/matchmaking', {
    schema: {
        description: 'Join matchmaking queue',
        tags: ['Game'],
        security: [{ bearerAuth: [] }],
        response: {
            200: {
                description: 'Added to queue',
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            },
            201: {
                description: 'Game created',
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    game: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            player1Id: { type: 'integer' },
                            player2Id: { type: 'integer' },
                            status: { type: 'string' },
                            gameMode: { type: 'string' }
                        }
                    }
                }
            },
            400: {
                description: 'Bad request',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            },
            500: {
                description: 'Internal server error', 
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    },
    preHandler: authMiddleware
  }, GameController.BeInAQueue);

 fastify.delete('/game/matchmaking', {
    schema: {
        description: 'Leave matchmaking queue',
        tags: ['Game'],
        security: [{ bearerAuth: [] }],
        response: {
            200: {
                description: 'Successfully left queue',
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            },
            400: {
                description: 'Bad request',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            },
            500: {
                description: 'Internal server error',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    },
    preHandler: authMiddleware
}, GameController.leaveMatchmaking);

fastify.post('/game/casual', {
    schema: {
        description: 'Create a casual game with a friend',
        tags: ['Game'],
        security: [{ bearerAuth: [] }],
        body: {
            type: 'object',
            required: ['friendId'],
            properties: {
                friendId: { type: 'integer' }
            }
        },
        response: {
            201: {
                description: 'Game created successfully',
                type: 'object',
                properties: {
                    game: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            player1Id: { type: 'integer' },
                            player2Id: { type: 'integer' },
                            status: { type: 'string' },
                            gameMode: { type: 'string' }
                        }
                    }
                }
            },
            400: {
                description: 'Bad request',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            },
            500: {
                description: 'Internal server error',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    },
    preHandler: authMiddleware
}, GameController.createCasualGame);
fastify.get('/game/matchmaking/status', {
    schema: {
        description: 'Check if user is in matchmaking queue',
        tags: ['Game'],
        security: [{ bearerAuth: [] }],
        response: {
            200: {
                description: 'Queue status retrieved successfully',
                type: 'object',
                properties: {
                    inQueue: { type: 'boolean' }
                }
            },
            500: {
                description: 'Internal server error',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        }
    },
    preHandler: authMiddleware
}, GameController.checkUserInQueue);

//kilchenk
fastify.delete('/game/:gameId', {
  schema: {
      description: 'Delete a game',
      tags: ['Game'],
      security: [{ bearerAuth: [] }],
      params: {
          type: 'object',
          required: ['gameId'],
          properties: {
              gameId: { type: 'integer' }
          }
      },
      response: {
          200: {
              description: 'Game deleted successfully',
              type: 'object',
              properties: {
                  message: { type: 'string' }
              }
          },
          400: {
              description: 'Bad request',
              type: 'object',
              properties: {
                  error: { type: 'string' }
              }
          },
          403: {
              description: 'Forbidden - not authorized to delete this game',
              type: 'object',
              properties: {
                  error: { type: 'string' }
              }
          },
          404: {
              description: 'Game not found',
              type: 'object',
              properties: {
                  error: { type: 'string' }
              }
          },
          500: {
              description: 'Internal server error',
              type: 'object',
              properties: {
                  error: { type: 'string' }
              }
          }
      }
  },
  preHandler: authMiddleware
}, GameController.deleteGame);
}

module.exports = routes;
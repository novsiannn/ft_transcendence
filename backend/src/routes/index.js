const fastify = require('fastify');
// const { Model } = require('sequelize');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const Token = require('../../db/models/TokenModel');
const FriendshipController = require('../controllers/friendship.controller');
const { schema } = require('../../db/models/UserModel');

const handle2FAEnable = (req, res) => {
  // Проверка на повторную обработку
  if (req._handled) return;
  req._handled = true;
  return userController.enable2FA(req, res);
};

const handle2FAVerify = (req, res) => {
  // Проверка на повторную обработку
  if (req._handled) return;
  req._handled = true;
  return userController.verify2FA(req, res);
};

async function routes(fastify, options) {
  fastify.post('/registration', {
    schema: {
      description: 'Register a new user',
      tags: ['Authentication'],
      body: {
        type: 'object',
        required: ['username', 'email', 'password'],
        properties: {
          username: { type: 'string', minLength: 3 },
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 6 }
        }
      },
      response: {
        201: {
          description: 'User created successfully',
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
                avatar: { type: 'string' },
                isActivated: { type: 'boolean' }
              }
            }
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
          description: 'Invalid credentials',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
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
  }, userController.login);


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
                isTwoFactorEnabled: { type: 'boolean' }
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
              updatedAt: { type: 'string', format: 'date-time' }
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
                isActivated: { type: 'boolean' }
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
      }
    }
  }, userController.verify2FALogin);
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
}

module.exports = routes;
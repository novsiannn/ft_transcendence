const fastify = require('fastify');
// const { Model } = require('sequelize');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const Token = require('../../db/models/TokenModel');

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
          description: 'User logged in successfully OR 2FA required',
          type: 'object',
          properties: {
            requiresTwoFactor: { type: 'boolean' },
            userId: { type: 'integer' },
            email: { type: 'string' },
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
                phoneNumber: { type: 'integer' },
                isActivated: { type: 'boolean' }
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
              phoneNumber: { type: 'integer' },
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
          phoneNumber: { type: ['integer', 'null'] }
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
                phoneNumber: { type: ['integer', 'null'] },
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
        200: {
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
          userId: {type: 'number' },
          token: { type: 'string', minLength: 6, maxLength: 6 }
        }
      }
    }
  }, userController.verify2FALogin);

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
}

module.exports = routes;
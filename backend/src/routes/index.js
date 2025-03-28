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
  fastify.post('/registration',{
    schema: {
      body: {
        type: 'object',
        required: ['username', 'email', 'password'],
        properties: {
          username: { type: 'string', minLength: 3 },
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 6 }
        }
      }
    }
  }, userController.registration);
  fastify.get('/activate/:link', userController.activate);
  fastify.post('/login', userController.login);
  fastify.post('/logout', userController.logout);
  fastify.get('/refresh', userController.refreshUser);


  fastify.get('/users', {
    preHandler: authMiddleware
  }, userController.getUsers);

  fastify.put('/user/profile', {
    preHandler: authMiddleware,
    schema: {
      body: {
        type: 'object',
        properties: {
          username: { type: 'string', minLength: 3 },
        }
      }
    }
  }, userController.updateUser);
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
}

module.exports = routes;
const fastify = require('fastify');
// const { Model } = require('sequelize');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

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
  
  fastify.post('/user/avatar', {
    preHandler: authMiddleware,
  }, userController.uploadAvatar);

  fastify.get('/user/profile', {
    preHandler: authMiddleware,
  }, userController.getUserProfile);

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
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          phoneNumber: { type: 'string' }
        }
      }
    }
  }, userController.updateUser);
   // fastify.get('/user/profile', { preHandler: authMiddleware }, userController.getUserProfile);
}

module.exports = routes;
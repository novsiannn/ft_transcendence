const fastify = require('fastify');
// const { Model } = require('sequelize');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

async function routes(fastify, options) {
  fastify.post('/registration', {
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
  },
  userController.registration);
  fastify.get('/activate/:link', userController.activate);
  fastify.post('/login', userController.login);
  fastify.post('/logout', userController.logout);
  fastify.get('/refresh', userController.refreshUser);


  fastify.get('/users', {
    preHandler: authMiddleware
  }, userController.getUsers);

   // fastify.get('/user/profile', { preHandler: authMiddleware }, userController.getUserProfile);
}

module.exports = routes;
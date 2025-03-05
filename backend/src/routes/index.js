// const fastify = require('fastify');
// const { Model } = require('sequelize');
const userController = require('../controllers/user.controller');

async function routes(fastify, options) {
  fastify.post('/registration', userController.registration);

  fastify.get('/activate/:link', userController.activate);

  fastify.post('/login', userController.login);

  fastify.post('/logout', userController.logout);

  fastify.get('/refresh', userController.refreshUser);

  fastify.get('/users', userController.getUsers);
}

module.exports = routes;
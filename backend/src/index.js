require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const sequelize = require('../db/database');
const userRoutes = require('./routes/index');
const fastifyCors = require('@fastify/cors');

fastify.register(require('@fastify/cookie'), {
  secret: process.env.COOKIE_SECRET || 'my-secret', // for cookies signature
  parseOptions: {} // options for parsing cookies
});

fastify.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});


fastify.register(require('@fastify/swagger'), {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'API for users in the system',
      version: '1.0.0',
    },
    servers: [
      { url: 'http://localhost:3000' },
    ],
  },
});

fastify.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs',
});

fastify.register(userRoutes);

async function start() {
  try {
    await sequelize.sync({ force: true }); //false for cleaning the database
    console.log('Database & tables created!');

    await fastify.listen({
      host: '0.0.0.0',
      port: 3000,
    });
    console.log('Server listening at http://localhost:3000');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

start();

// const sequelize = require('../db/database');
// const User = require('../db/models/User');
// async function start() {
//   try {
//     await sequelize.sync({ force: true });
//     console.log('Database & tables created!');
//     // const user = await User.create({
//     //   name: 'John Doe',
//     //   email: 'john.doe@example.com'
//     // });
//     console.log('New user created:', user.toJSON());
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }
// start();
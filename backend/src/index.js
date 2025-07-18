require('dotenv').config();
const fs = require('fs');
const path = require('path');
const sequelize = require('../db/database');
const userRoutes = require('./routes/index');
const fastifyCors = require('@fastify/cors');
const setupWebSockets = require('./socket/index');
const tokenService = require('./services/token.service');
const friendshipService = require('./services/friendship.service');

const keyPath = process.env.SSL_KEY_PATH || path.join(__dirname, './../certs/key.pem');
const certPath = process.env.SSL_CERT_PATH || path.join(__dirname, './../certs/cert.pem');

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.error('SSL certificates not found! Please check paths:', keyPath, certPath);
  process.exit(1);
}

const httpsOptions = {
  https: {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  }
};

const fastify = require('fastify')({
  logger: true,
  ...httpsOptions,
  host: '0.0.0.0',
});

fastify.register(require('@fastify/multipart'), {
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  }
});

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, '../uploads'),
  prefix: '/uploads/',
});

//for WEBSOCKET test start

//chat

// fastify.register(require('@fastify/static'), {
//   root: path.join(__dirname, '../test'),
//   prefix: '/test/',
//   decorateReply: false
// });

//friendship UI UX

// fastify.register(require('@fastify/static'), {
//   root: path.join(__dirname, '..'),
//   prefix: '/test/',
//   decorateReply: false
// });

// fastify.get('/api/test-token', async (request, reply) => {
//   try {
//     const token = request.headers.authorization?.split(' ')[1];
//     if (!token) {
//       return reply.code(400).send({ error: 'Token not provided' });
//     }

//     const userData = await tokenService.validateAccessToken(token);
//     return {
//       isValid: !!userData,
//       userData: userData
//     };
//   } catch (error) {
//     return reply.code(500).send({ error: error.message });
//   }
// });

// fastify.get('/api/friendship', async (request, reply) => {
//   try {
//       const token = request.headers.authorization?.split(' ')[1];
//       if (!token) {
//           return reply.code(401).send({ error: 'Token not provided' });
//       }

//       const userData = await tokenService.validateAccessToken(token);
//       if (!userData) {
//           return reply.code(401).send({ error: 'Invalid token' });
//       }

//       // Возвращаем тестовых друзей
//       const testFriends = [
//           { id: 1, username: 'friend1', avatar: '/avatars/default.png' },
//           { id: 2, username: 'friend2', avatar: '/avatars/default.png' },
//           { id: 3, username: 'friend3', avatar: '/avatars/default.png' }
//       ];

//       return { friends: testFriends };
//   } catch (error) {
//       return reply.code(500).send({ error: error.message });
//   }
// });

//for WEBSOCKET test end

fastify.register(require('@fastify/cookie'), {
  secret: process.env.COOKIE_SECRET || 'my-secret', // for cookies signature
  parseOptions: {} // options for parsing cookies
});


fastify.register(fastifyCors, {
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});


fastify.register(require('@fastify/swagger'), {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'API for ft_transcendence',
      description: 'API for web application with chat and ping-pong',
      version: '1.0.0',
    },
    servers: [
      { url: 'https://localhost:3000' },
    ],
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true
});

fastify.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs',
});

fastify.register(userRoutes);

fastify.get('/', (request, reply) => {
  const host = request.headers.host?.split(':')[0] || 'localhost';
  reply.code(301).redirect(`https://${host}:8888`);
});


async function start() {
  try {
    const io = setupWebSockets(fastify.server);

    fastify.decorate('io', io);
    friendshipService.setIo(io);

    console.log('WebSocket server initialized');

    await fastify.listen({
      host: '0.0.0.0',
      port: 3000,
    });
    console.log('Server listening at https://localhost:3000');


    await sequelize.sync({ force: false }); //true for cleaning the database
    console.log('Database & tables created!');

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
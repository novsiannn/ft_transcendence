require('dotenv').config();
const fs = require('fs');
const path = require('path');
const sequelize = require('../db/database');
const userRoutes = require('./routes/index');
const fastifyCors = require('@fastify/cors');

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
  ...httpsOptions
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
      { url: 'https://localhost:3000' },
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
    console.log('Server listening at https://localhost:3000');
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
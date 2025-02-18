const Fastify = require('fastify');
const sequelize = require('../db/database');
const User = require('../db/models/User');
require('dotenv').config();

const app = Fastify({ logger: false });

app.register(require('@fastify/swagger'), {
  openapi: {
    info: {
      title: 'User API',
      description: 'API for users in the system',
      version: '1.0.0',
    },
    servers: [
      { url: 'http://localhost:3000' },
    ],
  },
});

app.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs',
});
app.register(require('../db/routes/users'));

async function start() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');

    await app.listen({ port:3000 });
    console.log('Server listening at http://localhost:3000');
  } catch (err) {
    console.error('Error:', err);
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
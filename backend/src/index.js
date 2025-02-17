const sequelize = require('../db/database');
const User = require('../db/models/User');

async function start() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');

    // const user = await User.create({
    //   name: 'John Doe',
    //   email: 'john.doe@example.com'
    // });

    console.log('New user created:', user.toJSON());
  } catch (err) {
    console.error('Error:', err);
  }
}

start();

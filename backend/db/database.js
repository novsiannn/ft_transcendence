const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
  logging: console.log,
});

module.exports = sequelize;
// const { Sequelize } = require("sequelize");
// const path = require("path");

// const dbPath = process.env.DB_PATH || "/app/database.sqlite";

// console.log("Using database at path:", dbPath);

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: dbPath,
//   logging: false,
//   dialectOptions: {

//     mode: parseInt('0666', 8)  }
// });

// module.exports = sequelize;
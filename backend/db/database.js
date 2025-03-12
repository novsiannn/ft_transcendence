// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./db/database.sqlite",
//   logging: console.log,
// });

// module.exports = sequelize;


const { Sequelize } = require("sequelize");
const path = require("path");

// Используйте переменную окружения или фиксированный путь
const dbPath = process.env.DB_PATH || "/app/database.sqlite";

console.log("Using database at path:", dbPath);

// Настройка Sequelize с SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false,
  dialectOptions: {
    // Режим открытия базы данных SQLite
    mode: parseInt('0666', 8) // Полные права на чтение/запись
  }
});

module.exports = sequelize;
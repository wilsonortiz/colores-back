const Sequelize = require('sequelize').Sequelize;
require('dotenv').config({path: 'variables.env'})

// Option 1: Passing parameters separately
const database = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASSWORD, {
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});

module.exports = database;

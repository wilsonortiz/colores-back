const Sequelize = require('sequelize').Sequelize;

// Option 1: Passing parameters separately
const database = new Sequelize("colores_db", "postgres", "admin", {
  host: "localhost",
  port: "5432",
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

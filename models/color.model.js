const { DataTypes } = require("sequelize").Sequelize;
const database = require("../config/database");

const Color = database.define("color",
  {
    name: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    pantone: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.NUMBER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Color;

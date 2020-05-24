const { DataTypes } = require("sequelize").Sequelize;
const database = require("../config/database");

const Color = database.define(
  "color",
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

// `sequelize.define` also returns the model
//console.log(Color === Sequelize.models.Color); // true

module.exports = Color;

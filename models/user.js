const Sequelize = require("sequelize");
const sequelize = require("../util/database.js");
const { name } = require("ejs");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  userName: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodeTestApp", "root", "MariaDB123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

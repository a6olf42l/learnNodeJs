const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodeTestApp",
  password: "MariaDB123",
});

module.exports = pool.promise();

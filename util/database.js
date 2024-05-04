const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "testUser",
  database: "node-app",
  password: "123test",
});

module.exports = pool.promise();

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 1041,
  host: "localhost",
  user: "root",
  password: "Bk2=~%pqbV=ECC58",
  database: "hamburgerTown"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

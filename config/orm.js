// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, data){
            if (err) {
                console.log("orm.js, selectAll error: " + err);
            }
            cb(data);
        });
    },
    insertOne: function(table, column, value, cb) {
        //this is for a database with one column of user input
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [table, column, value], function(err, data){
            if (err) {
                console.log("orm.js, insertOne error: " + err);
            }
            cb(data);
        });
    },
    updateOne: function(table, changeColumn, newValue, idColumn, id, cb) {
        //this is for a database in which only one column will be changed
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(queryString, [table, changeColumn, newValue, idColumn, id], function(err, data){
            if (err) {
                console.log(err);
            }
            cb(data);
        });
    }
};

module.exports = orm;
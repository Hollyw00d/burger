var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ?? WHERE devoured = false;";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, burgerId, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false);";
        connection.query(queryString, [tableName, burgerId], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    updateDevouredBurger: function(tableName, burgerId, cb) {
        var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(queryString, [tableName, burgerId] ,function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
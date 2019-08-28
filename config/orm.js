var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableName, burgerName) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false);";
        connection.query(queryString, [tableName, burgerName], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableName, burgerId) {
        var queryString = "UPDATE ?? SET devoured = true WHERE = ?";
        connection.query(queryString, [tableName, burgerId] ,function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    }
};
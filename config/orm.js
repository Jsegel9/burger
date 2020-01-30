var connection = require("./connection");

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(name, cb){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + name + "', FALSE)";
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(col, val, id, cb){
        var queryString = "UPDATE burgers SET" + col;
        queryString += " = " + val;
        queryString += " WHERE ID = " + id;
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
}

module.exports = orm;
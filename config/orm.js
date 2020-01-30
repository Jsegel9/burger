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
    updateOne: function(){

    }
}
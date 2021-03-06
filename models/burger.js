var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insert: function(name, cb){
        orm.insertOne(name, function(res){
            cb(res);
        });
    },
    update: function(col, val, id, cb){
        orm.updateOne(col, val, id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;
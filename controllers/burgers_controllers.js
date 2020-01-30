const express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var burgObj = {
            burgers: data
        };
        console.log(burgObj);
        console.log(burgObj.burgers[0].burger_name)
        res.render("index", burgObj);
    })
})

module.exports = router;
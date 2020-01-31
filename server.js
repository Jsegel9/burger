const express = require("express");
const exphbs = require("express-handlebars");
// const mysql = required("mysql2")
var path = require("path")

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers");
app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});
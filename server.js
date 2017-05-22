/*jshint esversion:6*/
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");

let app = express();
let PORT = process.env.PORT || 8080;

// Requiring our models for syncing
let db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// // parse application/json
// app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));



// Set Handlebars.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

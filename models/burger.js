// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  allBurgers: function(cb) {
    orm.selectALL("burgers", function(res) {
      cb(res);
    });
  },
  addBurger: function(col,vals,cb) {
    orm.insertOne("burgers",col,vals, function(res){

      cb(res);

    });

  },
  eatBurger:function(objColVal, condition,cb){
    orm.updateOne("burgers", objColVal,condition, function(res){
      cb(res);
    });
  }



};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;

/*jshint esversion:6*/
const express = require("express");
const router = express.Router();
// Import the model (vurger.js) to use its database functions.
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.allBurgers(function(data){
      console.log(data);
      console.log('hi');
      res.render("index",{burgers:data});
    });
});

router.post("/", function(req, res) {
  burger.addBurger([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req,res){
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.eatBurger({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });

});






// Export routes for server.js to use.
module.exports = router;

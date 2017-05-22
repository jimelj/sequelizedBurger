/*jshint esversion:6*/
const express = require("express");
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const db = require("../models");

console.log('i am here');
console.log(db.burgers);

router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(dbBurger) {
    res.render("index", {
      burgers: dbBurger
    });
  });


});

router.post("/", function(req, res) {
  db.burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(dbBurger) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.burgers.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger) {
    res.redirect("/");
    console.log('hi');
    console.log(req.params.id);
    console.log(req.body);
  });
});
// Export routes for server.js to use.
module.exports = router;

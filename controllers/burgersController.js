// require express
var express = require("express");

var router = express.Router();
	// need three routes
		// one to display all, one to add burger, one to update when the burger is added/ devo

// require burger.js
var burger = require("../models/burger.js");

		// creates a route for the base 
			// route for the burger display all 
router.get("/", function(req, res){
	// gets the data from the userinput and creates a handlebar object will that data
	burger.selectAll(function(data){
		var handbObject ={
			burgers: data
		};
		// send to the index file to display the burgers
		res.render("index", handbObject);
	});
});

//create  burger
router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.name, function() {
    res.redirect('/');
  });
});
//  update 
router.put("/api/burgers/:id", function(req, res){
	burger.updateOne(req.params.id, function(){
		res.redirect('/');
	});
});



// export router
module.exports = router;

var express = require("express");

var router = express.Router();
	
		


var burger = require("../models/burger.js");

		
router.get("/", function(req, res){
	burger.selectAll(function(data){
		var handbObject ={
			burgers: data
		};
		res.render("index", handbObject);
	});
});


router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.name, function() {
    res.redirect('/');
  });
});

router.put("/api/burgers/:id", function(req, res){
	burger.updateOne(req.params.id, function(results){
		if (results.changedRows == 0) {
      return res.status(404).end();
  } else {
      res.status(200).end();
}
	});
});



module.exports = router;
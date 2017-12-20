
const axios = require("axios");
const router = require("express").Router();
const db = require("../../models");

// -------------------------------------------------
// Route to get all saved articles
router.get("/saved", function(request, response) {
	
	db.Article
      .find({})
      .sort({ date: -1 })
      .then(function(dbArticle) {
		response.json(dbModel) })
      .catch(function(error) {
		response.json(error) })
});


// Route to add an article to saved list
router.post("/saved", function(request, response) {
	console.log(request.body); 

    db.Article
      .create(request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));

});

// Route to delete an article from saved list
router.delete("/saved/:id", function(req, res) {
    console.log(request.params.id);

    db.Article
      .findById(request.params.id)
      .then(dbModel => dbModel.remove())
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
});


module.exports = router;

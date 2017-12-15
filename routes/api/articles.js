const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const axios = require("axios");


//Get all saved articles from the mongodb
router.route("/").get(articlesController.savedArticlesGet)

//Get a single article
router.route("/:id").get(articlesController.savedArticleFind)

//Post a single article: this will be used to save an article
router.route("/:id").post(articlesController.savedArticleCreate)

//Update a single article
// router.route("/:id").put(articlesController.savedArticleUpdate)

//Delete a single article
router.route("/:id").delete(articlesController.savedArticleRemove);

module.exports = router;


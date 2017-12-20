const router = require("express").Router();
const notesController = require("../../controllers/notesController");
const axios = require("axios");


//Get a single article
router.route("/:id").get(notesController.noteGet);

//Post a single article: this will be used to save an article
router.route("/:id").post(notesController.noteCreate);

//Delete a single article
router.route("/:id").delete(notesController.noteRemove);

module.exports = router;
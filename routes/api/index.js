const router = require("express").Router();
const articleRoutes = require("./articles");
const noteRoutes = require("./notes");

// Book routes
router.use("/notes", noteRoutes);
router.use("/articles", articleRoutes);

module.exports = router;

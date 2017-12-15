const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  byline: { type: String, required: true },
  url: { type: String, required: true },
  snippet: { type: String, required: false },
  publishdate: { type: Date, required: true },
  note: { type: Schema.Types.ObjectId, ref: "Note"}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

// `note` is an object that stores a Note id
// The ref property links the ObjectId to the Note model
// This allows us to populate the Article with an associated Note
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  body: { type: String, required: false },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
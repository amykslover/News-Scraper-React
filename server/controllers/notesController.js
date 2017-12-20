const db = require("../models");

module.exports = {

  noteGet: function(request, response) {
    console.log('notesController: notesGet') 
    console.log(request.params.id)

    // db.Article
    //   .findById(request.params.id)
    //   .populate("note")
    //   .then(dbModel => response.json(dbModel))
    //   .catch(error => response.status(422).json(error));
  },
  noteCreate: function(request, response) {
    console.log('notesController: noteCreate') 
    console.log(request.body);

    // db.Note
    //   .create(request.body)
    //   .then(dbModel => return 
    // db.Article.findOneAndUpdate({ _id: request.params.id }, { note: dbNote._id }, { new: true }))
    //   .then(dbModel => response.json(dbModel))
    //   .catch(error => response.status(422).json(error));
  },
  noteRemove: function(request, response) {
    console.log('notesController: noteRemove')    
    console.log(request.params.id)
    
    // db.Note
    //   .findById(request.params.id)
    //   .then(dbModel => dbModel.remove())
    //   .then(dbModel => response.json(dbModel))
    //   .catch(error => response.status(422).json(error));
  }
};
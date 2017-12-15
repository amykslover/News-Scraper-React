const db = require("../models");

module.exports = {

  savedArticlesGet: function(request, response) {
    console.log('articlesController: savedArticlesGet')
    // db.Article
    //   .find({})
    //   .sort({ date: -1 })
    //   .then(dbModel => response.json(dbModel))
    //   .catch(error => response.status(422).json(error));
  },
  savedArticleFind: function(request, response) {
    console.log('articlesController: savedArticleFind')
    console.log(request.params.id);

    // db.Article
    //   .findById(request.params.id)
    //   .then(dbModel => response.json(dbModel))
    //   .catch(error => response.status(422).json(error));
  },
  savedArticleCreate: function(request, response) {
    console.log('articlesController: savedArticleCreate')
    console.log(request.body);

    // db.Article
    //   .create(request.body)
    //   .then(dbModel => response.json(dbModel))
    //   .catch(error => response.status(422).json(error));
  },
  // savedArticleUpdate: function(request, response) {
  //   console.log('articlesController: savedArticleUpdate')

  //   db.Article
  //     .findOneAndUpdate({ _id: request.params.id }, request.body)
  //     .then(dbModel => response.json(dbModel))
  //     .catch(error => response.status(422).json(error));
  // },
  savedArticleRemove: function(request, response) {
    console.log('articlesController: savedArticleRemove')
    console.log(request.params.id);

    // db.Article
    //   .findById(request.params.id)
    //   .then(dbModel => dbModel.remove())
    //   .then(dbModel => response.json(dbModel))
    //   .catch(error => response.status(422).json(error));
  }

};
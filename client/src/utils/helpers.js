// Include the Axios library for HTTP requests
import axios from "axios";

// NYT API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
const helpers = {

  // This will run our query.
  runQuery: function(term, start, end) {
      console.log('runQuery Arguments')
      console.log(term,start,end)
    // Adjust to get search terms in proper format
    var formattedTerm = term.trim();
    var formattedStart = start.trim();
    var formattedEnd = end.trim()


    console.log("Query Run");
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedEnd
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },
  // This will return any saved articles from our database
  // getSaved: function() {
  //   return axios.get("/api/saved")
  //     .then(function(results) {
  //       console.log("axios results", results);
  //       return results;
  //     });
  // },

  // This will save new articles to our database
  postSaved: function(title, date, url) {
    var newArticle = { 
      title: title, 
      url: url,
      pub_date: date
       };
    console.log(newArticle)
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  }
  // This will remove saved articles from our database
  // deleteSaved: function(title, data, url) {
  //   return axios.delete("/api/saved", {
  //     params: {
  //       title: title, 
  //       url: url,
  //       pub_date: date
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("axios results", results);
  //     return results;
  //   });
  // }



};


// We export the helpers function
export default helpers;
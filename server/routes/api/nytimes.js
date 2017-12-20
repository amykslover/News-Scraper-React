const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (request, response) => {
    console.log(request)

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

    axios
    	.get(url, 
    		{ params: { 
                request.query })
    	.then(({ data: { results } }) => response.json(results))
        .catch(error => response.status(422).json(error));

});

module.exports = router;


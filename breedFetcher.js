const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const [data] = JSON.parse(body);
    
    if (!data) {
      console.log("hello");
      callback(null, "Sorry breed not found. Please try again!");
      return;
    }
    
    callback(null, data.description);
  });
};

module.exports = {fetchBreedDescription};
const request = require("request");
const args = process.argv.slice(2);
console.log("args ", args);


const catBreedToSearch = args[0].toLowerCase();
console.log("catBreed ", catBreedToSearch);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${catBreedToSearch}`;
console.log("url ", url);



request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log("Sorry breed not found. Please try again!");
    return;
  }
  
  console.log(data["0"].description);
});
const petFinderAPI = "http://localhost:3000/animals";

fetch(petFinderAPI)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch(console.err);

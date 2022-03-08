const petFinderAPI = "http://localhost:3000/animals";

fetch(petFinderAPI)
  .then((res) => res.json())
  .then(renderAnimals)
  .catch(console.err);

function renderAnimals(animals) {
  animals.forEach(renderAnimal);
}

function renderAnimal(animal) {
  console.log(animal)
  //console.log(animal.name);
  //console.log(animal.colors.primary)
}

// Searchable 
// {
//   "species": "Cat",
//   "type": "Cat",
//   "age": "Baby",
//   "gender": "Female",
//   "size": "Large",
// }



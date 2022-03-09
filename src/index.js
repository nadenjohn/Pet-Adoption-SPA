const petFinderAPI = "http://localhost:3000/animals";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Functions here
  getAnimals();
}

function getAnimals() {
  fetch(petFinderAPI)
    .then((res) => res.json())
    .then(renderAnimals)
    .catch(console.err);
}

function renderAnimals(animals) {
  animals.forEach(renderAnimal);
}

function renderAnimal(animal) {
  // console.log(animal);
  let ul = document.getElementById("animals-results");
  let animalItem = document.createElement("li");
  animalItem.className = "animal-item";

  let animalName = document.createElement("h3");
  let animalPhoto = document.createElement("img"); // list
  let animalColors = document.createElement("p"); // list
  let animalAge = document.createElement("p");
  let animalOrganization = document.createElement("p"); // organization_animal_id
  let animalContact = document.createElement("p"); // list
  let animalGender = document.createElement('p');
  let animalSize = document.createElement('p');
  let animalCoat = document.createElement('p');
  let animalAttribute = document.createElement('p'); // might have to be a list
  let animalPrimaryBreed = document.createElement('p'); // animal.breeds.primary
  
  
  
  console.log(animal.name);

  animalName.textContent = animal.name;
  animalItem.append(animalName);
  ul.append(animalItem);









}

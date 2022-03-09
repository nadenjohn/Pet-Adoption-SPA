const petFinderAPI = "http://localhost:3000/animals";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Functions here
  getAnimals();
}

function getAnimals() {
  fetch(petFinderAPI)
    .then((res) => res.json())
    .then(loadAnimals)
    .catch(console.err);
}

function loadAnimals(animals) {
  animals.forEach(updateAnimals);
}

function updateAnimals(animal) {
  // console.log(animal);
  console.log(animal.photos.length);

  let ul = document.getElementById("animals-results");
  let animalItem = document.createElement("li");
  animalItem.className = "animal-item";

  let animalName = document.createElement("h3");

  let animalPhoto = document.createElement("img"); // list
  if (animal.photos.length > 0) {
    animalPhoto.src = animal.photos[0].small;
    animalPhoto.alt = animal.name;
  } else {
    animalPhoto.src = "./assets/placeholder.gif";
  }

  let animalColors = document.createElement("p"); // list

  let animalAge = document.createElement("p");

  let animalOrganization = document.createElement("p"); // organization_animal_id
  
  let animalContact = document.createElement("p"); // list

  let animalGender = document.createElement('p');

  let animalSize = document.createElement('p');

  let animalCoat = document.createElement('p');

  let animalAttribute = document.createElement('p'); // might have to be a list

  let animalPrimaryBreed = document.createElement('p'); // animal.breeds.primary
  
  
  

  animalName.textContent = animal.name;
  animalItem.append(animalName, animalPhoto);
  ul.append(animalItem);









}

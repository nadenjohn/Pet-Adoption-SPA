const petFinderAPI = "http://localhost:3000/animals";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Functions here
  loadAnimals();
}


function loadAnimals() {
  let speciesDropdown = document.getElementById("species-dropdown").value;
  fetch(petFinderAPI)
    .then((res) => res.json())
    .then((json) => {
      updateAnimals(json);
      //addAnimalSelectListener();
    })
    .catch(console.err);
}

// console.log("asdasdasdasdasfasdgf")

function updateAnimals(animals) {
  let results = document.querySelector("#animals-results");
  results.innerHTML = "";
  animals.forEach(addAnimals);
}

function addAnimals(animal) {
  // TODO:
  // Add button to redirect to animal petfinder page

  let animalGrid = document.getElementById("animals-results");
  let animalCard = document.createElement("div");
  animalCard.className = "animal-card";

  let animalCardContent = document.createElement("div");
  animalCardContent.className = "animal-card-content";

  let animalPhoto = document.createElement("img");
  animalPhoto.className = "animal-card-photo";
  if (animal.photos.length > 0) {
    animalPhoto.src = animal.photos[0].medium;
    animalPhoto.alt = animal.name;
  } else {
    animalPhoto.src = "./assets/placeholder.gif";
    animalPhoto.alt = animal.name;
  }

  let animalName = document.createElement("h2");
  animalName.textContent = animal.name;

  let animalPrimaryColor = document.createElement("p");
  if (animal.colors.primary === undefined || animal.colors.primary === null) {
    animalPrimaryColor.textContent = "";
  } else {
    animalPrimaryColor.textContent = `Color: ${animal.colors.primary}`;
  }

  let animalAge = document.createElement("p");
  animalAge.textContent = `Age: ${animal.age}`;

  let animalGender = document.createElement("p");
  animalGender.textContent = `Gender: ${animal.gender}`;

  let animalSize = document.createElement("p");
  animalSize.textContent = `Size: ${animal.size}`;

  // let animalCoat = document.createElement('p');
  // let animalAttribute = document.createElement('p'); // might have to be a list
  // let animalPrimaryBreed = document.createElement('p'); // animal.breeds.primary
  // let animalOrganization = document.createElement("p"); // organization_animal_id
  // let animalContact = document.createElement("p"); // list

  animalCardContent.append(
    animalName,
    animalAge,
    animalGender,
    animalSize,
    animalPrimaryColor
  );
  animalCard.append(animalPhoto, animalCardContent);
  animalGrid.append(animalCard);
}



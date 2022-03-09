const petFinderAPI = "http://localhost:3000/animals";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Functions here
  loadAnimals();
}

function loadAnimals() {
  fetch(petFinderAPI)
    .then((res) => res.json())
    .then((json) => {
      updateAnimals(json);
    })
    .catch(console.err);
}

function updateAnimals(animals) {
  // let results = document.querySelector("#animals-results");
  // results.innerHTML = "";

  // Search
  document.getElementById("submit").onclick = function getSelectValue() {
    let speciesOption = document.getElementById("species-dropdown").value;
    let ageOption = document.getElementById("age-dropdown").value;
    let genderOption = document.getElementById("gender-dropdown").value;
    let sizeOption = document.getElementById("size-dropdown").value;

    cardContainer = document.getElementById("animal-card");


    console.log("saderfgsdfhs")
  
    

    searchProperties = animals.filter((e) => {
      //console.log(e.species)
      if (speciesOption !== "" && e.species === speciesOption) {
        console.log(e.species, speciesOption)
        return false;
      }
      if (ageOption !== "" && e.age === ageOption) {
        console.log(ageOption, ageOption)
        return false;
      }
      if (genderOption !== "" && e.gender === genderOption) {
        console.log(e.gender, genderOption)
        return false;
      }
      if (sizeOption !== "" && e.size === sizeOption) {
        console.log(e.size, sizeOption)
        return false;
      }

    })



    return false;

  };
  
  animals.forEach(addAnimals);
}

// // Search
// function addAnimalSelector(animals) {

//   let speciesOption = document.getElementById("species-dropdown");
//   let ageOption = document.getElementById("age-dropdown");
//   let genderOption = document.getElementById("gender-dropdown");
//   let sizeOption = document.getElementById("size-dropdown");
//   // let searchForm = document.getElementById("search-form");
//   // let species = "";

//   speciesOption.addEventListener("change", (e) => {
//     console.log(e.target.value);
//     species = e.target.value;
//   });
//   ageOption.addEventListener("change", (e) => {
//     console.log(e.target.value);
//   });
//   genderOption.addEventListener("change", (e) => {
//     console.log(e.target.value);
//   });
//   sizeOption.addEventListener("change", (e) => {
//     console.log(e.target.value);
//   });

//   // console.log(species);
// }

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

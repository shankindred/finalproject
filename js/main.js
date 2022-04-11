const dogs = [
  {
    name: "Basil",
    age: "Adult",
    gender: "Female",
    size: "Medium",
    description:
      "Basil is a goofy love bug! She has a sweet disposition and is eager to learn. Basil's favorite things are long walks, playing with toys, and cuddling. Basil's ideal home would be with an active family and another dog companion.",
    mainImage: "img/basil1.jpg",
    carouselImage1: "img/basil1.jpg",
    carouselImage2: "img/basil2.jpg",
    carouselImage3: "img/basil3.jpg",
  },
  {
    name: "Pepper",
    age: "Adult",
    gender: "Male",
    size: "Medium",
    description:
      "Looking for an outgoing, spunky bassett hound mix? Pepper just might be your guy! He loves playing fetch, belly rubs and going on weekend hikes. He is extremely friendly with people and other dogs alike. Pepper is obedient and would be a great addition to any household!",
    mainImage: "img/pepper1.jpg",
    carouselImage1: "img/pepper1.jpg",
    carouselImage2: "img/pepper2.jpg",
    carouselImage3: "img/pepper3.jpg",
  },
  {
    name: "Clea",
    age: "Senior",
    gender: "Female",
    size: "Medium",
    description:
      "If you're looking for a cuddly dog to curl up on the couch with you, Clea is your girl! Her ideal day includes snuggling under a blanket or bathing in the sun. She loves toys and scratches behind her ears. While exercise is important for any dog's well-being, Clea is perfectly content lounging for most of the day.",
    mainImage: "img/clea1.jpg",
    carouselImage1: "img/clea1.jpg",
    carouselImage2: "img/clea2.jpg",
    carouselImage3: "img/clea3.jpg",
  },
  {
    name: "Spencer",
    age: "Senior",
    gender: "Male",
    size: "Large",
    description:
      "Spencer is 10 years young and looking for his forever home! Despite his age, he is spunky with lots of youthful energy. He is highly treat motivated and eager to please. While he would do best in a household without children, he is great with other dogs. Spencer would love an active home with a big backyard.",
    mainImage: "img/spencer1.jpg",
    carouselImage1: "img/spencer1.jpg",
    carouselImage2: "img/spencer2.jpg",
    carouselImage3: "img/spencer3.jpg",
  },
  {
    name: "Clover",
    age: "Puppy",
    gender: "Female",
    size: "Small",
    description:
      "Clover is ready to love you unconditionally. She finds great satisfaction in life's simple pleasures like a tennis ball to chase, a bone to chew, people to nuzzle with. Since she is a puppy, she is still learning her manners and could use a little extra training. She is smart and goofy, and would love a backyard to run around in.",
    mainImage: "img/clover1.jpg",
    carouselImage1: "img/clover1.jpg",
    carouselImage2: "img/clover2.jpg",
    carouselImage3: "img/clover3.jpg",
  },
  {
    name: "Leroy",
    age: "Puppy",
    gender: "Male",
    size: "Small",
    description:
      "Don't let Leroy's size fool you! Leroy is an active, yet well-mannered, pup who is ready to accompany you on any adventure. Leroy does best with other small dogs, but is great with all people. After a busy day of playing with his toys he is ready to snuggle into your lap.",
    mainImage: "img/leroy1.jpg",
    carouselImage1: "img/leroy1.jpg",
    carouselImage2: "img/leroy2.jpg",
    carouselImage3: "img/leroy3.jpg",
  },
];
// goal - take list of filtered dogs and populate the document with each dog
function showDogs(filteredDogs) {
  // this is my element in the Dom
  const dogResults = document.querySelector("#dog-list");

  // first - clear the dog-list (make it empty)
  dogResults.innerHTML = "";

  for (let i = 0; i < filteredDogs.length; i++) {
    // Create a HTML string for this dog (const dogInfo)
    // local variable to store the dogs
    const currentDog = filteredDogs[i];
    const modalId = `modalDisplay${i}`;

    // Create the dog-indiv-container HTML string
    // storing what is currently in the variable
    const currentDisplay = dogResults.innerHTML;
    const dogInfo = `
    <div class="dog-indiv-container">
                        <h3>${currentDog.name}</h3>
                        <img class="dog" src="${currentDog.mainImage}" alt="${currentDog.name}">
                        <section class="main-dog-description">
                            <p>${currentDog.gender}</p>
                            <p>${currentDog.age}</p>
                            <p>${currentDog.size}</p>
                         </section>
                         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
                            More Info
                          </button>
                    </div>
                    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                         <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">${currentDog.name}</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src="${currentDog.carouselImage1}" class="d-block w-100" alt="${currentDog.name}">
                              </div>
                              <div class="carousel-item">
                                <img src="${currentDog.carouselImage2}" class="d-block w-100" alt="${currentDog.name}">
                              </div>
                              <div class="carousel-item">
                                <img src="${currentDog.carouselImage3}" class="d-block w-100" alt="${currentDog.name}">
                              </div>
                            </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                                  <div class="additional-info">
                                      <p>${currentDog.gender}</p>
                                      <p>${currentDog.age}</p>
                                      <p>${currentDog.size}</p>
                                  </div>
                                      <p class="dog-personality">${currentDog.description}</p>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" class="btn btn-primary">Adopt today!</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
    `;
    dogResults.innerHTML = currentDisplay + dogInfo;
  }
}
//when the page loads, show the dogs
window.onload = function () {
  showDogs(dogs);
};

//Filtering the dogs - When the checkmark box is selected, display dogs meet criteria

const dogFilterGender = document.querySelectorAll(
  ".gender-filter-container input"
);
const dogFilterAge = document.querySelectorAll(".age-filter-container input");
const dogFilterSize = document.querySelectorAll(".size-filter-container input");

dogFilterGender.forEach(function (filter) {
  filter.addEventListener("change", dogMatch);
});
dogFilterAge.forEach(function (filter) {
  filter.addEventListener("change", dogMatch);
});
dogFilterSize.forEach(function (filter) {
  filter.addEventListener("change", dogMatch);
});

//go through dogFilter to see which ones are checked
function dogMatch() {
  let filteredDogArray = [...dogs];

  //[...dogs] is a spread operator
  // Instead of filtering on the fly, create another list of filters
  // const filters = []
  // filteredDogArray = filteredDogArray.filter(function (dog) {}
  //   filters.forEach(function(filter){}
  //   return shouldShowDog;
  // })

  const genderValues = [];

  //going through the checkboxes, and storing whatever is checked
  dogFilterGender.forEach(function (filterInput) {
    if (filterInput.checked) {
      const value = filterInput.value;
      genderValues.push(value);
    }
  });

  if (genderValues.length > 0) {
    // now we have the list of gender values the user wants to see, so let's filter it by the selection, but having the length says it's okay if it's empty
    filteredDogArray = filteredDogArray.filter(function (dog) {
      return genderValues.includes(dog.gender);
    });
  }

  const ageValues = [];

  dogFilterAge.forEach(function (filterInput) {
    if (filterInput.checked) {
      const value = filterInput.value;
      ageValues.push(value);
    }
  });

  if (ageValues.length > 0) {
    filteredDogArray = filteredDogArray.filter(function (dog) {
      return ageValues.includes(dog.age);
    });
  }

  const sizeValues = [];

  dogFilterSize.forEach(function (filterInput) {
    if (filterInput.checked) {
      const value = filterInput.value;
      sizeValues.push(value);
    }
  });

  if (sizeValues.length > 0) {
    filteredDogArray = filteredDogArray.filter(function (dog) {
      return sizeValues.includes(dog.size);
    });
  }

  showDogs(filteredDogArray);
}

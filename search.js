// Pet data array
const petsData = [
    {
        name: "Whisker Valentino",
        photo_url: "pics/cat11(3).jpg",
        photo_url2: "pics/cat11(2).jpg",
        description: "Will steal yo girl",
        species: "Orange Tabby",
        age: 1,
        gender: "Male",
        adoption_status: "Available",
        type: "Cat"
    },
    {
        name: "Oopie",
        photo_url: "pics/cat2(3).jpg",
        photo_url2: "pics/cat2(2).jpg",
        description: "Very eepy",
        species: "American Shorthair",
        age: 2,
        gender: "Male",
        adoption_status: "Available",
        type: "Cat"
    },
    {
        name: "Goopie",
        photo_url: "pics/cat8(3).png",
        photo_url2: "pics/cat8(2).jpg",
        description: "Smoked once",
        species: "Tabby Cat",
        age: 3,
        gender: "Male",
        adoption_status: "Available",
        type: "Cat"
    },
    {
        name: "Lady Whiskerstein",
        photo_url: "pics/cat6(3).jpg",
        photo_url2: "pics/cat6(3).jpeg",
        description: "Wants Royal Canin everyday",
        species: "Exotic Shorthair",
        age: 4,
        gender: "Female",
        adoption_status: "Available",
        type: "Cat"
    },
    {
        name: "Nibbles",
        photo_url: "pics/dog5.jpeg",
        photo_url2: "pics/dog4and5.jpeg",
        description: "Loves nibbling",
        species: "Labrador Retriever",
        age: 4,
        gender: "Male",
        adoption_status: "Available",
        type: "Dog"
    },
    {
        name: "Bubbles",
        photo_url: "pics/dog4.jpeg",
        photo_url2: "pics/dog4and5.jpeg",
        description: "Is very concerned about Nibbles",
        species: "Labrador Retriever",
        age: 4,
        gender: "Male",
        adoption_status: "Available",
        type: "Dog"
    },
    {
        name: "Coco the Ace of Paws",
        photo_url: "pics/cat5(3).jpg",
        photo_url2: "pics/cat5(2).jpg",
        description: "Do not play solitaire with him",
        species: "Devon Rex",
        age: 4,
        gender: "Male",
        adoption_status: "Available",
        type: "Cat"
    },
    {
        name: "Stella",
        photo_url: "pics/dog2.jpeg",
        photo_url2: "pics/dog2(2).jpeg",
        description: "Loves Minnie Mouse",
        species: "Golden Retriever",
        age: 2,
        gender: "Female",
        adoption_status: "Available",
        type: "Dog"
    },
    {
        name: "Loudmouth Lila",
        photo_url: "pics/dog6.jpeg",
        photo_url2: "pics/dog6(3).png",
        description: "Known for being extra dramatic",
        species: "Siberian Husky",
        age: 5,
        gender: "Female",
        adoption_status: "Available",
        type: "Dog"
    },
    {
        name: "Puffball",
        photo_url: "pics/hamster1.jpeg",
        photo_url2: "pics/hamster1(2).jpeg",
        description: "Knows how to pose (amazingly!)",
        species: "Golden Hamster",
        age: 1,
        gender: "Female",
        adoption_status: "Available",
        type: "Hamster"
    },
    {
        name: "Snicker",
        photo_url: "pics/hamster2.jpeg",
        photo_url2: "pics/hamster2(2).jpeg",
        description: "He is very clean",
        species: "Winter White Dwarf Hamster",
        age: 1,
        gender: "Male",
        adoption_status: "Available",
        type: "Hamster"
    },
    {
        name: "Pip",
        photo_url: "pics/hamster3.jpeg",
        photo_url2: "pics/hamster3(3).jpeg",
        description: "May be somewhat traumatized by the water",
        species: "Syrian Hamster",
        age: 2,
        gender: "Female",
        adoption_status: "Available",
        type: "Hamster"
    },
    {
        name: "Jellybean",
        photo_url: "pics/hamster4(3).jpeg",
        photo_url2: "pics/hamster4(2).jpeg",
        description: "Will judge you",
        species: "Golden Hamster",
        age: 1,
        gender: "Female",
        adoption_status: "Available",
        type: "Hamster"
    },
    {
        name: "Puss in Boots",
        photo_url: "pics/cat17(3).jpg",
        photo_url2: "pics/cat17(2).jpg",
        description: "An alcoholic",
        species: "Abyssinian",
        age: 1,
        gender: "Female",
        adoption_status: "Adopted",
        type: "Cat"
    },
    {
        name: "Professor Wigglytail",
        photo_url: "pics/cat14(3).jpg",
        photo_url2: "pics/cat14(2).jpg",
        description: "Aspire to be a millionaire",
        species: "Scottish Fold",
        age: 3,
        gender: "Male",
        adoption_status: "Adopted",
        type: "Cat"
    },
    {
        name: "Fizzlepop Berrytwist",
        photo_url: "pics/dog3.jpeg",
        photo_url2: "pics/dog3(3).jpeg",
        description: "Loves balloon a little bit too much",
        species: "Shetland Sheepdog",
        age: 3,
        gender: "Female",
        adoption_status: "Adopted",
        type: "Dog"
    },
    {
        name: "Taffy",
        photo_url: "pics/cat12(3).jpg",
        photo_url2: "pics/cat12(2).jpg",
        description: "Very silly",
        species: "Ragdoll",
        age: 3,
        gender: "Female",
        adoption_status: "Adopted",
        type: "Cat"
    },
    {
        name: "Aristocat",
        photo_url: "pics/cat18.jpg",
        photo_url2: "pics/cat18(2).jpg",
        description: "Used to scam grannies",
        species: "Devon Rex",
        age: 3,
        gender: "Male",
        adoption_status: "Adopted",
        type: "Cat"
    },
    {
        name: "Waffles",
        photo_url: "pics/dog7.jpeg",
        photo_url2: "pics/dog7(2).jpeg",
        description: "Probably knows something about you that you don't",
        species: "Pembroke Welsh Corgi",
        age: 2,
        gender: "Male",
        adoption_status: "Adopted",
        type: "Dog"
    },
    {
        name: "Daisy",
        photo_url: "pics/dog8.png",
        photo_url2: "pics/dog8(2).jpeg",
        description: "Used to love sniffing flowers. I wonder why she stopped",
        species: "Dachshund",
        age: 2,
        gender: "Female",
        adoption_status: "Available",
        type: "Dog"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initial display of all pets
    displayFilteredPets();
    
    // Add event listener for the filter form
    document.getElementById('filter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        displayFilteredPets();
    });
});

function displayFilteredPets() {
    // Get selected filters
    const selectedTypes = getSelectedValues('type');
    const selectedStatuses = getSelectedValues('status');
    
    // Filter pets
    const filteredPets = petsData.filter(pet => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(pet.type);
        const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(pet.adoption_status);
        return typeMatch && statusMatch;
    });
    
    // Display filtered pets
    renderPets(filteredPets);
}

function getSelectedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

function renderPets(pets) {
    const displayDataDiv = document.querySelector('.display-data');
    displayDataDiv.innerHTML = '';
    
    pets.forEach((pet, index) => {
        const petElement = document.createElement('div');
        petElement.className = 'one-pet';
        petElement.innerHTML = `
            <div id="petContainer${index}" class="pets-container">
                <div class="oneContainer">
                    <h3>${pet.name}</h3>
                    <div class="pet-images">
                        <img id="image1${index}" src="${pet.photo_url}" class="visible">
                        <img id="image2${index}" src="${pet.photo_url2}">
                    </div>
                    <div class="buttons">
                        <button id="prev${index}" class="prev-button">&lt;</button>
                        <button id="next${index}" class="next-button">&gt;</button>
                    </div>
                    <p class="description">${pet.description}</p>
                    <p><b>Species:</b> ${pet.species}</p>
                    <p><b>Age:</b> ${pet.age}</p>
                    <p><b>Gender:</b> ${pet.gender}</p>
                    <p><b>Status:</b> ${pet.adoption_status}</p>
                </div>
            </div>
        `;
        displayDataDiv.appendChild(petElement);
    });
    
    // Add event listeners for image switching
    addImageSwitchListeners();
}

function addImageSwitchListeners() {
    document.querySelectorAll('.pets-container').forEach((container, index) => {
        const images = container.querySelectorAll('.pet-images img');
        const nextButton = container.querySelector('.next-button');
        const prevButton = container.querySelector('.prev-button');
        let currentIndex = 0;
        
        function updateImageVisibility() {
            images.forEach((img, i) => {
                if (i === currentIndex) {
                    img.classList.add('visible');
                } else {
                    img.classList.remove('visible');
                }
            });
        }
        
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImageVisibility();
        });
        
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImageVisibility();
        });
    });
}

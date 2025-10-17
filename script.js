// Array for Destinations
const destinations = [
  {
    name: "Peru",
    id: "card-peru",
    description:
      "Explore the ancient ruins of Machu Picchu and trek through the breathtaking Andes mountains.",
  },
  {
    name: "China",
    id: "card-china",
    description:
      "Walk along the Great Wall and immerse yourself in the rich history of the Forbidden City.",
  },
  {
    name: "South Africa",
    id: "card-southafrica",
    description:
      "Embark on an unforgettable safari adventure in Kruger National Park and visit Cape Town.",
  },
];

// Query Selectors
const bodyElement = document.querySelector("body");
const cardContainer = document.querySelector(".card-container");
const footer = document.querySelector(".footer");

// Function for Generating Destination Cards
function generateCards() {
  cardContainer.innerHTML = "";

  destinations.forEach((destination) => {
    const cardHTML = `
      <div class="card" id="${destination.id}">
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
      </div>`;

    cardContainer.innerHTML += cardHTML;
  });
}

// Functions for Light/Dark Theme and Highlight Cards
function setupEventListeners() {
  const themeToggleButton = document.querySelector("#theme-toggle-btn");
  const highlightButton = document.querySelector("#highlight-cards-btn");
  const allCards = document.querySelectorAll(".card");

  themeToggleButton.addEventListener("click", () => {
    console.log("Theme button was clicked!");
    if (bodyElement.style.backgroundColor !== "black") {
      bodyElement.style.backgroundColor = "black";
      bodyElement.style.color = "white";
    } else {
      bodyElement.style.backgroundColor = "white";
      bodyElement.style.color = "black";
    }
  });

  highlightButton.addEventListener("click", () => {
    allCards.forEach((card) => {
      card.style.border = "2px solid rgb(195, 251, 125)";
    });
  });
}

// Function for Update Footer
function updateFooter() {
  footer.innerHTML =
    '<p>&copy; 2025 Balazs Farago Destinations | <a href="#">Contact Us</a></p>';
}

// Script Execution
generateCards();
setupEventListeners();
updateFooter();

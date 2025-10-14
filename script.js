const mainTitle = document.querySelector("#main-title");
const highlightedText = document.querySelector("#highlight");
const firstCard = document.querySelector(".card");
const footer = document.querySelector(".footer");

mainTitle.textContent = "World's Most Epic Destinations";
highlightedText.textContent = "unforgettable";

mainTitle.style.fontWeight = "bold";

// THEME BUTTON
const themeToggleButton = document.querySelector("#theme-toggle-btn");
const bodyElement = document.querySelector("body");
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

// CARDS

firstCard.style.border = "2px solid navy";

const highlightButton = document.querySelector("#highlight-cards-btn");
const allCards = document.querySelectorAll(".card");

highlightButton.addEventListener("click", () => {
  allCards.forEach((card) => {
    card.style.border = "2px solid rgb(195, 251, 125)";
  });
});

footer.innerHTML =
  '<p>&copy; 2025 Farago Destinations | <a href="#">Contact Us</a></p>';

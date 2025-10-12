const mainTitle = document.querySelector("#main-title");
const highlightedText = document.querySelector("#highlight");
const firstCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");
const footer = document.querySelector(".footer");

mainTitle.textContent = "World's Most Epic Destinations";
highlightedText.textContent = "unforgettable";

mainTitle.style.fontWeight = "bold";

firstCard.style.border = "2px solid navy";

footer.innerHTML =
  '<p>&copy; 2025 Farago Destinations | <a href="#">Contact Us</a></p>';

// Functionality for the search input
document.querySelector('.search-button').addEventListener('click', function() {
    const query = document.querySelector('.search-input').value.toLowerCase();
    window.location.href = 'search.html'; // Redirect to search.html
});

document.querySelector('.search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = this.value.toLowerCase();
        window.location.href = 'search.html'; // Redirect to search.html
    }
});





// Existing functionality for movie lists
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  // Skip the first arrow (index 0)
  if (i === 0) return;
  
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

//TOGGLE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.left-menu-icon,.toggle"
);

// Add dark mode functionality
const body = document.body;


ball.addEventListener("click", () => {
  body.classList.toggle("dark-mode"); // Toggle dark mode class

  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

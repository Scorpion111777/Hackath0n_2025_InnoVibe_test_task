function handleTake() {
  alert("You have taken the cat 🐾");
}

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".back-btn");
  backBtn.addEventListener("click", () => {
    history.back();
  });

  const favoriteBtn = document.querySelector(".favorite-btn i");
  let isFavorite = false;

  favoriteBtn.addEventListener("click", () => {
    isFavorite = !isFavorite;

    if (isFavorite) {
      favoriteBtn.classList.remove("fa-regular");
      favoriteBtn.classList.add("fa-solid", "filled");
    } else {
      favoriteBtn.classList.remove("fa-solid", "filled");
      favoriteBtn.classList.add("fa-regular");
    }
  });
});

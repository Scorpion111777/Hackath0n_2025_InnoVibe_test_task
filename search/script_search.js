const searchData = [
    {
        title: "A young rescued pup is in need of a gentle and patient owner",
        tag: "Roudy",
        image: "../images/animal1.png"
    },
    {
        title: "Small dog is looking for a loving home",
        tag: "Luna",
        image: "../images/animal2.png"
    },
    {
        title: "A shy little kitty with charm dreams of finding her human",
        tag: "Cherish",
        image: "../images/animal3.png"
    },
    {
        title: "Volunteers found a ginger cat in need",
        tag: "Pusia",
        image: "../images/animal4.png"
    },
    {
        title: "A young rescued pup is in need of a gentle and patient owner",
        tag: "Roudy",
        image: "../images/animal1.png"
    }
];

const searchResults = document.getElementById("searchResults");

searchData.forEach(item => {
    const card = document.createElement("div");
    card.className = "search-card";

    card.innerHTML = `
    <img src="${item.image}" alt="animal" />
    <div class="card-content">
      <div class="card-title">${item.title}</div>
      <div class="card-tag">${item.tag}</div>
    </div>
    <button class="call-btn">📞</button>
  `;

    searchResults.appendChild(card);
});

const pets = [
  { type: "Cat", age: "3 y", img: "/src/images/cat1.jpg", id: 1 },
  { type: "Cat", age: "2.5 y", img: "/src/images/cat1.jpg", id: 2 },
  { type: "Dog", age: "2 m", img: "/src/images/dog.jpg", id: 3 },
  { type: "Cat", age: "4 m", img: "/src/images/cat1.jpg", id: 4 },
  { type: "Cat", age: "2 m", img: "/src/images/cat1.jpg", id: 5 },
  { type: "Cat", age: "4 m", img: "/src/images/cat1.jpg", id: 6 }
];

function filterPets(type) {
  document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter[onclick="filterPets('${type}')"]`).classList.add('active');

  const list = document.getElementById("petsList");
  list.innerHTML = "";

  pets
    .filter(pet => type === "All" || pet.type === type.slice(0, -1))
    .forEach(pet => {
      const card = document.createElement("div");
      card.className = "pet-card";
      card.innerHTML = `
        <img src="${pet.img}" alt="${pet.type}" />
        <div class="star" onclick="event.stopPropagation(); this.classList.toggle('filled')">★</div>
        <h3>${pet.type}</h3>
        <p>information</p>
        <p>${pet.age}</p>
      `;
      card.onclick = () => window.location.href = `takeSh.html?id=${pet.id}`;
      list.appendChild(card);
    });
}

window.onload = () => filterPets("All");

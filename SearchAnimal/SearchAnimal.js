document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const animalType = document.getElementById('animalType').value;
    const ageGender = document.getElementById('ageGender').value;
    const contact = document.getElementById('contact').value;
  
    alert(`Request sent!\n\nAnimal: ${animalType}\nAge/Gender: ${ageGender}\nContact: ${contact}`);
});
  
  document.querySelector('.deep-search-btn').addEventListener('click', () => {
  window.location.href = '/search/search.html';
});

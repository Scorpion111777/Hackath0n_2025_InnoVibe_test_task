function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('hidden');
}

function selectCategory(value) {
  document.getElementById('selectedOption').textContent = value;
  document.getElementById('category').value = value;
  toggleDropdown();
}

function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const category = document.getElementById("category").value;

  if (!email || !password || !confirmPassword || !category) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (category === "Volunteer") {
    window.location.href = "/volunteer/volunteer.html";
  } else if (category === "PetShelter") {
    window.location.href = "/shelter/shelter.html";
  } else {
    alert(`Registered ${email} as ${category}`);
  }
}

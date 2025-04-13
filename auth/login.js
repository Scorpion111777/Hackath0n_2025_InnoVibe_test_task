function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  alert(`Logged in as ${email}`);
  
  window.location.href = "/volunteer/volunteer.html";
}

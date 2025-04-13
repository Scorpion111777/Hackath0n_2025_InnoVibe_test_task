const textarea = document.getElementById("announce-input");
const keyboard = document.getElementById("virtual-keyboard");

textarea.addEventListener("focus", () => {
  keyboard.style.display = "block";
});
document.querySelector('.post-btn').addEventListener('click', () => {
  const input = document.querySelector('.announce-input');
  if (input && input.value.trim() !== '') {
    alert('Succes!');
  } else {
    alert('Fill your announce!');
  }
});

keyboard.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const value = e.target.textContent;

    if (value === "←") {
      textarea.value = textarea.value.slice(0, -1);
    } else if (value === "Space") {
      textarea.value += " ";
    } else {
      textarea.value += value;
    }
    textarea.focus(); 
  }
});
document.querySelector('.dropdown-btn').addEventListener('click', () => {
  window.location.href = '/animal_add_info/animal_add_info.html';
});
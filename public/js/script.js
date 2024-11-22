const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

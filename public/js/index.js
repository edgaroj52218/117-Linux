// Select elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// Toggle the menu and overlay
function toggleMenu() {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
}

// Close the menu when clicking on the overlay
function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

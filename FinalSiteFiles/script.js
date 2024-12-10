// Select elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// Toggle the menu, overlay, and hamburger icon
function toggleMenu() {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  hamburger.classList.toggle('active'); // Toggle the "X" icon
}

// Close the menu when clicking on the overlay
function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  hamburger.classList.remove('active'); // Reset to hamburger icon
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

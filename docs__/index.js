// Function to toggle the menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Close the menu if clicked outside
function closeMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('show');
    }
}

// Add event listeners
document.querySelector('.hamburger').addEventListener('click', toggleMenu);
document.querySelector('.overlay').addEventListener('click', closeMenu);

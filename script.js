const menuBars = document.getElementById('menu-bars');
const navLinks = document.getElementById('nav-links');

menuBars.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
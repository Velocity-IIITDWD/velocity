export default function headerJs() {
  const menuIcon = document.getElementById('menu');
  const navLinks = document.querySelector('.navlinks');
  menuIcon.onclick = () => {
    // Toggle between 'menu-outline' and 'close-outline' icons
    menuIcon.name = menuIcon.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    // Toggle the left position of the navigation links to show/hide them
    navLinks.classList.toggle('left-[0%]');
    // Toggle the positioning and z-index of the menu icon for fixed placement
    menuIcon.classList.toggle('fixed');
    menuIcon.classList.toggle('right-[10%]');
    menuIcon.classList.toggle('z-[100]');
  };
}

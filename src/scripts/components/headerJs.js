export default function headerJs() {
  
  const menuIcon = document.getElementById('menu')
  const navLinks = document.querySelector('.navlinks')
  menuIcon.onclick = () => {
    menuIcon.name =
      menuIcon.name === 'menu-outline' ? 'close-outline' : 'menu-outline'
    navLinks.classList.toggle('left-[0%]')
    menuIcon.classList.toggle('fixed')
    menuIcon.classList.toggle('right-[10%]')
    menuIcon.classList.toggle('z-[100]')
  }
}
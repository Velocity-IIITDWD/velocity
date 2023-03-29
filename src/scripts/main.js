console.log('Hello World from JS!')

const menuIcon = document.getElementById('menu');
const navLinks = document.querySelector('.navlinks')
menuIcon.onclick = ()=>{
    menuIcon.name= menuIcon.name==="menu-outline" ? "close-outline":"menu-outline";
    navLinks.classList.toggle("left-[0%]")
}




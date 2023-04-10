const menuIcon = document.getElementById('menu');
const navLinks = document.querySelector('.navlinks')
menuIcon.onclick = ()=>{
    menuIcon.name= menuIcon.name==="menu-outline" ? "close-outline":"menu-outline";
    navLinks.classList.toggle("left-[0%]")
}





// testimonials section 

const content = document.querySelectorAll('.moreContent');
const fullContent = document.querySelectorAll('.fullContent');
const testimonialBtn = document.querySelector('#testimonialBtn');

testimonialBtn.addEventListener('click' , () =>{
    if(testimonialBtn.innerText === "Show more"){
    content.forEach((contents) => {
        contents.classList.remove('hidden');
      });
    testimonialBtn.innerText = "Show less";
}

    else{
        content.forEach((contents) => {
            contents.classList.add('hidden');
          });

        testimonialBtn.innerText = "Show more";
    }
});
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


// Projects Section

window.addEventListener("load", function() {
    const sr = ScrollReveal();
  
    if (window.innerWidth < 768) {
      const timelineContent = document.querySelector(".timeline-content");
      if (timelineContent.classList.contains("js--fadeInLeft")) {
        timelineContent.classList.remove("js--fadeInLeft");
        timelineContent.classList.add("js--fadeInRight");
      }
  
      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
      });
    } else {
      sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
      });
  
      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
      });
    }
  
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });
  
    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });
  });
  
  
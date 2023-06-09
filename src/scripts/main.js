const menuIcon = document.getElementById('menu');
const navLinks = document.querySelector('.navlinks')
menuIcon.onclick = () => {
  menuIcon.name = menuIcon.name === "menu-outline" ? "close-outline" : "menu-outline";
  navLinks.classList.toggle("left-[0%]")
}

// testimonials section 

const content = document.querySelectorAll('.moreContent');
const fullContent = document.querySelectorAll('.fullContent');
const testimonialBtn = document.querySelector('#testimonialBtn');

testimonialBtn.addEventListener('click', () => {
  if (testimonialBtn.innerText === "Show more") {
    content.forEach((contents) => {
      contents.classList.remove('hidden');
    });
    testimonialBtn.innerText = "Show less";
  }

  else {
    content.forEach((contents) => {
      contents.classList.add('hidden');
    });

    testimonialBtn.innerText = "Show more";
  }
});


// Projects Section

window.addEventListener("load", function () {
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



// ===================================== events section carousel for desktop =============================

const carousel = document.querySelector("#carousel");
const caroudchildren = [...carousel.children];

let isDragging = false;
let startX, startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // record initial cursor and scroll position of the cursor 

  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return;

  // upadete the scroll position of the carousel based on the cursor movement 
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = (e) => {
  isDragging = false;
  carousel.classList.remove("dragging")
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});


// ====================== event carousel for mobile ===============
const container = document.querySelector('#carousel');
const items = document.querySelectorAll('.card');
let scrollPos = 0;

container.addEventListener('touchstart', function (event) {
  scrollPos = this.scrollLeft + event.touches[0].clientX;
});

container.addEventListener('touchmove', function (event) {
  this.scrollLeft = scrollPos - event.touches[0].clientX;
});


//Modules Section
var swiper = new Swiper('.card_slider',{
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 50,
  slidesPerView: "2",
  loop:true,
  autoplay: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480:{
            slidesPerView: 2,
        },
      },

});
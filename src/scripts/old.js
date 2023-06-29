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

// home section buttons
// upcoming button
var button = document.getElementById("upcoming");

button.addEventListener("click", function() {
  window.location.hash = "#timeline";
});

// upcoming button
var button = document.getElementById("ourProjects");

button.addEventListener("click", function() {
  window.location.hash = "#projects";
});

// testimonials section

const content = document.querySelectorAll('.moreContent')
const fullContent = document.querySelectorAll('.fullContent')
const testimonialBtn = document.querySelector('#testimonialBtn')

testimonialBtn.addEventListener('click', () => {
  if (testimonialBtn.innerText === 'Show more') {
    content.forEach((contents) => {
      contents.classList.remove('hidden')
    })
    testimonialBtn.innerText = 'Show less'
  } else {
    content.forEach((contents) => {
      contents.classList.add('hidden')
    })

    testimonialBtn.innerText = 'Show more'
  }
})

// Projects Section

window.addEventListener('load', function () {
  const sr = ScrollReveal()

  if (window.innerWidth < 768) {
    const timelineContent = document.querySelector('.timeline-content')
    if (timelineContent.classList.contains('js--fadeInLeft')) {
      timelineContent.classList.remove('js--fadeInLeft')
      timelineContent.classList.add('js--fadeInRight')
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    })
  } else {
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    })

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    })
  }

  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  })

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  })
})

// ===================================== events section carousel for desktop =============================

const carousel = document.querySelector('#carousel')
const caroudchildren = [...carousel.children]

let isDragging = false
let startX, startScrollLeft

const dragStart = (e) => {
  isDragging = true
  carousel.classList.add('dragging')
  // record initial cursor and scroll position of the cursor
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if (!isDragging) return

  // upadete the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = (e) => {
  isDragging = false
  carousel.classList.remove('dragging')
}

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('mouseup', dragStop)
carousel.addEventListener('mouseleave', () => {
  isDragging = false
})

// ====================== event carousel for mobile ===============
const container = document.querySelector('#carousel')
const items = document.querySelectorAll('.card')
let scrollPos = 0

container.addEventListener('touchstart', function (event) {
  scrollPos = this.scrollLeft + event.touches[0].clientX
})

container.addEventListener('touchmove', function (event) {
  this.scrollLeft = scrollPos - event.touches[0].clientX
})

//Modules Section Card Carousel
var swiper = new Swiper('.card_slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 50,
  slidesPerView: '2',
  loop: true,
  autoplay: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
  },
})

// Fetching APIs

// For project section

fetch('./api/projects.json')
  .then((response) => response.json())
  .then((data) => {
    const projectApi = document.getElementById('projects')
    let count = 0

    for (const p of data) {
      count++

      if (count % 2 == 1) {
        const parentDiv = document.createElement('div')
        parentDiv.classList =
          "timeline-item w-full mb-[70px] after:content-[' '] after:block after:clear-both"

        const temp = document.createElement('div')
        temp.classList =
          'timeline-img w-[30px] h-[30px] bg-primary rounded-[50%] absolute left-[50px] md:left-1/2 mt-[25px] ml-[-15px]'

        parentDiv.append(temp)

        const projectDiv = document.createElement('div')
        projectDiv.classList =
          'timeline-content  js--fadeInLeft max-w-full space-y-8 relative auto md:w-[45%] py-[20px] px-[30px] rounded-[10px] bg-[#4B6CB7] bg-opacity-40 shadow-[0_25px_20px_-15px_rgba(0,0,0,0.3)] ml-[40px] md:ml-0'

        const name = document.createElement('h2')
        name.classList = 'text-4xl'
        name.textContent = p.name
        projectDiv.appendChild(name)

        const description = document.createElement('p')
        description.textContent = p.description
        projectDiv.appendChild(description)

        const btn = document.createElement('a')
        btn.classList =
          'bnt-more bg-primary text-text py-[8px] px-[20px] uppercase text-[14px] mb-[20px] mt-[10px] inline-block rounded-2 shadow-[0_1px_3px_-1px_rgba(0,0,0,0.6)] hover:bg-dark-primary cursor-pointer'
        btn.textContent = 'More'
        const link = p.link
        btn.addEventListener('click', () => {
          window.location.href = link
        })

        projectDiv.appendChild(btn)

        parentDiv.appendChild(projectDiv)
        projectApi.appendChild(parentDiv)
      } else {
        const parentDiv = document.createElement('div')
        parentDiv.classList =
          "timeline-item w-full mb-[70px] after:content-[' '] after:block after:clear-both "

        const temp = document.createElement('div')
        temp.classList =
          'timeline-img w-[30px] h-[30px] bg-primary rounded-[50%] absolute left-[50px] md:left-1/2 mt-[25px] ml-[-15px]'
        parentDiv.append(temp)

        const projectDiv = document.createElement('div')
        projectDiv.classList =
          'timeline-content js--fadeInRight float-none md:float-right px-[30px] space-y-8 relative w-auto md:w-[45%] py-[20px] rounded-[10px] bg-[#4B6CB7] bg-opacity-40 shadow-[0_25px_20px_-15px_rgba(0,0,0,0.3)] max-w-full ml-[40px] md:ml-0'

        const name = document.createElement('h2')
        name.className = 'text-4xl'
        name.textContent = p.name
        projectDiv.appendChild(name)

        const description = document.createElement('p')
        description.textContent = p.description
        projectDiv.appendChild(description)

        const btn = document.createElement('a')
        btn.classList =
          'bnt-more bg-primary text-text py-[8px] px-[20px] uppercase text-[14px] mb-[20px] mt-[10px] inline-block rounded-2 shadow-[0_1px_3px_-1px_rgba(0,0,0,0.6)] hover:bg-dark-primary cursor-pointer'
        btn.textContent = 'More'
        const link = p.link
        btn.addEventListener('click', () => {
          window.location.href = link
        })

        projectDiv.appendChild(btn)

        parentDiv.appendChild(projectDiv)
        projectApi.appendChild(parentDiv)
      }
    }
  })

// For events section

fetch('./api/events.json')
  .then((response) => response.json())
  .then((data) => {
    const eventsDiv = document.getElementById('carousel')

    let ecount = 0
    for (const p of data) {
      ecount++
      if (ecount % 2 == 1) {
        const liTag = document.createElement('li')
        liTag.classList = 'card flex cursor-pointer h-[235px]'
        liTag.id = 'cardUp'
        // card div
        const cardDiv = document.createElement('div')
        cardDiv.classList =
          'h-[235px] w-[350px] bg-white rounded-[15px] z-10 overflow-hidden relative flex justify-center items-center image-container'

        const img = document.createElement('img')
        img.classList = 'h-[97%] w-[97%] rounded-[15px]'
        img.src = p.img

        cardDiv.appendChild(img)

        const headingDiv = document.createElement('div')
        headingDiv.classList =
          'h-full w-full absolute bg-transparent ease-in duration-200 hover:backdrop-opacity-10 hover:bg-purple-300/30'
        headingDiv.id = 'eventsCard'
        headingDiv.addEventListener('click', () => {
          window.location.href = p.link
        })

        const heading = document.createElement('h1')
        heading.classList =
          'absolute text-black font-semibold text-4xl font-lato top-[80%] left-[23%] ease-in duration-300'
        heading.textContent = p.name

        headingDiv.appendChild(heading)

        cardDiv.appendChild(headingDiv)

        liTag.appendChild(cardDiv)

        // connecting lines
        const connectDivOne = document.createElement('div')
        connectDivOne.classList =
          'h-[120px] w-[90px] z-0 translate-y-[50px] border-t-2 border-r-2 border-dotted border-white rounded-tr-[5px]'

        liTag.appendChild(connectDivOne)

        const connectDivtwo = document.createElement('div')
        connectDivtwo.classList =
          'h-[120px] w-[90px] z-0 translate-y-[50px] border-b-2 border-white border-dotted'

        liTag.appendChild(connectDivtwo)

        eventsDiv.appendChild(liTag)
      } else {
        const liTag = document.createElement('li')
        liTag.classList = 'card flex cursor-pointer h-[235px]'
        liTag.id = 'cardDown'

        // card div
        const cardDiv = document.createElement('div')
        cardDiv.classList =
          'h-[235px] w-[350px] bg-white rounded-[15px] z-10 translate-y-[60px] overflow-hidden relative flex justify-center items-center image-container'

        const img = document.createElement('img')
        img.classList = 'h-[97%] w-[97%] rounded-[15px]'
        img.src = p.img

        cardDiv.appendChild(img)

        const headingDiv = document.createElement('div')
        headingDiv.classList =
          'h-full w-full absolute bg-transparent ease-in duration-200 hover:backdrop-opacity-10 hover:bg-purple-300/30'
        headingDiv.id = 'eventsCard'
        headingDiv.addEventListener('click', () => {
          window.location.href = p.link
        })

        const heading = document.createElement('h1')
        heading.classList =
          'absolute text-black font-semibold text-4xl font-lato top-[5%] left-[23%] ease-in duration-300'
        heading.textContent = p.name

        headingDiv.appendChild(heading)

        cardDiv.appendChild(headingDiv)

        liTag.appendChild(cardDiv)

        // connecting lines
        const connectDivOne = document.createElement('div')
        connectDivOne.classList =
          'h-[120px] w-[90px] z-0 translate-y-[100px] border-b-2 border-white border-dotted'

        liTag.appendChild(connectDivOne)

        const connectDivtwo = document.createElement('div')
        connectDivtwo.classList =
          'h-[120px] w-[90px] z-0 translate-y-[100px] border-t-2 border-l-2 rounded-tl-[5px] border-white border-dotted'

        liTag.appendChild(connectDivtwo)

        eventsDiv.appendChild(liTag)
      }
    }
  })


  // fetch api for modules section

  // ========                    if blog              ===========
  // fetch('./api/modules.json')
  // .then((response) => response.json())
  // .then((data) => {

  //   console.log(data)
  //   const module = document.getElementById('blogCard')

  //   for(const t of data){

  //     const moduleParent = document.createElement('div')
  //     moduleParent.classList = "swiper-slide h-[250px] w-[350px] rounded-lg bg-white"

  //     const moduleDiv = document.createElement('div');
  //     moduleDiv.classList = "flex flex-row md:flex-col lg:flex-row justify-around items-center h-full w-full"

  //     const image = document.createElement('img')
  //     image.classList = "h-[95%] w-[55%] md:w-[95%] md:h-[60%] lg:h-[95%] lg:w-[55%] shadow-lg shadow-black rounded-md mt-0 md:mt-4 lg:mt-0"
  //     image.src = t.img;

  //     moduleDiv.appendChild(image)

  //     const titleDiv = document.createElement('div')
  //     titleDiv.classList = "w-[34%] h-[95%] md:w-full lg:w-[28%] lg:mr-6 md:mr-0 md:mt-4 lg:h-[95%] gap-2 flex flex-col justify-around items-center"

  //     const h = document.createElement('h1')
  //     h.classList = "text-[25px]  md:text-3xl xl:text-4xl font-lato text-center shadowText"
  //     h.textContent = t.title

  //     titleDiv.appendChild(h)

  //     const btnM = document.createElement('button')
  //     btnM.classList = "w-full md:w-2/3 lg:w-full h-auto bg-gradient-to-r from-[#270263] to-[#201042] text-white p-2 rounded-md md:mb-4 lg:mb-0 mb-0 text-[10px] md:text-xl"

  //     btnM.textContent = "Go to blog"

  //     btnM.addEventListener('click', () => {
  //       window.location.href = t.link
  //     })

  //     titleDiv.appendChild(btnM)


  //     moduleDiv.appendChild(titleDiv)

  //     moduleParent.appendChild(moduleDiv)
  //     module.appendChild(moduleParent)
  //   }
  // })



  // using iframe 

  fetch('./api/modules.json')
  .then((response) => response.json())
  .then((data) => {

    console.log(data)
      const module = document.getElementById('blogCard')

      for(const p of data){

        const div = document.createElement('div')
        div.classList = "swiper-slide rounded-lg bg-white overflow-hidden"
        const frame = document.createElement('iframe')
        frame.classList = "h-full w-full"
        frame.src = p.link

        div.appendChild(frame)
        module.appendChild(div)
      }

    })


  .catch((error) => {
    console.error('Error:', error)
  })




  // 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
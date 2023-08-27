export default function eventjs() {

  function eventCarousel() {
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

    //event carousel for mobile
    const container = document.querySelector('#carousel')
    const items = document.querySelectorAll('.card')
    let scrollPos = 0

    container.addEventListener('touchstart', function (event) {
      scrollPos = this.scrollLeft + event.touches[0].clientX
    })

    container.addEventListener('touchmove', function (event) {
      this.scrollLeft = scrollPos - event.touches[0].clientX
    })
  }

  // fetch api
  function fetchdata() {
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

    .catch((error) => {
      console.error('Error:', error)
    })
  }


  fetchdata();
  eventCarousel();
}
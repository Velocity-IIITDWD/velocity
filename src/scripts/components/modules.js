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

// fetch api
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

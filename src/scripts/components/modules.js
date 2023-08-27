
export default function modulejs() {

  //Modules Section Card Carousel
  function moduleCarousel() {
    var swiper = new window.Swiper('.card_slider',{
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
  });
  }

  // fetch api
  function fetchData() {
    fetch('./api/modules.json')
      .then((response) => response.json())
      .then((data) => {
          const mainDiv = document.getElementById('blogCard');

          for(const p of data){
            const iframee = document.createElement('iframe');
            iframee.classList = "swiper-slide h-[200px] md:h-[300px] w-[350px] rounded-md border-none";
            iframee.src = p.link;
            mainDiv.appendChild(iframee);
          }
      })
  }

  fetchData();
  setTimeout(moduleCarousel , 1000);
}

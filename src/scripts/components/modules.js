
export default function modulejs() {

  //Modules Section Card Carousel
  function moduleCarousel() {
    var swiper = new window.Swiper('.card_slider',{
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 50,
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
            const iframee = document.createElement('div');
            iframee.classList = "relative rounded-md swiper-slide h-full w-full max-w-2xl border-none";
            mainDiv.appendChild(iframee);

            const img = document.createElement("img");
            img.classList = "rounded-md h-full w-full";
            img.src = p.img;
            iframee.appendChild(img);
            
            const textDiv = document.createElement("div");
            textDiv.classList = "ease-in-out duration-150 absolute rounded-md opacity-0 bg-transparent hover:opacity-95 hover:backdrop-blur-sm hover:bg-purple-300/60 inset-0 flex flex-col items-center justify-center w-full h-full";
            iframee.appendChild(textDiv);

            const button = document.createElement("a");
            button.type = "button";
            button.classList = "text-slate-750 bg-blue-600 rounded-md w-auto p-2"
            button.href = p.link;
            button.setAttribute("target", "_blank");
            button.textContent = p.text;
            textDiv.appendChild(button);
          }
      })
  }

  fetchData();
  setTimeout(moduleCarousel , 1000);
}

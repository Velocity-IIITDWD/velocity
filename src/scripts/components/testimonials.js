// testimonials section

export default function testimonialjs() {

  // function testimonialButton() {
  //   const content = document.querySelectorAll('.moreContent')
  //   const fullContent = document.querySelectorAll('.fullContent')
  //   const testimonialBtn = document.querySelector('#testimonialBtn')

  //   testimonialBtn.addEventListener('click', () => {
  //     if (testimonialBtn.innerText === 'Show more') {
  //       content.forEach((contents) => {
  //         contents.classList.remove('hidden')
  //       })
  //       testimonialBtn.innerText = 'Show less'

  //     } else {
  //       content.forEach((contents) => {
  //         contents.classList.add('hidden')
  //       })

  //       testimonialBtn.innerText = 'Show more'
  //     }
  //   })
  // }


  function fetchData() {
    fetch('./api/testimonials.json')
      .then((response) => response.json())
      .then((data) => {

        const gridDiv = document.getElementById('testimonialGrid');
        let count = 0;

        for (const p of data) {
          count++;
          const boxDiv = document.createElement('div');
          boxDiv.classList = "bg-purplergba rounded-[20px] flex-col justify-center p-6 z-10"

          switch (count) {
            case 1: boxDiv.classList.add("md:row-start-1" ,"md:row-end-3" ,"flex")
              break;

            case 2: boxDiv.classList.add("md:row-start-3", "md:row-end-5", "flex");
              break;
            case 3: boxDiv.classList.add("flex");
              break;

            case 4: boxDiv.classList.add("md:row-start-2", "md:row-end-5", "flex");
              break;

            case 5: boxDiv.classList.add("md:row-start-1", "md:row-end-4", "flex");
              break;

            case 6: boxDiv.classList.add("flex");
              break;
          }

          const profileDiv = document.createElement('div');
          profileDiv.classList = "flex mb-5";
          // img tag
          const img = document.createElement('img');
          img.classList = "h-10 w-10 rounded-full mr-4";
          img.src = p.img
          profileDiv.appendChild(img);
          // heading tag
          const h3 = document.createElement('h3');
          h3.classList = "text-3xl";
          h3.textContent = p.name;
          profileDiv.appendChild(h3);

          boxDiv.appendChild(profileDiv);


          // comment div
          const commentDiv = document.createElement('div');
          commentDiv.classList = "font-lato overflow-hidden";
          commentDiv.textContent = p.comment
          boxDiv.appendChild(commentDiv)
          gridDiv.appendChild(boxDiv);
        }
      })
  }

  fetchData();
  testimonialButton();

}
export default function testimonialjs() {
  function fetchData() {
    // Fetch testimonials from API
    fetch('./api/testimonials.json')
      .then((response) => response.json())
      .then((data) => {
        const gridDiv = document.getElementById('testimonialGrid');
        let count = 0;

        // Add each testimonial to the DOM
        for (const p of data) {
          count++;
          const boxDiv = document.createElement('div');
          boxDiv.classList = "bg-purplergba rounded-[20px] flex-col justify-center p-6 z-10"

          // Add classes based on testimonial index
          switch (count) {
            case 1: 
              boxDiv.classList.add("md:row-start-1" ,"md:row-end-3" ,"flex")
              break;
            case 2: 
              boxDiv.classList.add("md:row-start-3", "md:row-end-5", "flex");
              break;
            case 3: 
              boxDiv.classList.add("flex");
              break;
            case 4: 
              boxDiv.classList.add("md:row-start-2", "md:row-end-5", "flex");
              break;
            case 5: 
              boxDiv.classList.add("md:row-start-1", "md:row-end-4", "flex");
              break;
            case 6: 
              boxDiv.classList.add("flex");
              break;
          }


          // img tag
          const img = document.createElement('img');
          img.classList = "h-10 w-10 rounded-full mr-4";
          img.src = p.img
          
          // heading tag
          const h3 = document.createElement('h3');
          h3.classList = "text-3xl";
          h3.textContent = p.name;

          // Profile div
          const profileDiv = document.createElement('div');
          profileDiv.classList = "flex mb-5";
          profileDiv.appendChild(img);
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

  return fetchData();
}
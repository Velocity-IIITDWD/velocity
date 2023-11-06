function fadeProjects() {
  let loadCallback = () => {
    const sr = ScrollReveal();
    const isSmallWindow = window.innerWidth < 768;

    sr.reveal('.js--fadeInLeft', {
      origin: isSmallWindow ? 'right' : 'left',     // All projects will stay on right if window is small
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }

  // If document is loaded, then call loadCallback, else wait for document load first
  if (document.readyState === 'complete') loadCallback();
  else window.addEventListener('load', loadCallback);
}

// Fetching from API
// For project section
function loadProjects() {
  return fetch("../../api/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const projectApi = document.getElementById('projects');
      let count = 0;

      // Add each project in response to DOM
      for (const p of data) {
        count++;
        const parentDiv = document.createElement('div');
        parentDiv.classList =
          "timeline-item w-full mb-[70px] after:content-[' '] after:block after:clear-both";

        const temp = document.createElement('div');
        temp.classList =
          'timeline-img w-[30px] h-[30px] bg-primary rounded-[50%] absolute left-[15px] md:left-1/2 mt-[25px] ml-[-15px]';

        parentDiv.append(temp);
        const projectDiv = document.createElement('div');

        if (count % 2 == 1) {
          projectDiv.classList =
            'timeline-content js--fadeInLeft max-w-full space-y-8 relative auto md:w-[45%] py-[20px] px-[30px] rounded-[10px] \
            bg-[#4B6CB7] bg-opacity-40 shadow-[0_25px_20px_-15px_rgba(0,0,0,0.3)] ml-[40px] md:ml-0';
        } else {
          projectDiv.classList =
            'timeline-content js--fadeInRight float-none md:float-right px-[30px] space-y-8 relative w-auto md:w-[45%] py-[20px] \
            rounded-[10px] bg-[#4B6CB7] bg-opacity-40 shadow-[0_25px_20px_-15px_rgba(0,0,0,0.3)] max-w-full ml-[40px] md:ml-0';
        }

        const name = document.createElement('h2');
        name.classList = 'text-4xl';
        name.textContent = p.name;
        projectDiv.appendChild(name);

        const description = document.createElement('p');
        description.textContent = p.description;
        projectDiv.appendChild(description);

        const btn = document.createElement('a');
        btn.classList =
          'bnt-more bg-primary text-text py-[8px] px-[20px] uppercase text-[14px] mb-[20px] mt-[10px] inline-block rounded-2 \
          shadow-[0_1px_3px_-1px_rgba(0,0,0,0.6)] hover:bg-dark-primary cursor-pointer';
        btn.textContent = 'More';
        const link = p.link;
        btn.addEventListener('click', () => window.location.href = link);

        projectDiv.appendChild(btn);

        parentDiv.appendChild(projectDiv);
        projectApi.appendChild(parentDiv);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default function projectjs() {
  // Projects Section
  loadProjects()
  .finally(fadeProjects);
}
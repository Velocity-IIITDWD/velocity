import Logo3D from "../utilities/logoFactory.js";

export default function() {
  // upcoming button
  let button1 = document.getElementById("upcoming");

  button1.addEventListener("click", function() {
    window.location.hash = "#timeline";
  });

  // upcoming button
  let button2 = document.getElementById("ourProjects");

  button2.addEventListener("click", function() {
    window.location.hash = "#projects";
  });

  let logo = new Logo3D(0.5, 1);
  let logoContainer = document.getElementById('home-logo-container');
  logoContainer.parentElement.classList.add(window.innerWidth > 768 ? 'z-20' : '-z-20');
  logo.attachLogoTo(logoContainer);
}

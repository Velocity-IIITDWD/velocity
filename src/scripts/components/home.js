import { newLogo, attachLogoTo } from "../utilities/logoFactory";

export default function homejs() {
  // upcoming button
  let button1 = document.getElementById("upcoming");

  button1.addEventListener("click", function () {
    window.location.hash = "#timeline";
    // alert("bttj");
  });

  // upcoming button
  let button2 = document.getElementById("ourProjects");

  button2.addEventListener("click", function () {
    window.location.hash = "#projects";
  });

  let { renderer, element } = newLogo();
  attachLogoTo(document.getElementById('home-logo-container'), renderer);
}

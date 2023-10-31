import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

let pathSvg, leftCurve, rightCurve, rocketPath, rocket, prevYear, nextYear, currYear, timelineContainer, currYearText;

let year = new Date().getFullYear();
const start = 2020;
const end = year;

const tl = gsap.timeline({ duration: 0.2 });
const prevTimeline = gsap.timeline();
const currTimeline = gsap.timeline();
const nextTimeline = gsap.timeline();

tl.pause();
tl.add(prevTimeline).add(currTimeline).add(nextTimeline);

const content = {
    2020: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    2021: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    2022: 'Velocity Club, started working offline capacity, recruited more members and did their first event Coding With Coffee',
    2023: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
};

function drawCurves() {

  const  pathSvgRect =  pathSvg.getBoundingClientRect();
  const prevYearRect = prevYear.getBoundingClientRect();
  const currYearRect = currYear.getBoundingClientRect();
  const nextYearRect = nextYear.getBoundingClientRect();

  pathSvg.setAttribute('viewBox', `0 0 ${pathSvg.clientWidth} ${pathSvg.clientHeight}`);

  // (x1, y1) => start of the left curve
  // (x2, y2) => bottom control point for the left curve
  // (x3, y3) => top control point for the left curve
  // (x4, y4) => end of the left curve

  // (x5, y5) => start of the right curve
  // (x6, y6) => top control point for the right curve
  // (x7, y7) => bottom control point for the right curve
  // (x8, y8) => end of the right curve 

  const x1 = prevYearRect.right - pathSvgRect.left + prevYearRect.width  / 4;
  const y1 = prevYearRect.top   - pathSvgRect.top  + prevYearRect.height / 2;

  const x8 = nextYearRect.left  - pathSvgRect.left - nextYearRect.width  / 4;
  const y8 = y1;

  const x4 = currYearRect.left  - pathSvgRect.left - prevYearRect.width  / 4;
  const y4 = currYearRect.top   - pathSvgRect.top  + currYearRect.height / 2;

  const x5 = currYearRect.right - pathSvgRect.left + nextYearRect.width  / 4;
  const y5 = y4;

  const x2 = x1 + (x4 - x1) * 0.49031627049146675;
  const y2 = y1 + 10 * (x4 - x1) / 408;
  
  const x3 = x1 + (x4 - x1) * 0.6322627971313999;
  const y3 = y4;
  
  const x6 = x5 + (x8 - x5) * 0.3762876106029553;
  const y6 = y5;
  
  const x7 = x8 - (x8 - x5) * 0.49828318586272624;
  const y7 = y2;

    leftCurve.setAttribute('d', `M ${x1} ${y1} C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4}`);
  rightCurve.setAttribute('d', `M ${x5} ${y5} C ${x6} ${y6}, ${x7} ${y7}, ${x8} ${y8}`);
  rocketPath.setAttribute('d', `
      M ${x1 - prevYearRect.width * .75} ${y1} 
      L ${x1} ${y1} C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4}
      L ${x5} ${y5} C ${x6} ${y6}, ${x7} ${y7}, ${x8} ${y8}
      L ${x8 + nextYearRect.width * .75} ${y8}
  `);

}

function increaseYear() {
  if (year === end)
      return;
  prevYear.style.color = '#FFF';
  year++;
  tl.invalidate();
  tl.restart();
  if (year === end)
      nextYear.style.color = '#DDD';
}

function decreaseYear() {
  if (year === start)
      return;
  nextYear.style.color = '#FFF';
  year--;
  tl.invalidate();
  tl.restart();
  if (year === start)
      prevYear.style.color = '#DDD';
}


export default function() {

  pathSvg = document.getElementById('path-svg');
  leftCurve = document.getElementById('left-curve');
  rightCurve = document.getElementById('right-curve');
  rocketPath = document.getElementById('rocket-path');
  rocket = document.getElementById('rocket');
  timelineContainer = document.getElementById('timeline-container');
  currYearText = document.getElementById('curr-year-text');
  const rocketImg = document.querySelector('#rocket img');

  prevYear = document.getElementById('prev-year');
  nextYear = document.getElementById('next-year');
  currYear = document.getElementById('curr-year');

  currYear.textContent = year;
  prevYear.textContent = year - 1;
  nextYear.textContent = year + 1;
  currYearText.textContent = content[year];
  nextYear.style.color = '#DDD';

  let prevDirection = 0;
  gsap.timeline({
      scrollTrigger: {
          trigger: timelineContainer,
          start: 'bottom bottom',
          end: 'top top',
          scrub: 2,
          invalidateOnRefresh: true,
          onUpdate: self => {
              if (prevDirection !== self.direction) {
                  prevDirection = self.direction;
                  // can't flip the rocket image directly because gsap will overwrite transform each time
                  // instead, let gsap control the div having the rocket image and we flip the image
                  rocketImg.style.transform = self.direction === 1 ? null : `scale(-1, 1)`;
              }
          }
      }
  })
  .to(rocket, {
      motionPath: {
          path: rocketPath,
          align: rocketPath,
          alignOrigin: [0.5, 1],
          autoRotate: 0,
      }
  });

  prevTimeline
    .to(prevYear, { autoAlpha: 0})
    .set(prevYear, { text: () => year - 1 })
    .to(prevYear, { autoAlpha: 1 });
    
  currTimeline
    .to(currYear, { autoAlpha: 0})
    .set(currYear, { text: () => year})
    .to(currYear, { autoAlpha: 1 });
      
  nextTimeline
    .to(nextYear, { autoAlpha: 0})
    .set(nextYear, { text: () => year + 1})
    .to(nextYear, { autoAlpha: 1 })
    .to(currYearText, { text: () => content[year] }, 0);

  drawCurves();
  window.addEventListener('resize', drawCurves);
  prevYear.addEventListener('click', decreaseYear);
  nextYear.addEventListener('click', increaseYear);

}
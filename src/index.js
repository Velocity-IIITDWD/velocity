// do not fking change the below imports if you want your css to work correctly! 😾 0
import tailwindCSS from './styles/tailwind.css'
import mainCSS from './styles/main.css'

// ---------------------------------------------- //

import useComponents from './scripts/libs/useComponents'
import removeComponents from './scripts/libs/removeComponents'

// html components
import loader from './components/loader.html'
import header from './components/header.html'
import blurBg from './components/blurbg.html'
import home from './components/home.html'
import about from './components/about.html'
import timeline from './components/timeline.html'
import members from './components/members.html'
import modules from './components/modules.html'
import project from './components/projects.html'
import events from './components/events.html'
import testimonial from './components/testimonial.html'
import footer from './components/footer.html'

// js components
import headerJs from './scripts/components/headerJs'
import homejs from './scripts/components/home'
import modulejs from './scripts/components/modules'
import membersjs from './scripts/components/members'
import projectjs from './scripts/components/projects'
import eventjs from './scripts/components/events'
import testimonialjs from './scripts/components/testimonials'
import timelinejs from './scripts/components/timeline';

const loaderComponent = [
  { name: 'loader', template: loader, initiator: null },
]

const components = [
  { name: 'header', template: header, initiator: headerJs },
  { name: 'blurBg', template: blurBg, initiator: null },
  { name: 'home', template: home, initiator: homejs },
  { name: 'about', template: about, initiator: null },
  { name: 'timeline', template: timeline, initiator: timelinejs },
  { name: 'members', template: members, initiator: membersjs },
  { name: 'modules', template: modules, initiator: modulejs },
  { name: 'project', template: project, initiator: projectjs },
  { name: 'events', template: events, initiator: eventjs },
  { name: 'testimonial', template: testimonial, initiator: testimonialjs },
  { name: 'footer', template: footer, initiator: null },
]

useComponents(loaderComponent)
function removeLoader(){
  removeComponents(loaderComponent);
  useComponents(components);
}

setTimeout(removeLoader , 2000)


// useComponents(components)

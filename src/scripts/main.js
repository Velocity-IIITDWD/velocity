import { include } from './libs/include.js'

include('components/head.html', 'head')
include('components/header.html', 'header', 'scripts/components/header.js')
include('components/home.html', 'home', 'scripts/components/home.js')
include('components/about.html', 'about')
include('components/timeline.html', 'timeline')
include('components/members.html', 'members', 
'scripts/components/members.js')
include('components/modules.html', 'modules'
, 'scripts/components/modules.js')
include('components/projects.html', 'projects ',
'scripts/components/projects.js')
include('components/events.html', 'events'
, 'scripts/components/events.js')
include('components/testimonial.html', 'Testimonial'
, 'scripts/components/testimonials.js')
include('components/footer.html', 'footer')
// testimonials section

export default function testimonialjs(){

const content = document.querySelectorAll('.moreContent')
const fullContent = document.querySelectorAll('.fullContent')
const testimonialBtn = document.querySelector('#testimonialBtn')

testimonialBtn.addEventListener('click', () => {
  if (testimonialBtn.innerText === 'Show more') {
    content.forEach((contents) => {
      contents.classList.remove('hidden')
    })
    testimonialBtn.innerText = 'Show less'
  } else {
    content.forEach((contents) => {
      contents.classList.add('hidden')
    })

    testimonialBtn.innerText = 'Show more'
  }
})}
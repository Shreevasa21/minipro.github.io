const slider = document.querySelector('.portfolio-slider');
const slides = slider.querySelectorAll('img');
let activeSlide = 0;

setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 2000);
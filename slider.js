const sliderItems = document.querySelector('.slider-items');
const sliderControls = document.querySelectorAll('.slider-control');

let currentSlide = 0;
const maxSlides = sliderItems.children.length;

function moveSlider(direction) {
  if (direction === 'next') {
    currentSlide++;
    if (currentSlide === maxSlides) {
      currentSlide = 0;
    }
  } else if (direction === 'prev') {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = maxSlides - 1;
    }
  }

  sliderItems.setAttribute('data-slide', currentSlide);
}

sliderControls.forEach(control => {
  control.addEventListener('click', event => {
    const direction = event.target.getAttribute('data-slide');
    moveSlider(direction);
  });
});

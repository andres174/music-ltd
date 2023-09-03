const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");

const controls = document.querySelector(".controls");
const controlsElements = controls.querySelectorAll(".control");

let currentSlide = 0;

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });

    controlsElements.forEach((control, index) => {
        control.classList.remove("active");
        control.classList.add("inactive");
    });

    controlsElements[currentSlide].classList.remove("inactive");
    controlsElements[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000);

controlsElements.forEach((control, index) => {
    control.addEventListener("click", () => {
        currentSlide = index;
        nextSlide();
    });
});

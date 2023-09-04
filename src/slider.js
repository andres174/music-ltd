const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");

const controls = document.querySelector(".controls");
const controlsElements = controls.querySelectorAll(".control");

const loader = document.querySelector(".loader");

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

    loader.style.display = "none";
}

setInterval(nextSlide, 2000);

slides.forEach((slide, index) => {
    slide.addEventListener("load", () => {
        loader.style.display = "none";
    });
});

controlsElements.forEach((control, index) => {
    control.addEventListener("click", () => {
        currentSlide = index;
        nextSlide();
    });
});


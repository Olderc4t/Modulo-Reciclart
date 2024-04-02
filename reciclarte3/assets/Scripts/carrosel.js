const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove("active");
    indicators[currentSlide].classList.remove("active");
    currentSlide = slideIndex;
    slides[currentSlide].classList.add("active");
    indicators[currentSlide].classList.add("active");
}

function updateIndicators() {
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", () => {
            showSlide(i);
        });
    }
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

updateIndicators();
setInterval(nextSlide, 5000);
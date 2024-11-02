let currentSlide = 0;
const slides = ["animal1.jpg", "animal2.jpg", "animal3.jpg", "animal4.jpg", "animal5.jpg"];

function showSlide(index) {
    document.getElementById('slide').src = slides[index];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

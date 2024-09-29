let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = totalSlides;
    }
    updateSlides();
}

function updateSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

showSlides(); // Initialize the carousel

let navIcon = document.getElementById("nav-toggle")
let navContainer = document.querySelector(".hidden-items")

document.querySelector(".hidden-items ul").style.display = "none"

navIcon.addEventListener("click", function () {
    navContainer.classList.toggle("hidden-nav")
    navContainer.classList.toggle("visible-nav")
    if (navContainer.classList.contains("hidden-nav")) {
        document.querySelector(".hidden-items ul").style.display = "none"
    } else {
        setTimeout(function () {
            document.querySelector(".hidden-items ul").style.display = "block"
        }, 700)
    }
})

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.opacity = "0";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.opacity = "1";
//     dots[slideIndex - 1].className += " active";
// }

let slideIndex = 1;
showSlides(slideIndex);

let autoSlideInterval = setInterval(() => plusSlides(1), 4000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].className += " active";
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => plusSlides(1), 4000);
}







let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("Slider_images");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

let toggleMenu = document.getElementById("toggleMenu")
let hideBtn = document.getElementById("hideBtn")
let showeBtn = document.getElementById("showeBtn")


function tonggleBtn(){
    console.log(toggleMenu);
    toggleMenu.style.display ="block"
    hideBtn.style.display ="block"
    showeBtn.style.display ="none"
}
function tonggleHideBtn(){
    console.log("hide");
    toggleMenu.style.display ="none"
    showeBtn.style.display ="block"
    hideBtn.style.display ="none"
}
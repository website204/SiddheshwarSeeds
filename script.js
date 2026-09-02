/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   FULL-SCREEN IMAGE VIEWER
===================================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");


/* Create Fullscreen Viewer */

const imageViewer = document.createElement("div");

imageViewer.classList.add("image-viewer");

imageViewer.innerHTML = `

    <button class="close-viewer" aria-label="Close image">
        &times;
    </button>

    <img class="full-screen-image" src="" alt="Full screen image">

`;


document.body.appendChild(imageViewer);


const fullScreenImage =
    imageViewer.querySelector(".full-screen-image");

const closeViewer =
    imageViewer.querySelector(".close-viewer");


/* Open image */

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        fullScreenImage.src = this.src;

        fullScreenImage.alt = this.alt;

        imageViewer.classList.add("show");

        document.body.classList.add("no-scroll");

    });

});


/* Close using X */

closeViewer.addEventListener("click", function () {

    imageViewer.classList.remove("show");

    document.body.classList.remove("no-scroll");

});


/* Close by clicking outside image */

imageViewer.addEventListener("click", function (event) {

    if (event.target === imageViewer) {

        imageViewer.classList.remove("show");

        document.body.classList.remove("no-scroll");

    }

});


/* Close using Escape key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        imageViewer.classList.remove("show");

        document.body.classList.remove("no-scroll");

    }

});
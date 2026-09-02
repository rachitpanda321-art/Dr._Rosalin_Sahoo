/* =====================================================
   RESEARCH SLIDESHOW
===================================================== */

const researchSlides = [

    {
        image: "images/hero/Smart_composite_plate_structures_coupled_with_piezoelectric_materials.jpg",
        title: "Smart composite plate structures coupled with piezoelectric materials"
    },

    {
        image: "images/hero/Kinematic_of_a_plate_Zigzag_theory.jpg",
        title: "Kinematic of a plate-Zigzag theory"
    },

 {
        image: "images/hero/Experimental_work_on_fracture_properties_of_composite_materials.png",
        title: "Experimental work on fracture properties of composite materials"
    },

    {
        image: "images/hero/Bio-inspired_layup_scheme.jpg",
        title: "Bio-inspired composite plates"
    },

    {
        image: "images/hero/CNTRC_plate_in_elastic_foundation.png",
        title: "CNTRC plate in elastic foundation"
    },

    {
        image: "images/hero/Gauss_quadrature.png",
        title: "Gauss quadrature implementation in XFEM for fracture analysis of composite plate"
    },

    {
        image: "images/hero/Validation_of_IHSDT_for_FG-GPLRC_plates.jpg",
        title: "Validation of SFSDT for bending analysis of FG-GPLRC plates"
    },

    {
        image: "images/hero/Colaboration.png",
        title: "Dr. R. Sahoo collaboration network"
    },

    {
        image: "images/hero/Few_research_papers.png",
        title: "Few selected research papers"
    },

    {
        image: "images/hero/Zigzag_theory_for_sandwich_plates.png",
        title: "Zigzag theory for sandwich plates"
    },

    {
        image: "images/hero/ICRACM_conference .jpg",
        title: "ICRACM conference at IIT BHU"
    },

    {
        image: "images/hero/International_workshop.jpg",
        title: "International workshop on Modelling and Structural analysis of Advance materials at Department of Civil Engineering"
    }

];


let currentSlide = 0;


/* =====================================================
   ELEMENTS
===================================================== */

const slideImage =
    document.getElementById("slide-image");

const slideHeading =
    document.getElementById("slide-heading");

const previousButton =
    document.getElementById("prev-slide");

const nextButton =
    document.getElementById("next-slide");

const dotsContainer =
    document.getElementById("slider-dots");

const slideCounter =
    document.getElementById("slide-counter");


/* =====================================================
   CREATE DOTS
===================================================== */

function createDots() {

    dotsContainer.innerHTML = "";

    researchSlides.forEach(function(slide, index) {

        const dot =
            document.createElement("button");

        dot.className = "slider-dot";

        dot.setAttribute(
            "aria-label",
            "Go to slide " + (index + 1)
        );

        dot.addEventListener(
            "click",
            function() {

                currentSlide = index;

                showSlide(currentSlide);

            }
        );

        dotsContainer.appendChild(dot);

    });

}


/* =====================================================
   SHOW SLIDE
===================================================== */

function showSlide(index) {

    const slide =
        researchSlides[index];


    /* Fade image */

    slideImage.style.opacity = "0";


    setTimeout(function() {

        slideImage.src =
            slide.image;

        slideImage.alt =
            slide.title;

        slideHeading.textContent =
            slide.title;

        slideImage.style.opacity = "1";

    }, 200);


    /* Counter */

    const slideNumber =
        String(index + 1).padStart(2, "0");

    const totalNumber =
        String(researchSlides.length).padStart(2, "0");

    slideCounter.textContent =
        slideNumber + " / " + totalNumber;


    /* Active dot */

    const dots =
        document.querySelectorAll(".slider-dot");


    dots.forEach(function(dot, dotIndex) {

        dot.classList.toggle(
            "active",
            dotIndex === index
        );

    });

}


/* =====================================================
   NEXT SLIDE
===================================================== */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= researchSlides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* =====================================================
   PREVIOUS SLIDE
===================================================== */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            researchSlides.length - 1;

    }

    showSlide(currentSlide);

}


/* =====================================================
   BUTTON EVENTS
===================================================== */

nextButton.addEventListener(
    "click",
    nextSlide
);


previousButton.addEventListener(
    "click",
    previousSlide
);


/* =====================================================
   AUTOMATIC SLIDESHOW
===================================================== */

let slideshowTimer =
    setInterval(
        nextSlide,
        5000
    );


/* =====================================================
   INITIALIZE
===================================================== */

createDots();

showSlide(currentSlide);
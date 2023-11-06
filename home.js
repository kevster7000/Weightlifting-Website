const menuBurger = document.querySelector(".menu-burger");
const navbar = document.querySelector("nav");
menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("open");
    if(menuBurger.classList[1] == "open") {
        navbar.style.display = "flex";
        navbar.style.animation = "fade-in 0.5s ease-in-out 1 forwards";
    }
    else {
        navbar.style.animation = "fade-out 0.5s ease-in-out 1 forwards";
    }
});

window.addEventListener("click", (event) => {
    let height = navbar.offsetHeight + navbar.offsetTop;

    if(event.clientY > height && menuBurger.classList[1] == "open") {
        menuBurger.classList.toggle("open");
        navbar.style.animation = "fade-out 0.5s ease-in-out 1 forwards";
    }
});

let homeOptions = {
    rootMargin: "0px",
    threshold: 0.125,
}

const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("homeShow", entry.isIntersecting);
    });
}, homeOptions);

const home = document.querySelectorAll(".home-background video");
home.forEach((el) => {homeObserver.observe(el); })

let diff = 110;
let quoteOptions = {
    rootMargin: `350px 0px -${diff}px 0px`,
    threshold: 0.95,
};

let quoteObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("quoteShow");
            entry.target.querySelector(".quoteActive").classList.remove("quoteFade");
            entry.target.querySelector(".quoteActive").classList.add("quoteAnimate");
        }
        else {
            entry.target.classList.remove("quoteShow");
            entry.target.querySelector(".quoteActive").classList.remove("quoteAnimate");
            entry.target.querySelector(".quoteActive").classList.add("quoteFade");
        }
    });
}, quoteOptions);

const quoteContainer = document.querySelector(".quotes");
quoteObserver.observe(quoteContainer);

let carouselOptions = {
    rootMargin: "0px",
    threshold: 0.125,
};

const carouselObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("carouselShow", entry.isIntersecting);

        quoteObserver.unobserve(quoteContainer);

        diff = 
            (document.querySelector(".carousel").clientHeight * 0.1225) + 
            (document.querySelector(".carousel").offsetTop) - 
            (document.querySelector(".quotes").clientHeight + document.querySelector(".quotes").offsetTop);

        if(diff < 0) diff = 110;

        quoteOptions = {
            rootMargin: `350px 0px -${diff}px 0px`,
            threshold: 0.95,
        };

        quoteObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("quoteShow");
                    entry.target.querySelector(".quoteActive").classList.remove("quoteFade");
                    entry.target.querySelector(".quoteActive").classList.add("quoteAnimate");
                }
                else {
                    entry.target.classList.remove("quoteShow");
                    entry.target.querySelector(".quoteActive").classList.remove("quoteAnimate");
                    entry.target.querySelector(".quoteActive").classList.add("quoteFade");
                }
            });
        }, quoteOptions);
        
        quoteObserver.observe(quoteContainer);
    });
}, carouselOptions);

const carousel = document.querySelector(".carouselHidden");
carouselObserver.observe(carousel);

let activeCount = 0;
let leftCount = 7;
let rightCount = 1;

const quotes = document.getElementsByClassName("quote");

const slides = document.getElementsByClassName("slide");

let leftSlide = document.querySelector(".side-slide.left");
let rightSlide = document.querySelector(".side-slide.right");

const leftArrow = document.querySelector(".fa-angle-left")
const rightArrow = document.querySelector(".fa-angle-right")

leftSlide.addEventListener("click", goLeft);
leftArrow.addEventListener("click", goLeft);
rightSlide.addEventListener("click", goRight);
rightArrow.addEventListener("click", goRight);

function goLeft() {
    leftSlide.removeEventListener("click", goLeft);
    leftArrow.removeEventListener("click", goLeft);
    rightSlide.removeEventListener("click", goRight);
    rightArrow.removeEventListener("click", goRight);

    let leftPos =  rightSlide.offsetLeft - slides[activeCount].offsetLeft;
    document.querySelector(".carousel").style.setProperty("--LEFTPOS", `${leftPos}px`);

    slides[(leftCount - 1 < 0) ? 7 : (leftCount - 1)].classList.add("slide-emerge-left");
    slides[leftCount].classList.add("slide-activate-left");
    slides[activeCount].classList.add("slide-deactive-left");
    slides[rightCount].classList.add("slide-disappear-left");

    quotes[activeCount].classList.remove("quoteAnimate");
    quotes[activeCount].classList.remove("quoteActive");

    setTimeout(() => {
        slides[activeCount].classList.remove("active-slide");
        slides[leftCount].classList.remove("side-slide");
        slides[leftCount].classList.remove("left");
        slides[rightCount].classList.remove("side-slide");
        slides[rightCount].classList.remove("right");

        slides[(leftCount - 1 < 0) ? 7 : (leftCount - 1)].classList.remove("slide-emerge-left");
        slides[leftCount].classList.remove("slide-activate-left");
        slides[activeCount].classList.remove("slide-deactive-left");
        slides[rightCount].classList.remove("slide-disappear-left");
        
        nextSlides(-1);

        slides[activeCount].classList.add("active-slide");
        slides[leftCount].classList.add("side-slide");
        slides[leftCount].classList.add("left");
        slides[rightCount].classList.add("side-slide");
        slides[rightCount].classList.add("right");

        quotes[activeCount].classList.add("quoteAnimate");
        quotes[activeCount].classList.add("quoteActive");

        leftSlide = document.querySelector(".side-slide.left");
        rightSlide = document.querySelector(".side-slide.right");
        leftSlide.addEventListener("click", goLeft);
        leftArrow.addEventListener("click", goLeft);
        rightSlide.addEventListener("click", goRight);
        rightArrow.addEventListener("click", goRight);
    }, 800);
}

function goRight() {
    leftSlide.removeEventListener("click", goLeft);
    leftArrow.removeEventListener("click", goLeft);
    rightSlide.removeEventListener("click", goRight);
    rightArrow.removeEventListener("click", goRight);

    let rightPos =  leftSlide.offsetLeft - slides[activeCount].offsetLeft;
    document.querySelector(".carousel").style.setProperty("--RIGHTPOS", `${rightPos}px`);

    slides[leftCount].classList.add("slide-disappear-right");
    slides[activeCount].classList.add("slide-deactive-right");
    slides[rightCount].classList.add("slide-activate-right");
    slides[(rightCount + 1 > 7) ? 0 : (rightCount + 1)].classList.add("slide-emerge-right");

    quotes[activeCount].classList.remove("quoteAnimate");
    quotes[activeCount].classList.remove("quoteActive");
    
    setTimeout(() => {
        slides[activeCount].classList.remove("active-slide");
        slides[leftCount].classList.remove("side-slide");
        slides[leftCount].classList.remove("left");
        slides[rightCount].classList.remove("side-slide");
        slides[rightCount].classList.remove("right");

        slides[leftCount].classList.remove("slide-disappear-right");
        slides[activeCount].classList.remove("slide-deactive-right");
        slides[rightCount].classList.remove("slide-activate-right");
        slides[(rightCount + 1 > 7) ? 0 : (rightCount + 1)].classList.remove("slide-emerge-right");

        nextSlides(1);

        slides[activeCount].classList.add("active-slide");
        slides[leftCount].classList.add("side-slide");
        slides[leftCount].classList.add("left");
        slides[rightCount].classList.add("side-slide");
        slides[rightCount].classList.add("right");

        quotes[activeCount].classList.add("quoteAnimate");
        quotes[activeCount].classList.add("quoteActive");

        leftSlide = document.querySelector(".side-slide.left");
        rightSlide = document.querySelector(".side-slide.right");
        leftSlide.addEventListener("click", goLeft);
        leftArrow.addEventListener("click", goLeft);
        rightSlide.addEventListener("click", goRight);
        rightArrow.addEventListener("click", goRight);
    }, 800);
}

function nextSlides(it) {
    activeCount = (activeCount + it < 0) ? 7 : (activeCount + it > 7) ? 0 : activeCount + it;
    leftCount = (leftCount + it < 0) ? 7 : (leftCount + it > 7) ? 0 : leftCount + it;
    rightCount = (rightCount + it < 0) ? 7 : (rightCount + it > 7) ? 0 : rightCount + it;
}

let textShadowArr = [
    "0px 0px 10px hsla(0, 0%, 86%, 0.6), 0px 0px 3px hsla(0, 0%, 86%, 0.75);",
    "0px 0px 24px hsla(0, 0%, 86%, 0.725), 0px 0px 9px hsla(0, 0%, 86%, 0.875);",
];

function pulsate() {
    let text = document.querySelector("main h2");
    if(getComputedStyle(text).textShadow == "rgba(219, 219, 219, 0.6) 0px 0px 10px, rgba(219, 219, 219, 0.75) 0px 0px 3px") {
        text.style = `text-shadow: ${textShadowArr[1]}`;
    }
    else {
        text.style = `text-shadow: ${textShadowArr[0]}`;
    }
}

setInterval(pulsate, 5050);
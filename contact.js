//import { writeFile } from 'fs';

/* IMPORTANT *****************************************************************************************************
THIS FILE DOES NOT WORK AS PLANNED :(

I was simply going to write the inputs to a file, but then I found out that I need to use Node.js.
Therefore, the contact page does not work, but i tried to make it appear that it does work.

*************************************************************************************************************** */

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
    threshold: 0,
}

const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("homeShow", entry.isIntersecting);
    });
}, homeOptions);

const home = document.querySelectorAll(".contact-background video");
home.forEach((el) => {homeObserver.observe(el); })

const form = document.querySelector(".contact-form");
/* const firstName = document.querySelector("#firstname").value;
const lastName = document.querySelector("#lastname").value;
const email = document.querySelector("#email").value;
const message = document.querySelector("#message").value; */
const cover = document.querySelector(".contact-cover");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("submit event");

    form.style.display = "none";
    setTimeout(() => {
        cover.style.display = "block";
    }, 650);
});


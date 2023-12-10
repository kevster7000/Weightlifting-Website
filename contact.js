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


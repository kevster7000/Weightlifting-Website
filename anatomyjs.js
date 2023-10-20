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

let activeButton = document.querySelector(".anaActive");

const chestButton = document.getElementById("anaNavChest");
const chestDisplay = document.querySelector(".anaChest");

const shouldersButton = document.getElementById("anaNavShoulders");
const shouldersDisplay = document.querySelector(".anaShoulders");

const backButton = document.getElementById("anaNavBack");
const backDisplay = document.querySelector(".anaBack");

const armsButton = document.getElementById("anaNavArms");
const armsDisplay = document.querySelector(".anaArms");

const legsButton = document.getElementById("anaNavLegs");
const legsDisplay = document.querySelector(".anaLegs");

chestButton.addEventListener("click", (event) => {
    activeButton.classList.remove("anaActive");
    activeButton = event.target;
    setTimeout(() => {activeButton.classList.add("anaActive");}, 0);

    chestDisplay.style.display = "block";
    shouldersDisplay.style.display = "none";
    backDisplay.style.display = "none";
    armsDisplay.style.display = "none";
    legsDisplay.style.display = "none";
});

shouldersButton.addEventListener("click", (event) => {
    activeButton.classList.remove("anaActive");
    activeButton = event.target;
    setTimeout(() => {activeButton.classList.add("anaActive");}, 0);

    chestDisplay.style.display = "none";
    shouldersDisplay.style.display = "block";
    backDisplay.style.display = "none";
    armsDisplay.style.display = "none";
    legsDisplay.style.display = "none";
});

backButton.addEventListener("click", (event) => {
    activeButton.classList.remove("anaActive");
    activeButton = event.target;
    setTimeout(() => {activeButton.classList.add("anaActive");}, 0);

    chestDisplay.style.display = "none";
    shouldersDisplay.style.display = "none";
    backDisplay.style.display = "block";
    armsDisplay.style.display = "none";
    legsDisplay.style.display = "none";
});

armsButton.addEventListener("click", (event) => {
    activeButton.classList.remove("anaActive");
    activeButton = event.target;
    setTimeout(() => {activeButton.classList.add("anaActive");}, 0);

    chestDisplay.style.display = "none";
    shouldersDisplay.style.display = "none";
    backDisplay.style.display = "none";
    armsDisplay.style.display = "block";
    legsDisplay.style.display = "none";
});

legsButton.addEventListener("click", (event) => {
    activeButton.classList.remove("anaActive");
    activeButton = event.target;
    setTimeout(() => {activeButton.classList.add("anaActive");}, 0);

    chestDisplay.style.display = "none";
    shouldersDisplay.style.display = "none";
    backDisplay.style.display = "none";
    armsDisplay.style.display = "none";
    legsDisplay.style.display = "block";
});
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

let options = {
    rootMargin: "0px",
    threshold: 0.35,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("load");
            entry.target.classList.remove("exfade");
        }
        else {
            entry.target.classList.add("exfade");
            entry.target.classList.remove("load");
        }
    })
}, options);

const exercises = document.getElementsByClassName("exercise");
for(let i = 0; i < exercises.length; i++) observer.observe(exercises[i]);
let currentExercises = [];

const clavicular = ["chest2", "chest4", "chest8", "chest11", "chest14"];
const sternal = ["chest1", "chest3", "chest5", "chest6", "chest12", "chest14", "chest15", "chest16"];
const costal = ["chest7", "chest9", "chest10", "chest13", "chest14"];

const frontDelt = ["shoulders3", "shoulders4", "shoulders5", "shoulders9", "shoulders10", "shoulders12", "shoulders15"];
const lateralDelt = ["shoulders1", "shoulders2", "shoulders7", "shoulders8"];
const rearDelt = ["shoulders6", "shoulders11", "shoulders13", "shoulders14"];

const upperBack = ["back1", "back3", "back6", "back10", "back11"];
const traps = ["back8", "back12", "back13"];
const latDorsi = ["back2", "back4", "back5", "back7", "back9", "back14"];

const biceps = ["arms1", "arms4", "arms7", "arms8", "arms12", "arms14", "arms17"];
const triceps = ["arms2", "arms3", "arms5", "arms9", "arms10", "arms13", "arms18"];
const forearm = ["arms6", "arms11", "arms15", "arms16"];

const quadriceps = ["legs1", "legs2", "legs3", "legs5", "legs6", "legs16", "legs17", "legs18"];
const hamstrings = ["legs4", "legs8", "legs10", "legs14"];
const calves = ["legs7", "legs11", "legs12", "legs13", "legs20"];
const glutes = ["legs4", "legs5", "legs8", "legs9", "legs15", "legs19"];

// Chest
try {
    const clavicularBtn = document.querySelector("#clavicularBtn");
    const sternalBtn = document.querySelector("#sternalBtn");
    const costalBtn = document.querySelector("#costalBtn");

    clavicularBtn.addEventListener("click", () => {
        filter(exercises, clavicular);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    sternalBtn.addEventListener("click", () => {
        filter(exercises, sternal);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    costalBtn.addEventListener("click", () => {
        filter(exercises, costal);
        setTimeout(() => { rankAndOrder();}, 70);
    });
}
catch(err) {}

// Shoulders
try {
    const frontDeltBtn = document.querySelector("#frontDeltBtn");
    const lateralDeltBtn = document.querySelector("#lateralDeltBtn");
    const rearDeltBtn = document.querySelector("#rearDeltBtn");

    frontDeltBtn.addEventListener("click", () => {
        filter(exercises, frontDelt);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    lateralDeltBtn.addEventListener("click", () => {
        filter(exercises, lateralDelt);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    rearDeltBtn.addEventListener("click", () => {
        filter(exercises, rearDelt);
        setTimeout(() => { rankAndOrder();}, 70);
    });
}
catch(err) {}

// Back
try {
    const upperBackBtn = document.querySelector("#upperBackBtn");
    const trapsBtn = document.querySelector("#trapsBtn");
    const latDorsiBtn = document.querySelector("#latDorsiBtn");

    upperBackBtn.addEventListener("click", () => {
        filter(exercises, upperBack);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    trapsBtn.addEventListener("click", () => {
        filter(exercises, traps);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    latDorsiBtn.addEventListener("click", () => {
        filter(exercises, latDorsi);
        setTimeout(() => { rankAndOrder();}, 70);
    });
}
catch(err) {}

// Arms
try {
    const bicepsBtn = document.querySelector("#bicepsBtn");
    const tricepsBtn = document.querySelector("#tricepsBtn");
    const forearmBtn = document.querySelector("#forearmBtn");

    bicepsBtn.addEventListener("click", () => {
        filter(exercises, biceps);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    tricepsBtn.addEventListener("click", () => {
        filter(exercises, triceps);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    forearmBtn.addEventListener("click", () => {
        filter(exercises, forearm);
        setTimeout(() => { rankAndOrder();}, 70);
    });
}
catch(err) {}

// Legs
try {
    const quadricepsBtn = document.querySelector("#quadricepsBtn");
    const hamstringsBtn = document.querySelector("#hamstringsBtn");
    const calvesBtn = document.querySelector("#calvesBtn");
    const glutesBtn = document.querySelector("#glutesBtn");

    quadricepsBtn.addEventListener("click", () => {
        filter(exercises, quadriceps);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    hamstringsBtn.addEventListener("click", () => {
        filter(exercises, hamstrings);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    calvesBtn.addEventListener("click", () => {
        filter(exercises, calves);
        setTimeout(() => { rankAndOrder();}, 70);
    });
    glutesBtn.addEventListener("click", () => {
        filter(exercises, glutes);
        setTimeout(() => { rankAndOrder();}, 70);
    });
}
catch(err) {}

const clearBtn = document.querySelector(".filters-clear");
clearBtn.addEventListener("click", () => {
    clear();
});

function filter(exercises, array) {
    currentExercises = [];
    for(let i = 0; i < exercises.length; i++) {
        observer.unobserve(exercises[i]);
        exercises[i].classList.remove("display");
        exercises[i].classList.remove("load");
        exercises[i].classList.remove("exfade");
        if(array.includes(exercises[i].id)) {
            currentExercises.push(exercises[i]);
        }
    }
}

function rankAndOrder() {
    for(let i = 0; i < currentExercises.length; i++) {
        observer.observe(currentExercises[i]);
        currentExercises[i].querySelector(".ranking").textContent = i + 1;
        currentExercises[i].querySelector(".count").textContent = currentExercises.length;
        currentExercises[i].classList.add("display");
    }
}

function clear() {
    currentExercises = [];
    for(let i = 0; i < exercises.length; i++) {
        observer.unobserve(exercises[i]);
        exercises[i].classList.remove("display");
        exercises[i].classList.remove("load");
        exercises[i].classList.remove("exfade");
    }
    currentExercises = exercises;
    setTimeout(() => { rankAndOrder();}, 70);

    //console.log(exercises);
}
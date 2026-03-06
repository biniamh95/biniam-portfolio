// Animate Skill Bars on Page Load
window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value;
    });
});

// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 200;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    updateCounter();
});
const text = [
"Full Stack Developer",
"Content Creator",
"Social Media Strategist"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);
}

type();
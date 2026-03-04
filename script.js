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
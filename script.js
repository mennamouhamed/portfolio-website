// Navbar shadow on scroll

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    nav.classList.toggle("scrolled", window.scrollY > 50);

});


// Reveal animation on scroll

const cards = document.querySelectorAll(
    ".project-card, .skill-card, .exp-card"
);

window.addEventListener("scroll", revealCards);

function revealCards() {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}


// Initial styles for animation

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";

});


// Typing effect for hero title

const title = document.querySelector(".hero-text h3");

const text = "Software Engineering Student";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    }

}

title.textContent = "";

typeEffect();
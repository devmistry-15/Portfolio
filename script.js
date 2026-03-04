/* ===============================
   NAVIGATION ACTIVE LINK
================================= */

const navLinks = document.querySelectorAll(".nav-list li a");

function setActiveLink() {
    let currentPage = window.location.hash;

    if (currentPage === "" || currentPage === "#") {
        currentPage = "#heroSection";
    }

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

setActiveLink();
window.addEventListener("hashchange", setActiveLink);



/* ===============================
   TYPING ANIMATION
================================= */

const typingElement = document.querySelector(".typing-text");
const cursorElement = document.querySelector(".typing-blink");

const roles = [
    "a Frontend Developer.",
    "a Web Designer.",
    "a Creative Coder."
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

function typeAnimation() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    cursorElement.style.animation = "cursor-blink 0.7s infinite";

    // When word fully typed
    if (!isDeleting && charIndex === currentRole.length) {
        isPaused = true;
        cursorElement.style.animation = "none";

        setTimeout(() => {
            isDeleting = true;
            isPaused = false;
            cursorElement.style.animation = "cursor-blink 0.7s infinite";
        }, 2000);
    }

    // When word fully deleted
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (isPaused) typingSpeed = 2000;

    setTimeout(typeAnimation, typingSpeed);
}

// Start animation
if (typingElement) {
    setTimeout(typeAnimation, 500);
}



/* ===============================
   SMOOTH SCROLL
================================= */

document.querySelectorAll('.nav-list a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});



/* ===============================
   HANDLE PAGE LOAD WITH HASH
================================= */

if (window.location.hash) {
    const target = document.querySelector(window.location.hash);

    if (target) {
        setTimeout(() => {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    }
}
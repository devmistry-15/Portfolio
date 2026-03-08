// ===== TYPING ANIMATION =====
const typingElement = document.querySelector(".typing-text");
const cursorElement = document.querySelector(".typing-blink");

const roles = [
  "a Frontend Developer.",
  "a Web Designer.",
  "a Creative Coder.",
  "a UI/UX Enthusiast.",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

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

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 2000);
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeAnimation, speed);
}

setTimeout(typeAnimation, 500);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== HANDLE PAGE LOAD WITH HASH =====
if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Simple validation
  if (name.trim() && email.trim() && message.trim()) {
    // Show success message
    successMessage.classList.add("show");

    // Reset form
    contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);

    // Log data (in production, this would send to a server)
    console.log("Form submitted:", { name, email, message });
  }
});

// ===== BUTTON INTERACTIONS =====
document.querySelector(".btn1").addEventListener("click", () => {
  alert(
    "Thanks for your interest! Please send me a message through the contact form.",
  );
});

document.querySelector(".btn2").addEventListener("click", () => {
  alert("CV download functionality can be connected to a real file.");
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

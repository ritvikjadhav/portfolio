// ===============================
// Typing Effect
// ===============================
const typingElement = document.getElementById("typing");
const words = ["Web Developer", "Software Engineer", "Frontend Specialist"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
      setTimeout(typeEffect, 300);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex >= currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }

  const speed = isDeleting ? 100 : 150;
  setTimeout(typeEffect, speed);
}

// Initialize typing effect
typeEffect();


// ===============================
// ===============================
// Mobile Menu Toggle
// ===============================
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
const closeIcon = document.getElementById("close-icon");

// Toggle drawer when hamburger is clicked
menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");       // open/close drawer
  menuIcon.classList.toggle("open");    // optional: animate hamburger icon
});

// Close drawer when a nav link is clicked
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuIcon.classList.remove("open");
  });
});

// Close drawer when cross icon is clicked
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    nav.classList.remove("active");
    menuIcon.classList.remove("open");
  });
}

// Optional: close when a nav link is clicked
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// ===============================
// Scroll Reveal
// ===============================
const sections = document.querySelectorAll("section");

function initScrollReveal() {
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;

      if (sectionTop < triggerPoint) {
        section.classList.add("show");
      } else {
        section.classList.remove("show"); // optional: hide when scrolling back
      }
    });
  });
}
initScrollReveal();


// ===============================
// Active Nav Highlight
// ===============================
const navLinks = document.querySelectorAll("nav a");

function initActiveNavHighlight() {
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}
initActiveNavHighlight();


// ===============================
// Device Detection (Desktop Mode Fix)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  function checkDesktopMode() {
    // Chrome "Desktop site" usually reports width >= 980px
    if (window.innerWidth >= 980) {
      html.classList.add("desktop");
      html.classList.remove("mobile");
      console.log("Desktop layout forced");
    } else {
      html.classList.add("mobile");
      html.classList.remove("desktop");
      console.log("Mobile layout active");
    }
  }

  // Run on load and whenever viewport changes
  checkDesktopMode();
  window.addEventListener("resize", checkDesktopMode);
});


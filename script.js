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
// Mobile Menu Toggle
// ===============================
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

function initMenuToggle() {
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
initMenuToggle();


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

function initForceDesktopMode() {
  const ua = navigator.userAgent.toLowerCase();
  const isMobile = /android|iphone|ipad|ipod/.test(ua);
  const isDesktopUA = !/mobile/.test(ua);

  if (isMobile && isDesktopUA) {
    document.body.classList.add("force-desktop");
  }
}
initForceDesktopMode();







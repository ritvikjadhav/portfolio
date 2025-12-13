// Typing effect
const typingElement = document.getElementById("typing");
const words = [
  "Web Developer",
  "Software Engineer",
  "Frontend Specialist",
  "UI/UX Enthusiast",
  "Full Stack Creator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  const speed = isDeleting ? 100 : 150;
  setTimeout(typeEffect, speed);
}
typeEffect();

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Scroll reveal
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
});

// Active nav highlight
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

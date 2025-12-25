document.addEventListener("DOMContentLoaded", () => {
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

  typeEffect();
});



function initMenuToggle() {
  const menuIcon = document.getElementById("menu-icon");
  const nav = document.getElementById("nav");

  if (menuIcon && nav) {
    menuIcon.addEventListener("click", () => {
      const isActive = nav.classList.toggle("active");
      menuIcon.setAttribute("aria-expanded", isActive);
    });
  }
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

function initActiveNavHighlight() {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

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
      link.removeAttribute("aria-current");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  });
}
initActiveNavHighlight();

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  function checkDesktopMode() {
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

  checkDesktopMode();
  window.addEventListener("resize", checkDesktopMode);
  window.addEventListener("orientationchange", checkDesktopMode);
});



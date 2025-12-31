/* ================================
   Import Google Font
================================ */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

/* ================================
   Theme variables (colors, sizing)
================================ */
:root {
  --bg-color: #0f0f1a;        /* Dark cosmic background */
  --primary: #a2d2ff;         /* Light blue accent */
  --secondary: #c77dff;       /* Purple accent */
  --accent: #4cc9f0;          /* Bright cyan accent */
  --text-color: #e0e0ff;      /* Light text on dark */
  --card-bg:#ffffff;         /* Card background for sections */
}

/* ================================
   Global reset and base styles
================================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
}

html {
  font-size: 62.5%;             /* 1rem = 10px for easier scaling */
  scroll-behavior: smooth;      /* Smooth scrolling effect */
  scroll-padding-top: 100px;    /* Offset to avoid header overlap on anchor scroll */
}

body {
  width: 100%;
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;           /* Prevent horizontal scroll */
}

/* ================================
   Header and logo
================================ */
header {
  position: fixed;              /* Fix header to top */
  top: 0;
  width: 100%;
  padding: 2rem 9%;
  background: transparent;      /* Keep hero visible behind */
  box-shadow: none;
  z-index: 100;                 /* Above content */
}

.logo {
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.3s ease;
}
.logo:hover {
  transform: scale(1.1);
}

/* ================================
   Navigation links (underline on hover/active)
================================ */
nav a {
  font-size: 1.6rem;
  color: var(--text-color);
  margin-left: 3rem;
  font-weight: 500;
  position: relative;           /* For underline */
  transition: color 0.3s ease;
}
nav a:hover {
  color: var(--accent);
}

/* Underline grows from left on hover/active */
nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0%;
  height: 3px;
  background: var(--accent);
  transition: width 0.3s ease;
}
nav a:hover::after,
nav a.active::after {
  width: 100%;
}

/* ================================
   Mobile/right-side drawer navigation
   - Hidden off-screen to the right
   - Slides in when #nav.active is toggled
================================ */
#nav {
  position: fixed;
  top: 0;
  right: -60%;              /* hidden off-screen initially */
  width: 60%;               /* drawer covers 60% of screen */
  height: 100vh;            /* full height */
  background: #ffffff;      /* distinct background */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4rem 2rem;
  transition: right 0.4s ease;  /* smooth slide */
  z-index: 999;
  box-shadow: -4px 0 12px rgba(0,0,0,0.3);
  border-top-left-radius: 20px;   /* curve top-left corner */
  border-bottom-left-radius: 20px;/* curve bottom-left corner */
}


/* Drawer visible */
#nav.active {
  right: 0;
}

/* Drawer nav links */
#nav a {
  display: block;
  margin: 1.2rem 0;
  font-size: 1.6rem;
  color: var(--text-color);
}
/* ================================
   Hero section (background fade + content reveal)
================================ */
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  z-index: 1;

  /* Background image */
  background: url("starry.jpg") no-repeat center center fixed;
  background-size: cover;

  /* Layout spacing */
  padding: 12rem 9% 0;
  margin-bottom: -2px; /* overlap to avoid seam */
}

.white-bg {
  background: #ffffff;
  margin-top: 0;
  padding-top: 0;
  border: none;
  box-shadow: none;
}

/* Background fade animation */
@keyframes bgFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Content fade-up animation on load */
.home-content,
.home-img {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 1.5s ease forwards;
  animation-delay: 0.5s;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Hero text styling */
.home-content h1 {
  font-weight: 700;
  line-height: 1.3;
}
.home-content h1 span {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: 0.05em;
}
.home-content h3 {
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--accent);
}



/* Dark starry gradient headings for white sections */
.white-bg h2,
#about h2,
#skills h2,
#projects-experience h2,
#contact h2 {
  background: linear-gradient(90deg, #3a0ca3, #4361ee, #7209b7); 
  /* deep indigo → cosmic blue → rich purple */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 2px;
}

.moon-wrapper {
  position: absolute;
  top: 50%;
  left: -17%;
  transform: translateY(-50%);
  width: 470px;
  height: 470px;
  z-index: 0;
  pointer-events: none;
  opacity: 1;
}

/* Outer: slide-in */
.moon-slide {
  width: 100%;
  height: 100%;
  animation: slideMoon 1.6s ease forwards;
}

/* Inner: rotation */
.moon {
  width: 100%;
  height: 100%;
  background: url("moon.png") no-repeat center center;
  background-size: cover;
  animation: rotateMoon 120s linear infinite;
}

/* Slide-in animation */
@keyframes slideMoon {
  from {
    transform: translateX(-80px); /* start further left */
    opacity: 0.3;
  }
  to {
    transform: translateX(0);     /* settle into normal position */
    opacity: 1;
  }
}

/* Rotation animation */
@keyframes rotateMoon {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ================================
   Profile image styling
================================ */
.home-img { position: relative; z-index: 2; }
.home-img img {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 25px var(--accent);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}
.home-img img:hover {
  transform: scale(1.1) rotate(3deg);
  box-shadow: 0 0 40px var(--secondary);
}

/* ================================
   Social icons
================================ */
.social-icons a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: 0.2rem solid var(--accent);
  font-size: 2rem;
  border-radius: 50%;
  margin: 2rem 1rem 2rem 0;
  transition: 0.4s ease;
  color: var(--accent);
}
.social-icons a:hover {
  color: var(--bg-color);
  background: var(--accent);
  box-shadow: 0 0 25px var(--accent);
  transform: scale(1.2) rotate(10deg);
}

/* ================================
   Buttons (Hire Me / Download CV)
================================ */
.btn {
  display: inline-block;
  padding: 1rem 2.8rem;
  background: transparent;
  border-radius: 4rem;
  font-size: 1.6rem;
  margin-right: 3rem;
  color: var(--accent);
  letter-spacing: 0.2rem;
  font-weight: 600;
  border: 2px solid var(--accent);
  transition: 0.4s ease;
  cursor: pointer;
}
.btn:hover {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  color: var(--bg-color);
  box-shadow: 0 0 25px var(--accent);
  transform: scale(1.05);
}

/* Optional container for buttons to control spacing on mobile */
.btn-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ================================
   Section reveal on scroll
================================ */
section {
  min-height: auto;
  padding: 8rem 9% 5rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
}
section.show {
  opacity: 1;
  transform: translateY(0);
}

/* ================================
   About section basics
================================ */
#about {
  background: transparent;      /* White comes from .white-bg wrapper */
  color: inherit;
  box-shadow: none;
}
#about h2 {
  font-weight: 600;
  margin-bottom: 2rem;
}
#about p {
  font-size: 1.6rem;
  line-height: 1.8;
}

/* ================================
   Projects (simple card style)
   - If using grid, wrap cards in .projects-container
================================ */
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
}

.project {
  background: var(--card-bg);
  padding: 3.7rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 15px rgba(58, 134, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(131, 56, 236, 0.5);
}
.project h3 {
  font-size: 2.0rem;
  margin-bottom: 1rem;
  color: #333;
}
.project p {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
.project a {
  font-size: 1.4rem;
  color: var(--accent);
  font-weight: 600;
  transition: color 0.3s ease;
}
.project a:hover {
  color: var(--secondary);
}

/* ================================
   Skill badges
================================ */
.skill-badge {
  display: inline-block;
  background: var(--accent);
  color: var(--bg-color);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.3rem;
  transition: 0.3s ease;
}
.skill-badge:hover {
  background: var(--secondary);
  color: var(--text-color);
}

/* ================================
   Fluid typography for responsive sizing
================================ */
h1 { font-size: clamp(2.4rem, 6vw, 5.5rem); }
h2 { font-size: clamp(1.8rem, 4.5vw, 3rem); }
p  { font-size: clamp(1.3rem, 2.5vw, 1.6rem); line-height: 1.6; }

/* ================================
   Hamburger icon visibility control
================================ */
#menu-icon { display: none; }   /* Hidden by default; shown in mobile breakpoints */

/* ================================
   Responsive: phones ≤ 420px
   - Stack hero content
   - Show hamburger
   - DO NOT override #nav drawer positioning
================================ */
@media (max-width: 420px) {
  .home {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    padding: 8rem 1.5rem 6rem;
    background-attachment: scroll; /* Better perf on mobile */
  }
    #nav {
    right: -60%;          /* hidden off-screen initially */
    width: 40%; /* drawer covers 60% of screen */
    height: 15%;        /* full height of viewport */
    padding: 4rem 2rem;   /* balanced spacing */
    background: #ffffff;  /* distinct background */
  }

  #nav a {
    color: #333;          /* readable text color */
    font-weight: 600;
  }

  #close-icon {
    color: #333;
  }

  .home-content h1 { font-size: 3.2rem; }
  .home-content h3 { font-size: 2rem; }
  .home-img img { width: 120px; height: 120px; }

  .moon-wrapper { display: none; } /* Hide large moon on small screens */

  #menu-icon {
    display: block;
    font-size: 2rem;
    color: var(--accent);
    cursor: pointer;
  }

  /* Buttons: allow wrapping and spacing */
  .btn { margin: 0.5rem 0; width: 100%; text-align: center; }
  .btn-container { gap: 0.8rem; }

  section {
    padding: 6rem 6% 4rem;
  }
}

/* ================================
   Responsive: large phones 421–767px
================================ */
@media (min-width: 421px) and (max-width: 767px) {
  .home {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    padding: 9rem 2rem 6rem;
    background-attachment: scroll;
  }
  #nav {
    right: -60%;          /* hidden off-screen initially */
    width: 40%; /* drawer covers 60% of screen */
    height: 15%;        /* full height of viewport */
    padding: 4rem 2rem;   /* balanced spacing */
    background: #ffffff;  /* distinct background */
  }

  #nav a {
    color: #333;          /* readable text color */
    font-weight: 600;
  }

  #close-icon {
    color: #333;
  }
  .home-content h1 { font-size: 3.8rem; }
  .home-content h3 { font-size: 2.2rem; }
  .home-img img { width: 160px; height: 160px; }

  .moon-wrapper { display: none; }

  #menu-icon {
    display: block;
    font-size: 2.2rem;
    color: var(--accent);
    cursor: pointer;
  }

  section {
    padding: 7rem 7% 4.5rem;
  }
}

/* ================================
   Responsive: tablets 768–990px
================================ */
@media (min-width: 768px) and (max-width: 990px) {
  .home {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    padding: 10rem 3rem 7rem;
    background-attachment: scroll;
  }
     #nav {
    right: -60%;          /* hidden off-screen initially */
    width: 40%; /* drawer covers 60% of screen */
    height: 15%;        /* full height of viewport */
    padding: 4rem 2rem;   /* balanced spacing */
    background: #ffffff;  /* distinct background */
  }

  #nav a {
    color: #333;          /* readable text color */
    font-weight: 600;
  }

  #close-icon {
    color: #333;
  }
  .home-content h1 { font-size: 4.5rem; }
  .home-content h3 { font-size: 2.5rem; }
  .home-img img { width: 200px; height: 200px; }

  .moon-wrapper { display: none; }

  #menu-icon {
    display: block;
    font-size: 2.4rem;
    color: var(--accent);
    cursor: pointer;
  }

  section {
    padding: 7.5rem 7% 5rem;
  }
}

/* ================================
   Responsive: desktop ≥ 980px
   - Show inline nav
   - Moon visible
================================ */
@media (min-width: 980px) {
  #menu-icon { display: none; } /* Hide hamburger on desktop */

  /* Inline nav (desktop) — not a drawer */
  #nav {
    position: static;
    right: auto;
    width: auto;
    height: auto;
    background: none;
    box-shadow: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem; /* adds horizontal spacing between nav items */ justify-content: center; align-items: center;
  }
  
  /* Hide cross icon by default (desktop) */
#close-icon {
  display: none;
}

  #close-icon {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2.2rem;
    color: var(--text-color); /* adjust for visibility */
    cursor: pointer;
    z-index: 1000;
  }
}

  .moon-wrapper {
    opacity: 0.55;
    visibility: visible;
    transform: scale(1) translateY(-50%);
    display: block;
  }
}

/* ================================
   Forced desktop layout if .desktop is present on <html>
================================ */
.desktop .home {
  flex-direction: row !important;
  text-align: left !important;
  padding: 12rem 9% 10rem !important;
}
.desktop #nav {
  display: flex !important;
  flex-direction: row !important;
  position: static !important;
  width: auto !important;
  background: none !important;
  box-shadow: none !important;
}
.desktop #menu-icon {
  display: none !important;
}
.desktop .moon-wrapper {
  display: block !important;
  opacity: 0.55 !important;
  visibility: visible !important;
  transform: scale(1) translateY(-50%) !important;
}

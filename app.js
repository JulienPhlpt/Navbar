// Responsive navbar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle navigation bar
    nav.classList.toggle("nav-acvtive");

    // Links animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

// Section highlight
const gradient = () => {
  const sections = document.querySelectorAll("section");
  const bubble = document.querySelector(".bubble");
  const navSection = document.querySelectorAll(".nav-links a");
  const gradients = [
    "linear-gradient(45deg, #f09819, #edde5d)",
    "linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)",
    "linear-gradient(45deg, #02aab0, #00cdac)",
    "linear-gradient(45deg, #FF416C, #FF4B2B)",
  ];

  const options = {
    threshold: 0.7,
  };

  let observer = new IntersectionObserver(navCheck, options);

  function navCheck(entries) {
    entries.forEach((entry) => {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const gradientIndex = entry.target.getAttribute("data-index");
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left,
      };
      if (entry.isIntersecting) {
        bubble.style.setProperty("left", `${directions.left}px`);
        bubble.style.setProperty("top", `${directions.top}px`);
        bubble.style.setProperty("width", `${directions.width}px`);
        bubble.style.setProperty("height", `${directions.height}px`);
        bubble.style.background = gradients[gradientIndex];
      }
    });
  }

  sections.forEach((section) => {
    observer.observe(section);
  });
};

navSlide();
gradient();

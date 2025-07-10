// Particles Animation
function createParticles() {
  const particles = document.getElementById("particles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particles.appendChild(particle);
  }
}

// Scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".slide-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

// Skill bar animations
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      bar.classList.add("animate");
    }
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-gray-900/95");
  } else {
    navbar.classList.remove("bg-gray-900/95");
  }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Mouse trail effect
function createMouseTrail() {
  let trail = [];
  const maxTrail = 20;

  document.addEventListener("mousemove", (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > maxTrail) {
      trail.shift();
    }

    // Remove existing trail elements
    document.querySelectorAll(".mouse-trail").forEach((el) => el.remove());

    // Create new trail elements
    trail.forEach((point, index) => {
      const trailElement = document.createElement("div");
      trailElement.className = "mouse-trail";
      trailElement.style.cssText = `
                        position: fixed;
                        width: ${4 - index * 0.1}px;
                        height: ${4 - index * 0.1}px;
                        background: rgba(102, 126, 234, ${0.5 - index * 0.02});
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 9999;
                        left: ${point.x}px;
                        top: ${point.y}px;
                        transform: translate(-50%, -50%);
                    `;
      document.body.appendChild(trailElement);
    });
  });
}

// Typing animation restart
function restartTypingAnimation() {
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    typingElement.style.animation = "none";
    setTimeout(() => {
      typingElement.style.animation =
        "typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite";
    }, 100);
  }
}

// Initialize everything
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  setupSmoothScrolling();
  createMouseTrail();
  handleScrollAnimations();

  // Restart typing animation every 10 seconds
  setInterval(restartTypingAnimation, 10000);
});

// Event listeners
window.addEventListener("scroll", () => {
  handleScrollAnimations();
  animateSkillBars();
  handleNavbarScroll();
});

// Mobile menu toggle
document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    // Add mobile menu functionality here
    console.log("Mobile menu clicked");
  });

// Add hover effects to cards
document.querySelectorAll(".card-hover").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add click effects to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
const textArray = [
  "Full Stack Developer",
  "Informatics Student",
  "Tech Enthusiast",
  "Open Source Contributor",
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 50;
const delayBetweenWords = 1500;
const typingElement = document.getElementById("typing-text");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, eraseSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

// Mulai animasi
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 500);
});
function showTab(tab) {
  document.getElementById("tech").classList.add("hidden-tab");
  document.getElementById("tools").classList.add("hidden-tab");

  document.getElementById(tab).classList.remove("hidden-tab");
  document.getElementById(tab).classList.add("active-tab");

  // Highlight button (optional, perlu tambahan class active button)
}
function showTab(tab) {
  const tech = document.getElementById("tech");
  const tools = document.getElementById("tools");

  tech.style.display = "none";
  tools.style.display = "none";

  if (tab === "tech") tech.style.display = "block";
  if (tab === "tools") tools.style.display = "block";
}

window.onload = () => showTab("tech");

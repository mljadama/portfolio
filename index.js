// Responsive Navbar Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });
});

// Typed Animation for Hero Text
const typedText = document.querySelector('.typed-text');
if (typedText) {
  const phrases = [
    'Front-End Developer | UI/UX Enthusiast',
    'JavaScript & React Specialist',
    'Creating Stunning Digital Experiences',
    "Let's build something amazing!"
  ];
  let phraseIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typedText.textContent = currentPhrase.substring(0, charIndex--);
    } else {
      typedText.textContent = currentPhrase.substring(0, charIndex++);
    }
    if (!isDeleting && charIndex === currentPhrase.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 600);
    } else {
      setTimeout(type, isDeleting ? 35 : 90);
    }
  }
  type();
}

// Contact Form Submission (Demo: disables actual submission)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    contactForm.reset();
    setTimeout(() => {
      formMessage.textContent = '';
    }, 5000);
  });
}

// Fade-In Animation for Images on Scroll
function fadeInOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = 1;
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// --- Existing JS remains above this comment ---

// Dark Mode Toggle
function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'on');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'off');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

// Insert toggle button into DOM
const toggleBtn = document.createElement('button');
toggleBtn.className = 'dark-mode-toggle';
toggleBtn.type = 'button';
toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(toggleBtn);

// Load dark mode preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkPref = localStorage.getItem('darkMode');
if (darkPref === 'on' || (!darkPref && prefersDark)) {
  setDarkMode(true);
}

// Toggle dark mode on click
toggleBtn.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
});

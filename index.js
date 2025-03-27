// Navbar Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('.nav-link, .btn').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Typing Animation for Hero
const typedText = document.querySelector('.typed-text');
const textArray = ['Front-End Developer', 'UI/UX Enthusiast', 'Web Creator'];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000);
});

// Contact Form Submission 
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const subject = document.querySelector('input[placeholder="Subject"]').value;
  const message = document.querySelector('textarea').value;
  const formMessage = document.getElementById('formMessage');

  if (name && email && subject && message) {
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = '#ff4d4d';
    e.target.reset();
    setTimeout(() => formMessage.textContent = '', 3000);
  } else {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.style.color = '#fff';
  }
});
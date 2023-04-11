document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('show-links');
    });
  
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        if (nav.classList.contains('show-links')) {
          nav.classList.remove('show-links');
        }
      });
    });
  });
  
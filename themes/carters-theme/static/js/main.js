// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside (e.g. on main content)
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active') && !e.target.closest('header')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  }
});

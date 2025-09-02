let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let themeToggle = document.querySelector('#theme-toggle');
let clickSound = new Audio('click.mp3');
let lightModeSound = new Audio('audio/light_side.wav');
let darkModeSound = new Audio('audio/dark_side.wav');

clickSound.volume = 0.25;
lightModeSound.volume = 0.25;
darkModeSound.volume = 0.25;

menuIcon.onclick = () => {
    // Fade out current icon
    menuIcon.classList.add('fade');
    setTimeout(() => {
        menuIcon.classList.toggle('bx-x');
        menuIcon.classList.remove('fade');
    }, 300); // Match CSS transition duration
    navbar.classList.toggle('active');
    clickSound.play();
};

themeToggle.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    themeToggle.textContent = newTheme === 'dark' ? 'Light Side' : 'Dark Side';

    if (newTheme === 'dark') {
        darkModeSound.play();
    } else {
        lightModeSound.play();
    }
};

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = 'dark';
    const themeToApply = savedTheme || defaultTheme;

    document.documentElement.setAttribute('data-theme', themeToApply);
    themeToggle.textContent = themeToApply === 'dark' ? 'Light Side' : 'Dark Side';
 
};

document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
              document.getElementById('page-fade').classList.add('fade-out');
            }, 100); // Start fade after short delay for smoothness
            setTimeout(function() {
              document.getElementById('page-fade').style.display = 'none';
            }, 1200); // Remove after fade duration
          });

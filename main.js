
import './assets/styles/main.scss';

const menuButton = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});

const darkModeButtons = document.querySelectorAll('.dark-mode');

darkModeButtons.forEach((darkModeButton) => {
  darkModeButton.addEventListener('click', () => {
    document.documentElement.dataset.theme === "dark" ? 
      document.documentElement.dataset.theme = "light" :
      document.documentElement.dataset.theme = "dark";
  });
})


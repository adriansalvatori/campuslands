
import './assets/styles/main.scss';

const menuButton = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});

const darkModeButton = document.querySelector('.dark-mode');
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
});
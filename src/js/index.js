// Разметка меню

import menuCardTpl from '../templates/menu-card.hbs';
import dishes from '../menu.json';

const menuContainer = document.querySelector('.js-menu');
const menuCardsMarkup = createDishCardsMarkup(dishes);

menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);

function createDishCardsMarkup(dishes) {
    return dishes.map(menuCardTpl).join('');
}

// Переключатель темы

const themeToggleBtn = document.querySelector('#theme-switch-toggle');
const changeBodyColor = document.querySelector('body');


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme-switch-toggle') === undefined) {
    localStorage.setItem('theme-switch-toggle', 'light-theme');
    
}

function setTheme() {
    changeBodyColor.classList.remove('dark-theme');
    changeBodyColor.classList.remove('light-theme');
    changeBodyColor.classList.add(localStorage.getItem('theme-switch-toggle'));

    localStorage.getItem('theme-switch-toggle') === 'light-theme' ? (themeToggleBtn.checked = false) : (themeToggleBtn.checked = true);
    
    
}

themeToggleBtn.addEventListener('change', function () {
    
    localStorage.setItem('theme-switch-toggle', (localStorage.getItem('theme-switch-toggle') === 'dark-theme') ? 'light-theme' : 'dark-theme');
   
    setTheme();
});

 setTheme();





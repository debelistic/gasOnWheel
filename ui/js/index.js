/* global document */
const mainNav = document.querySelector('.main_nav');
const hambugerMenu = document.querySelector('#hambuger_menu');

document.addEventListener('click', (event) => {
  if (event.target.id === 'hambuger_menu') {
    mainNav.classList.toggle('open');
    hambugerMenu.classList.toggle('change');
  } else {
    mainNav.classList.remove('open');
    hambugerMenu.classList.remove('change');
  }
});

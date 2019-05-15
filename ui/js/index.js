/* global document */
const mainNav = document.querySelector('.main_nav');
const hambugerMenu = document.querySelector('#hambuger_menu');
const signinForm = document.querySelector('.signin_form');
const signupForm = document.querySelector('.register_form');
const navUl = document.querySelector('.main_nav > ul');
const navLinks = navUl.querySelectorAll('.main_nav > ul li');

/**
 * active navigation menu
 */
for (let index = 0; index < navLinks.length; index += 1) {
  // eslint-disable-next-line func-names
  navLinks[index].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].classList.remove('active');
    this.className += ' active';
  });
}

/**
 * mobile menu
 */
document.addEventListener('click', (event) => {
  if (event.target.id === 'hambuger_menu') {
    mainNav.classList.toggle('open');
    hambugerMenu.classList.toggle('change');
  } else {
    mainNav.classList.remove('open');
    hambugerMenu.classList.remove('change');
  }
});


/**
 * form event listener
 */
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('signup')) {
    signinForm.classList.toggle('close_form');
    signupForm.classList.toggle('open_form');
  } else if (event.target.classList.contains('login_form')) {
    signinForm.classList.toggle('open_form');
  }
});

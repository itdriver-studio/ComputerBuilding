let total = +document.querySelector('.header__progressbar-num--end').innerHTML
let income = +document.querySelector('.header__progressbar-text--num').innerHTML
let scale = document.querySelector('.header__progressbar-scale');
let adaptiveMenu = document.querySelector('.nav__list-inner');
let burger = document.querySelector('.nav__list-menuimg');

scaleWidth = income / (total / 100);

scale.style.width = scaleWidth + '%';

burger.onclick = () => {
  adaptiveMenu.classList.toggle('nav__list-inner--adaptive')
}
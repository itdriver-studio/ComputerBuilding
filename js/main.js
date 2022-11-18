let total = +document.querySelector('.header__progressbar-num--end').innerHTML
let income = +document.querySelector('.header__progressbar-text--num').innerHTML
let scale = document.querySelector('.header__progressbar-scale');
let adaptiveMenu = document.querySelector('.nav__list-inner');
let burger = document.querySelector('.nav__list-menuimg');

scaleWidth = income / (total / 100);

scale.style.width = scaleWidth + '%';

burger.onclick = () => {
  adaptiveMenu.classList.toggle('nav__list-inner--adaptive')
  burger.classList.toggle('nav__list-menuimg--close')
}

let seconds = document.querySelector('#seconds');
let minutes = document.querySelector('#minutes');
let totalTime = 3599;

setInterval(() => {
  let m = Math.floor(totalTime / 60);
  let s = totalTime % 60;
  s = s < 10 ? "0" + s : s
  seconds.innerHTML = s;
  minutes.innerHTML = m;
  totalTime--;
}, 1000);
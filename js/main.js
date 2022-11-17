let total = +document.querySelector('.header__progressbar-num--end').innerHTML
let income = +document.querySelector('.header__progressbar-text--num').innerHTML
let scale = document.querySelector('.header__progressbar-scale');

console.log(total);
console.log(income);
scaleWidth = income / (total / 100);

scale.style.width = scaleWidth + '%';
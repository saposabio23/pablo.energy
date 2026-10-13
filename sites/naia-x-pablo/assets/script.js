window.onload = mobileWindow();

function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  console.log("mobile-vh", vh);
}


var $fadein = document.querySelector('.fadein');
var $tout = document.querySelector('.tout');
var $love = document.querySelector('#love');

function start(){
    $fadein.classList.add("fadeinoff");
    $tout.classList.add("plus")
}

$love.addEventListener('click', start);

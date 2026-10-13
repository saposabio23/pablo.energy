/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */
window.onload = mobileWindow();

function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);


/* -----------------------------------
THINGS
// -------------------------------------- */
var $top = document.querySelector('#abrir');
var $bottom = document.querySelector('.bottom');
var $windows = document.querySelector('.windows');

function openLetter() {
    $bottom.classList.add("paraAbajo");
    $windows.classList.add("normal");
}
$top.addEventListener('click', openLetter);



var $ocho = document.querySelector('#ocho');
var $firma = document.querySelector('.firma');

function showFirma() {
    $firma.classList.toggle("show");
}
$ocho.addEventListener('click', showFirma);

function removeFirma() {
    $firma.classList.remove("show");
}
$firma.addEventListener('click', removeFirma);
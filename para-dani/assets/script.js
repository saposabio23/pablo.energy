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
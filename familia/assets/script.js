const title = document.querySelector("h1");
const frase1 = document.getElementById("frase1");
const frase2 = document.getElementById("frase2");

var duracionTítulo = 400;

function hoverOnTitle() {
  frase1.classList.add("fadeIn");
  setTimeout(function () {
    frase2.classList.add("fadeOut");
  }, duracionTítulo);
}
title.addEventListener("mouseenter", hoverOnTitle);

function deshoverOnTitle() {
  frase2.classList.remove("fadeOut");
  setTimeout(function () {
    frase1.classList.remove("fadeIn");
  }, duracionTítulo);
}
title.addEventListener("mouseleave", deshoverOnTitle);

const info = document.querySelector(".info");
const fecha = document.getElementById("fecha");
const descripción = document.getElementById("descripción");

var duracionDescripción = 100;

function hoverOnInfo() {
  fecha.classList.add("fadeIn");
  setTimeout(function () {
    descripción.classList.add("fadeOut");
  }, duracionDescripción);
}
info.addEventListener("mouseenter", hoverOnInfo);

function deshoverOnInfo() {
  descripción.classList.remove("fadeOut");
  setTimeout(function () {
    fecha.classList.remove("fadeIn");
  }, duracionDescripción);
}
info.addEventListener("mouseleave", deshoverOnInfo);

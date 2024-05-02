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

const postal = document.querySelector(".postal");
const info = document.querySelector(".info");
const fecha = document.getElementById("fecha");
const descripción = document.getElementById("descripción");

window.onload = function () {
  postal.classList.add("postalVisible");
  setTimeout(function () {
    postal.classList.add("flipa");
  }, 50);
};

var duracionDescripción = 300;

// var isFlipping = false;
// console.log(isFlipping);

// function flipPostal() {
//   if (isFlipping == true) {
//     // nothing
//   }
//   if (isFlipping == false) {
//     isFlipping = true;
//     console.log(isFlipping);
//     postal.classList.add("flipa");
//     setTimeout(function () {
//       postal.classList.remove("flipa");
//       isFlipping = false;
//       console.log(isFlipping);
//     }, 1000);
//   }
// }
// postal.addEventListener("mouseenter", flipPostal);

function deshoverOnInfo() {
  descripción.classList.toggle("fadeOut");
  setTimeout(function () {
    fecha.classList.toggle("fadeIn");
  }, duracionDescripción);
}
postal.addEventListener("click", deshoverOnInfo);

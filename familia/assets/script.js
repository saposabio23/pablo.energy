const postal = document.querySelector(".postal");
const fecha = document.getElementById("fecha");
const imagen = document.getElementById("imagen");
const descripción = document.getElementById("descripción");

const info = document.querySelector(".info");
const texto = document.querySelector(".texto");

const añadir = document.querySelector(".añadir");
const form = document.querySelector(".form");
const cerrar = document.querySelector(".cerrar");

// NUMEROS
var mesHoy = new Date().toLocaleDateString("es-ES", {
  month: "numeric",
  month: "2-digit",
});
var numeroHoy = new Date().toLocaleDateString("es-ES", {
  day: "numeric",
  day: "2-digit",
});

var todayNumber = mesHoy + numeroHoy;
console.log("Today: " + todayNumber);

fetch("https://opensheet.elk.sh/1Bxgad2KTmIGuQ9Hnh9ma9NZ3QUEJw7DIcwwuvNxGe5g/1")
  .then((res) => res.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      var hoy = data[i];
      if (todayNumber === hoy.NUMEROS) {
        console.log("Fecha: " + hoy.DIA);
        console.log("Descripción: " + hoy.DESCRIPCION);
        console.log("Imagen: " + hoy.IMAGEN);

        if (hoy.AÑO == "") {
          imagen.remove();

          let empty = document.createElement("div");
          empty.id = "imagen";
          postal.prepend(empty);

          fecha.innerHTML = hoy.DIA;

          descripción.innerHTML =
            "El día de hoy no tiene imagen ni recuerdo. Puedes añadir un nuevo recuerdo desde el botón de abajo a la izquierda. Buen día family!";
        } else {
          fecha.innerHTML = hoy.FECHA;
          descripción.innerHTML = hoy.DESCRIPCION;
          imagen.src = hoy.IMAGEN;
          imagen.alt = hoy.DESCRIPCION;
        }
      }
    }
  });

// ANIMACIÓN INTRO
window.onload = function () {
  postal.classList.add("postalVisible");
  setTimeout(function () {
    postal.classList.add("flipa");
  }, 50);
};

// MUESTRA LA POSTAL
function clickOnPostal() {
  descripción.classList.toggle("fadeOut");
  imagen.classList.toggle("fadeIn");
}
postal.addEventListener("touchend", clickOnPostal);

// MUESTRA LA FORME
function showForm() {
  hideInfo();
  añadir.classList.add("fadeIn");
  form.classList.add("fadeOut");
}
añadir.addEventListener("click", showForm);

function hideForm() {
  añadir.classList.remove("fadeIn");
  form.classList.remove("fadeOut");
}
cerrar.addEventListener("click", hideForm);

// MUESTRA LA INFORMACIÓN
function showInfo() {
  hideForm();
  info.classList.add("fadeIn");
  texto.classList.add("fadeOut");
}
info.addEventListener("click", showInfo);

function hideInfo() {
  info.classList.remove("fadeIn");
  texto.classList.remove("fadeOut");
}
texto.addEventListener("click", hideInfo);

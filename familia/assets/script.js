const postal = document.querySelector(".postal");
const fecha = document.getElementById("fecha");
const imagen = document.getElementById("imagen");
const descripción = document.getElementById("descripción");

const info = document.querySelector(".info");
const texto = document.querySelector(".texto");

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
postal.addEventListener("click", clickOnPostal);

// MUESTRA LA INFORMACIÓN
function showTexto() {
  info.classList.add("fadeIn");
  texto.classList.add("fadeOut");
}
info.addEventListener("click", showTexto);

function showInfo() {
  info.classList.remove("fadeIn");
  texto.classList.remove("fadeOut");
}
texto.addEventListener("click", showInfo);

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
        console.log("Things for today: " + hoy.DIA);
        if (hoy.AÑO == "") {
          fecha.innerHTML = hoy.DIA;

          descripción.innerHTML =
            "El día de hoy no tiene imagen. Puedes añadir un nuevo recuerdo gracias a este <a href='https://docs.google.com/spreadsheets/d/1Bxgad2KTmIGuQ9Hnh9ma9NZ3QUEJw7DIcwwuvNxGe5g/edit?usp=sharing' target='_blank'>tablero</a>. Buen día family!";

          imagen.alt = "No se vé ninguna foto.";
        } else {
          fecha.innerHTML = hoy.FECHA;
          descripción.innerHTML = hoy.DESCRIPCION;
          imagen.src = hoy.IMAGEN;
          imagen.alt = hoy.DESCRIPCION;
        }
      }
    }
  });

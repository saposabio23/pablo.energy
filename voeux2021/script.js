//    request.open("get", "/voeux/data.json", true);


let $IMPBTN = document.querySelector(".fa-print");
let $MOUSE = document.querySelector("#mouse");
let $LNK = document.querySelector("#link");
let $IMP = document.querySelector("#imprimer");

const $TEXT = document.querySelector("#proverbe");
const $LEGENDE = document.querySelector("#auteur");

let $PROV = document.querySelector("#texte");
var $SUN = document.querySelector('#sun');
var $SKY= document.querySelector('#sky');


//BUTTONS APPEAR
onClickPrint= function(event){
  $LNK.classList.toggle("visible");
  $MOUSE.classList.toggle("visible");
}

$IMPBTN.addEventListener("click", onClickPrint)


//TEXTE CHANGE
function init() {
  loadJson()
    .then(function(data){
      var textes = data.liste;
      var rand = Math.floor(textes.length * Math.random())
      changeText(data.liste[rand]);
  });
}

function loadJson(){
  return new Promise(function(resolve, reject){
    var request = new XMLHttpRequest();
    request.onload = function() {
      console.log("Autres proverbes", request.responseText);
      resolve(JSON.parse(request.responseText));
    };
    request.onerror = function () {
      reject(request.response);
    };
    request.open("get", "data.json", true);
    request.send();
  })
}

function changeText(text) {
  $TEXT.innerHTML = text.proverbe
  $LEGENDE.innerHTML = text.auteur
  $IMP.innerHTML = text.url
}

init()


//SUN DOWNING ON SCROLL
function moveSun() {
  var style = getComputedStyle($SUN)
  var top = parseInt(style.top)
  $SUN.style.top = (top + 10) + "px"
}

document.addEventListener("scroll", moveSun);


//SKY DARKING ON SCROLL
var lum = 60;

var coul = 240;

function changeSky() {
  lum--;
  coul++;
  $SKY.style.background = "linear-gradient(hsl(240, 100%, 10%) 0%, hsl(240, 100%, " + lum  + "%) 100%)";
  var styleSky = $SKY.style.background
}

document.addEventListener("scroll", changeSky);

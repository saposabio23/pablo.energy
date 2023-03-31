console.log("hellos")

var grid = document.querySelector('.grid')
var object = document.querySelector('.object')
var hours = document.querySelector('#hours')

// var intro = document.querySelector('.intro')
// var enter = document.querySelector('.enter')

var outro = document.querySelector('.outro')
var restart = document.querySelector('.restart')
var replay = document.querySelector('.replay')
var play = document.querySelector('.calculs')

var nece = document.querySelector('#nece')
var lancer = document.querySelector('#lancer')

function onLancer(){
  nece.classList.add("hide")
  lancer.classList.remove("hide")
}
play.addEventListener("mouseenter", onLancer)

function outLancer(){
  nece.classList.remove("hide")
  lancer.classList.add("hide")
}
play.addEventListener("mouseleave", outLancer)


// function clickStart(){
//   intro.classList.add("startBack")
//   setTimeout(() => {
//     intro.style.display = "none";
//   }, "500"); 
// }
// enter.addEventListener("click", clickStart)

function clickRestart(){
  location.reload();
  return false;
}
restart.addEventListener("click", clickRestart)


function clickPlay(){
  outro.classList.remove("outroBack")
}
play.addEventListener("click", clickPlay)

function clickReplay(){
  outro.classList.add("outroBack")
}
replay.addEventListener("click", clickReplay)




var timeTotal = 0;
var moneyTotal = 0;

// function hoverRap(e){
//   e.target.classList.add("fondo");
//   setTimeout(() => {
//     e.target.classList.remove("fondo");
//   }, "100"); 
// }

// object.addEventListener("mouseenter", hoverRap)

function createHyundai() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Hyundai Jérémie"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/hyundai.jpg";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 3;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)
  
  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 700;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)
  
  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function create160() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "160"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/160.jpg";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 20;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createAlbert1() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Albert 1"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/albert1.jpeg";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 5;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 80;
  money.innerHTML = monex +"€"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createAlbert2() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Albert 2"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/albert2.jpg";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 5;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 5;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createAquarium() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Aquarium beaux-arts"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/aquarium.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0.5;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 20;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createArsloun() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Peinture Arsloun"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/arsloun.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 6;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createBonnet1() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Bonnets 1"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bonnet1.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = "?";
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createBonnet2() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Bonnets 2"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bonnet2.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = "?";
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createBonnet3() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Bonnets 3"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bonnet1.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = "?";
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createBizarre() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Truc bizarre"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bonnet3.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = "666";
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createBuste() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Buste au musée"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/buste.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1.5;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createBuzbu() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Buzludzha dur"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/buzbu.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 3;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createCafe() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Super café"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/cafe.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createCheval() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Cheval"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/cafe.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createDegrad() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Tag"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/degrad.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createDejeuner() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Deuj"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/deujener.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 15;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createDrapeau1() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Drapeau 1"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/drapeau1.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 6;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 63;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createDrapeau2() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Drapeau 2"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/drapeau2.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = .5;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createEglise() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Eglise"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/eglise.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 5;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createFlixbus() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Flixbus"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/Flixbus.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 45;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 100;
  money.innerHTML = monex +"€"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createGraff() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Graff"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/graff.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createJacuzzi() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Jacuzzi"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/jacuzzi.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createLivre() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Livre"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/livre.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createLumiere() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Lumiere"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/lumiere.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 4;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createMarta() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Baba Marta"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/marta.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 24;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 1;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createMonastere() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Monastere"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/monastere.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 4;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 12;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createMonnaie() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Monnaie"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/monnaie.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 1;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createPhotographe() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Photographe"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/photographe.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createPoisson() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Poisson"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/poisson.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 10;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createPomme() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Pomme"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/pomme.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 23;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}

function createPub() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Pub"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/pub.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 1;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createSaucisse() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Saucisse"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/saucisse.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 3;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 100;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createStatue() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Statue"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/statue.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


function createVoiture() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")
  
  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Voiture"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/voiture.JPG";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 4;
  time.innerHTML = timex +"h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = "?";
  money.innerHTML = monex +"лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
}


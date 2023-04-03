console.log("hellos")

var grid = document.querySelector('.grid')
var object = document.querySelector('.object')
var hours = document.querySelector('#hours')
var route = document.querySelector('#route')
var levax = document.querySelector('#levax')

var intro = document.querySelector('.intro')
var enter = document.querySelector('.enter')

var outro = document.querySelector('.outro')
var restart = document.querySelector('.restart')
var replay = document.querySelector('.replay')
var play = document.querySelector('.calculs')

var nece = document.querySelector('#nece')
var lancer = document.querySelector('#lancer')

var credits = document.querySelector('#credits')
var readme = document.querySelector('#readme')

/*************** CREDITS ****************/
function clickCred() {
  readme.classList.remove("hide")
  credits.style.opacity = 0;
}
credits.addEventListener("click", clickCred)


function removeCred() {
  readme.classList.add("hide")
  credits.style.opacity = "1";
}
readme.addEventListener("click", removeCred)

/*************** LANCER ****************/


function onLancer() {
  nece.classList.add("hide")
  lancer.classList.remove("hide")
}
play.addEventListener("mouseenter", onLancer)

function outLancer() {
  nece.classList.remove("hide")
  lancer.classList.add("hide")
}
play.addEventListener("mouseleave", outLancer)

function clickPlay() {
  route.innerHTML = timeTotal + " heures";
  levax.innerHTML = moneyTotal + " levas";
  outro.classList.remove("outroBack")
  jeremotor.play();
}
play.addEventListener("click", clickPlay)
play.addEventListener("click", clickPlay)

function clickRestart() {
  location.reload();
  return false;
}
restart.addEventListener("click", clickRestart)

function clickReplay() {
  outro.classList.add("outroBack")
  jeremotor.pause();
}
replay.addEventListener("click", clickReplay)


/*************** OBJECTS ****************/

var timeTotal = 0;
var moneyTotal = 0;

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
  imagen.src = "img/hyundai.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 3;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 700;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;

  magic.play();
  console.log(moneyTotal)
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
  imagen.src = "img/160.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 20;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/albert1.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 5;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 80;
  money.innerHTML = monex + "€"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/albert2.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 5;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 5;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/aquarium.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0.5;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 20;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/arsloun.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 6;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

}


function createBonnet1() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")

  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Bonnet 1"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bonnet1.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

}


function createBonnet2() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")

  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Bonnet 2"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bonnet2.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

}

function createBonnet3() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")

  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Bonnet 3"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bonnet3.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

}


function createBizarre() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")

  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Homme-chèvre"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/bizarre.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 666;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/buste.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1.5;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/buzbu.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 3;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/cafe.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/cheval.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/degrad.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

}

function createDejeuner() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")

  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Déjeuner"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/deujener.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 15;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/drapeau1.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 6;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 63;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/drapeau2.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = .5;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/eglise.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 5;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/Flixbus.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 45;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 100;
  money.innerHTML = monex + "€"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/graff.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/jacuzzi.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/livre.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/lumiere.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 4;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/marta.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 24;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 1;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

}


function createMonastere() {
  var newObject = document.createElement('div')
  newObject.classList.add("object")

  var divInfo = document.createElement('div')
  divInfo.classList.add("divInfo")

  var title = document.createElement("p");
  title.className = 'title';
  title.innerHTML = "Monastère de Rila"
  newObject.appendChild(title)

  var imagen = document.createElement("img");
  imagen.className = 'imagen';
  imagen.src = "img/monastere.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 4;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 12;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/monnaie.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 1;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/photographe.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/poisson.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 10;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/pomme.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 2;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 23;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/pub.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 0;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 1;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/saucisse.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 3;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 100;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/statue.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 1;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 2;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

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
  imagen.src = "img/voiture.png";
  newObject.appendChild(imagen)

  var time = document.createElement("span");
  time.className = 'hour';
  let timex = 4;
  time.innerHTML = timex + "h"
  divInfo.appendChild(time)

  var money = document.createElement("span");
  money.className = 'levas';
  let monex = 0;
  money.innerHTML = monex + "лв"
  divInfo.appendChild(money)

  grid.prepend(newObject)
  newObject.appendChild(divInfo)

  timeTotal += timex;
  moneyTotal += monex;
  hours.innerHTML = timeTotal;
  magic.play();

}


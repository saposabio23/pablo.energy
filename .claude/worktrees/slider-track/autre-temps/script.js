console.log("press espace pour lancer animation");

// document.body.style.cursor = 'none';

var $data = document.querySelector(".data")

var h = document.getElementById('h')
var hh = document.getElementById('hh')
var m = document.getElementById('m')
var mm = document.getElementById('mm')
var s = document.getElementById('s')
var ss = document.getElementById('ss')
var ms = document.getElementById('ms')
var msms = document.getElementById('msms')

var mots;

function loadJson(){
  return new Promise(function(resolve, reject){
    var request = new XMLHttpRequest();
    request.onload = function() {
      resolve(JSON.parse(request.responseText));
    };
    request.onerror = function () {
      reject(request.response);
    };
    request.open("get", "data.json", true);
    request.send();
  })
}

loadJson()
  .then(function(data){
    mots = data.mots;
    console.log(mots);
    init();
})

var letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

var pseudo_time = [-1,-1,-1,-1,-1,-1,-1,-1];

var goon = function(){
  pseudo_time[0]+=1;
  for (var i = 0; i < 5; i++) {
    if(pseudo_time[i]==letters.length-1){
      pseudo_time[i] = 0;
      pseudo_time[i+1] += 1;
    }
  }

  h.innerHTML = pseudo_time[7] >= 0 ? letters[pseudo_time[7]] : '·'
  hh.innerHTML = pseudo_time[6] >= 0 ? letters[pseudo_time[6]] : '·'
  m.innerHTML = pseudo_time[5] >= 0 ? letters[pseudo_time[5]] : '·'
  mm.innerHTML = pseudo_time[4] >= 0 ? letters[pseudo_time[4]] : '·'
  s.innerHTML = pseudo_time[3] >= 0 ? letters[pseudo_time[3]] : '·'
  ss.innerHTML = pseudo_time[2] >= 0 ? letters[pseudo_time[2]] : '·'
  ms.innerHTML = pseudo_time[1] >= 0 ? letters[pseudo_time[1]] : '·'
  msms.innerHTML = letters[pseudo_time[0]]

  mot = ''
  mot += pseudo_time[7] >= 0 ? letters[pseudo_time[7]] : ''
  mot += pseudo_time[6] >= 0 ? letters[pseudo_time[6]] : ''
  mot += pseudo_time[5] >= 0 ? letters[pseudo_time[5]] : ''
  mot += pseudo_time[4] >= 0 ? letters[pseudo_time[4]] : ''
  mot += pseudo_time[3] >= 0 ? letters[pseudo_time[3]] : ''
  mot += pseudo_time[2] >= 0 ? letters[pseudo_time[2]] : ''
  mot += pseudo_time[1] >= 0 ? letters[pseudo_time[1]] : ''
  mot += pseudo_time[0] >= 0 ? letters[pseudo_time[0]] : ''



  if (mots.includes(mot)){
    var nvmot= document.createElement("p");
    nvmot.className = "intro";
    nvmot.id = "nvmot";
    nvmot.innerHTML = mot + "&nbsp;";
    $data.appendChild(nvmot);
  }
}

function init(){
  var interval = setInterval(goon, 1);
}

// function mouseDown(e) {
//   e = e || window.event;
//   switch (e.which) {
//     case 1: break;
//     case 3:  e.preventDefault();
//   }
// }

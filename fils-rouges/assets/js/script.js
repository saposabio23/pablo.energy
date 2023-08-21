/* <video id="video" width="100%" height="100%" autoplay></video> */

// #video {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: calc(var(--vh, 1vh) * 100);
//     width: 100vw;
//     object-fit: cover;
// }

// var start = function () {
//     var video = document.getElementById('video'),
//         vendorUrl = window.URL || window.webkitURL;

//     if (navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(function (stream) {
//                 video.srcObject = stream;
//             }).catch(function (error) {
//                 console.log("Something went wrong!");
//             });
//     }
// }

// start();



var trous = document.querySelector('#trous')
var box1 = document.querySelector('.overlayg')
var box2 = document.querySelector('.overlayd')

function switchHoles(){
    box1.classList.toggle("show");
    box2.classList.toggle("show");
}

trous.addEventListener('click', switchHoles)


var filtre = document.querySelector('#filtre')

function switchFiltres() {
    var imagex = document.querySelectorAll('.imagex')
  for(let i = 0, max = imagex.length; i < max; i++){
    imagex[i].classList.toggle("filtre-nb");
  }
}
filtre.addEventListener('click', switchFiltres);



var close = document.querySelector('#close')
var options = document.querySelector('.options')

function closeOptions(){
    options.style.display = 'none';
}

close.addEventListener('click', closeOptions)


var lignes = document.querySelector('#lignes')
var line = document.querySelectorAll('.line')

function hideLine() {
  for(let i = 0, max = line.length; i < max; i++){
    line[i].classList.toggle("show");
  }
}
lignes.addEventListener('click', hideLine)
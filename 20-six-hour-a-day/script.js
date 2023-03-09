var $videoSKY= document.querySelector('.video');
var $video= document.querySelector('#video');

var rotate = false;
var runner;
var degrees = 0;

function start(){
    runner = setInterval(function(){
        degrees++;
        $videoSKY.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },50)
}

function stop(){
    clearInterval(runner);
}

function roration(){
    if (!rotate){
        rotate = true;
        start();
    } else {
        rotate = false;
        stop();
    }
}

window.addEventListener('mousedown', stop); 



window.onmousedown = function() {
    stop();
}

window.onmouseup = function() {
    start();
 }
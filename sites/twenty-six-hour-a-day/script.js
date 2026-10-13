/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */
window.onload = mobileWindow();

function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  console.log("VH on mobiles", vh);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);



/* -----------------------------------
YOUTUBE IFRAM
// -------------------------------------- */
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '100%',
     videoId: 'z53NGKDyy8Y',
     playerVars: {
       'playsinline': 0,
       'controls': 0,
       'showinfo': 0,
       'rel': 0
     }
   });
 }



 /* -----------------------------------
ROTATIONS
// -------------------------------------- */
var $rot= document.querySelector('.rot');
var $theme= document.querySelector('.theme');
var $round= document.querySelector('.round');

var rotate = false;
var runner;
var degrees = 0;

function start(){
    runner = setInterval(function(){
        degrees++;
        $rot.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },50)
    $round.classList.add("roundOn");
}

function stop(){
    clearInterval(runner);
}

function fingerIn() {
    stop();
    player.pauseVideo();
}

$theme.addEventListener("mousedown", fingerIn);
$theme.addEventListener("touchstart", fingerIn);


function fingerOut() {
    start();
    player.playVideo();
 }

$theme.addEventListener("mouseup", fingerOut);
$theme.addEventListener("touchend", fingerOut);

 // 2. This code loads the IFrame Player API code asynchronously.
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



 var $rot= document.querySelector('.rot');
 var $theme= document.querySelector('.theme');

var rotate = false;
var runner;
var degrees = 0;

function start(){
    runner = setInterval(function(){
        degrees++;
        $rot.style.webkitTransform = 'rotate(' + degrees + 'deg)';
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

const videoWaiting = document.getElementById("videoWaiting");
const videoPresenting = document.getElementById("videoPresenting");
const videoBlock = document.getElementById("videoBlock");
const playButton = document.getElementById("playButton");

videoWaiting.removeAttribute("controls");

function launchPresenation() {
  playButton.classList.add("hidden");
  videoBlock.classList.add("cursor-help");
  videoWaiting.classList.add("opacity-0");
  videoPresenting.play();
  setTimeout(function () {
    videoWaiting.classList.add("hidden");
  }, 1000);
}
playButton.addEventListener("click", launchPresenation);

function playPauseVideo() {
  if (videoPresenting.paused) {
    videoPresenting.play();
    videoBlock.classList.add("scale-105");
    setTimeout(function () {
      videoBlock.classList.remove("scale-105");
    }, 100);
  } else {
    videoPresenting.pause();
    videoBlock.classList.add("scale-105");
    setTimeout(function () {
      videoBlock.classList.remove("scale-105");
    }, 100);
  }
}
videoPresenting.addEventListener("click", playPauseVideo);

videoPresenting.addEventListener("ended", function () {
  // put another thing (youtube video?)
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playPauseVideo();
  }
});

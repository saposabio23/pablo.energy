/* -----------------------------------
WHO IS PABLO
-------------------------------------- */
function whoIsPablo() {
  var pabloIs = [
    "globettroter",
    "newspaper reader",
    "<i>chic</i> guy",
    "battery working with the sun",
    "spanish native",
    "big biker",
    "cave lover",
    "spanish native",
  ][Math.floor(Math.random() * 4)];
  isWhat.innerHTML =
    " also a <span id='isThis' class='cursor-pointer hover:text-[blue]' onclick='whoIsPablo()'>" +
    pabloIs +
    "</span>";
}

window.onload = function () {
  setTimeout(function () {
    whoIsPablo();
  }, 10000);
};

/* -----------------------------------
VIDEO STUFF
-------------------------------------- */
const videoWaiting = document.getElementById("videoWaiting");
const videoPresenting = document.getElementById("videoPresenting");
const videoPanel = document.getElementById("videoPanel");
const studioAd = document.getElementById("studioAd");
const subtitles = document.getElementById("subtitles");

videoWaiting.removeAttribute("controls");

function launchPresenation() {
  studioAd.classList.add("hidden");
  subtitles.classList.remove("hidden");
  videoPresenting.classList.add("cursor-pointer");
  videoWaiting.classList.add("brightness-[500]");
  videoWaiting.classList.add("opacity-0");
  videoPresenting.play();
  setTimeout(function () {
    videoPresenting.classList.remove("brightness-[500]");
    videoWaiting.classList.add("hidden");
  }, 1000);
}

studioAd.addEventListener("click", launchPresenation);

function playPauseVideo() {
  if (videoPresenting.paused) {
    videoPresenting.play();
  } else {
    videoPresenting.pause();
  }
}

// setTimeout(function () {
//   videoPresenting.classList.remove("scale-105");
// }, 100);

videoPresenting.addEventListener("click", playPauseVideo);

function pauseVideo() {
  videoPresenting.pause();
}

videoPresenting.addEventListener("ended", function () {
  // put another thing (youtube video?)
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playPauseVideo();
  }
  if (event.code === "Escape") {
    event.preventDefault();
    hideProjects();
  }
});

/* -----------------------------------
SEE MORE SECTION
-------------------------------------- */
const isWhat = document.getElementById("isWhat");
const noCurious = document.getElementById("noCurious");
const infoPanel = document.getElementById("infoPanel");
const moreInfo = document.getElementById("moreInfo");
const seeMore = document.getElementById("seeMore");
const contactUp = document.getElementById("contactUp");

function displayMore() {
  if (moreInfo.getAttribute("data-state") === "close") {
    window.scrollTo(0, 0);
    moreInfo.classList.replace("hidden", "grid");
    setTimeout(function () {
      moreInfo.classList.replace("opacity-0", "opacity-100");
    }, 200);
    seeMore.innerHTML = "read less";
    seeMore.classList.replace("text-[blue]", "text-[red]");
    noCurious.innerHTML = "it's enought :S";
    moreInfo.setAttribute("data-state", "open");
  } else if (moreInfo.getAttribute("data-state") === "open") {
    window.scrollTo(0, 0);
    moreInfo.classList.replace("opacity-100", "opacity-0");
    setTimeout(function () {
      moreInfo.classList.replace("grid", "hidden");
    }, 200);
    seeMore.innerHTML = "read more";
    seeMore.classList.replace("text-[red]", "text-[blue]");
    noCurious.innerHTML = "you are curious :)";
    moreInfo.setAttribute("data-state", "close");
  }
}

seeMore.addEventListener("click", displayMore);

/* -----------------------------------
SCREEN SAVER
-------------------------------------- */
var screensaver = document.getElementById("screensaver");

// window.onload = function () {
//   let time;
//   window.onload = resetTimer;
//   document.onmousemove = resetTimer;
//   document.touchstart = resetTimer;

//   function logout() {
//     // screensaver.classList.replace("hidden", "block");

//     placeImages();
//   }
//   function resetTimer() {
//     clearTimeout(time);
//     screensaver.innerHTML =
//       "<span class='text-3xl'>Here are some other stuffs I do or like to do:</span>";
//     // screensaver.classList.replace("block", "hidden");
//     time = setTimeout(logout, 1000);
//   }
// };

var delayStuff = 0;

function placeImages() {
  const moreThings = ["anthropocene.gif", "ketamina.png", "more-things.webp"];
  console.log(moreThings);
  moreThings.forEach((item) => {
    delayStuff++;
    console.log(delayStuff);

    var image = document.createElement("img");
    image.className = "w-[200px] absolute animateEntrance delay-" + delayStuff;
    image.src = "media/more/" + item;

    var x = Math.random() * window.screen.width - image.style.width;
    var y = Math.random() * window.screen.height - image.style.height;
    console.log("x:", x);
    console.log("y:", y);

    image.style.left = x + "px";
    image.style.top = y + "px";
    screensaver.appendChild(image);
  });
  delayStuff = 0;
}

/* -----------------------------------
WHO IS PABLO
-------------------------------------- */
function whoIsPablo() {
  var pabloIs = [
    "globettroter",
    "newspaper reader",
    "kind of sun battery",
    "big biker",
    "cave lover",
    "nunchaku practicer",
  ][Math.floor(Math.random() * 4)];
  isWhat.innerHTML =
    " also a <span id='isThis' class='cursor-pointer hover:text-[blue]' onclick='whoIsPablo()'>" +
    pabloIs +
    "</span>";
  // setTimeout(function () {
  //   whoIsPablo();
  // }, 10000);
}

window.onload = function () {
  setTimeout(function () {
    whoIsPablo();
  }, 10000);
  document
    .querySelector("marquee")
    .classList.replace("opacity-0", "opacity-100");
};

/* -----------------------------------
RANDOM PROJECTS
-------------------------------------- */
// function getMultipleRandom(arr, num) {
//   const shuffled = [...arr].sort(() => 0.5 - Math.random());

//   return shuffled.slice(0, num);
// }

// const arr = ['b', 'c', 'a', 'd'];
// console.log(getMultipleRandom(arr, 2)); // 👉️ ['a', 'c'];
// console.log(getMultipleRandom(arr, 3)); // 👉️ ['c', 'b', 'c']

/* -----------------------------------
VIDEO STUFF
-------------------------------------- */
const videoWaiting = document.getElementById("videoWaiting");
const videoPresenting = document.getElementById("videoPresenting");
const videoPanel = document.getElementById("videoPanel");
const studioAd = document.getElementById("studioAd");
const playButton = document.getElementById("playButton");
const subtitles = document.getElementById("subtitles");

videoWaiting.removeAttribute("controls");


function playPauseVideo() {
  if (videoPresenting.paused) {
    videoPresenting.play();
    boing();
  } else {
    videoPresenting.pause();
    boing();
  }
}

videoPresenting.addEventListener("click", playPauseVideo);

function boing() {
  videoPanel.classList.add("scale-110");
  setTimeout(function () {
    videoPanel.classList.remove("scale-110");
  }, 200);
}

function pauseVideo() {
  videoPresenting.pause();
}

videoPresenting.addEventListener("ended", function () {
  videoPanel.style.display = "none";
  document
    .getElementById("photoFinish")
    .classList.replace("hidden", "md:block");
});

function muteMedia() {
  if (videoPresenting.muted) {
    videoPresenting.muted = false;
  } else {
    videoPresenting.muted = true;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playPauseVideo();
  } else if (event.code === "KeyM") {
    event.preventDefault();
    muteMedia();
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

function displayMore() {
  if (moreInfo.getAttribute("data-state") === "close") {
    document.getElementById("life").scroll({
      behavior: "smooth",
    });

    moreInfo.classList.replace("hidden", "grid");
    setTimeout(function () {
      moreInfo.classList.replace("opacity-0", "opacity-100");
    }, 200);
    seeMore.innerHTML = "read less";
    seeMore.classList.replace("text-[green]", "text-[red]");
    noCurious.innerHTML = "it's enought :S";
    moreInfo.setAttribute("data-state", "open");
  } else if (moreInfo.getAttribute("data-state") === "open") {
    moreInfo.classList.replace("opacity-100", "opacity-0");
    setTimeout(function () {
      moreInfo.classList.replace("grid", "hidden");
    }, 200);
    seeMore.innerHTML = "read more";
    seeMore.classList.replace("text-[red]", "text-[green]");
    noCurious.innerHTML = "you are curious :)";
    moreInfo.setAttribute("data-state", "close");
  }
}

seeMore.addEventListener("click", displayMore);

/* -----------------------------------
NIGHT FUNCTION
-------------------------------------- */
var nighScreen = document.getElementById("nightScreen");

function isItNight() {
  var day = new Date();
  var hr = day.getHours();
  if (
    hr == 0 ||
    hr == 1 ||
    hr == 2 ||
    hr == 3 ||
    hr == 4 ||
    hr == 5 ||
    hr == 6
  ) {
    document.title = "Sleeping... 💤";
    nighScreen.classList.remove("hidden");

    document.getElementById("infoPanel").remove();
    document.getElementById("videoPanel").remove();
  }
  if (
    hr == 7 ||
    hr == 8 ||
    hr == 9 ||
    hr == 10 ||
    hr == 11 ||
    hr == 12 ||
    hr == 13 ||
    hr == 14 ||
    hr == 15 ||
    hr == 16 ||
    hr == 17 ||
    hr == 18 ||
    hr == 19 ||
    hr == 20 ||
    hr == 21 ||
    hr == 22 ||
    hr == 23
  ) {
  }
}

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

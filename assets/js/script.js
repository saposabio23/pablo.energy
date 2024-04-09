/* -----------------------------------
WHO IS PABLO
-------------------------------------- */
function whoIsPablo() {
  var pabloIs = [
    "globettroter",
    "newspaper reader",
    "<i>chic</i> guy",
    "kind of battery",
    "spanish native",
  ][Math.floor(Math.random() * 4)];
  isWhat.innerHTML =
    " also a <span id='isThis' class='cursor-pointer hover:opacity-30' onclick='whoIsPablo()'>" +
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
const playButton = document.getElementById("playButton");

videoWaiting.removeAttribute("controls");

function launchPresenation() {
  playButton.classList.add("hidden");
  videoPanel.classList.add("cursor-pointer");
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
    videoPanel.classList.add("scale-105");
    setTimeout(function () {
      videoPanel.classList.remove("scale-105");
    }, 100);
  } else {
    videoPresenting.pause();
    videoPanel.classList.add("scale-105");
    setTimeout(function () {
      videoPanel.classList.remove("scale-105");
    }, 100);
  }
}
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
    moreInfo.classList.replace("hidden", "grid");
    setTimeout(function () {
      moreInfo.classList.replace("opacity-0", "opacity-100");
    }, 200);
    seeMore.innerHTML = "read less";
    noCurious.innerHTML = "it's enought :S";
    moreInfo.setAttribute("data-state", "open");
  } else if (moreInfo.getAttribute("data-state") === "open") {
    moreInfo.classList.replace("opacity-100", "opacity-0");
    setTimeout(function () {
      moreInfo.classList.replace("grid", "hidden");
    }, 200);
    seeMore.innerHTML = "read more";
    noCurious.innerHTML = "you are curious :)";
    moreInfo.setAttribute("data-state", "close");
  }
}

seeMore.addEventListener("click", displayMore);

// /* -----------------------------------
// PROJECT GALLERY
// -------------------------------------- */
// function showProject(e) {
//   // MONTRER EN HAUT
//   window.scrollTo({ top: 0, behavior: "smooth" });

//   //CHACHE LES AUTRES PROJETS SI OUVERTS
//   var projets = document.querySelectorAll("#projects > div");
//   for (let i = 0, max = projets.length; i < max; i++) {
//     projets[i].classList.replace("flex", "hidden");
//   }

//   var thumbnails = document.querySelectorAll("#thumbnails > div");
//   for (let i = 0, max = thumbnails.length; i < max; i++) {
//     thumbnails[i].classList.remove("opacity-10");
//     thumbnails[i].classList.replace("opacity-10", "opacity-100");
//   }

//   // TEXT SUR LA VIDEO S'IL Y EN A
//   playButton.innerHTML = "💬";

//   // TEXT SUR LES TROIS POINTS
//   whoIsPablo();
//   contactUp.classList.replace("hidden", "block");
//   moreInfo.classList.replace("grid", "hidden");
//   moreInfo.classList.replace("opacity-100", "opacity-0");

//   // CACHE LE PROJET SÉLECTIONNÉ DES AUTRES

//   // MONTRE LE PROJET SEELCTIONNÉ
//   var projectSelected = e.getAttribute("data-project");
//   console.log(projectSelected);
//   document
//     .getElementById("project-" + projectSelected)
//     .classList.replace("hidden", "flex");

//   var thumbnailSelected = e.getAttribute("data-project");
//   document
//     .getElementById("mini-" + thumbnailSelected)
//     .classList.replace("opacity-100", "opacity-10");

//   // CHOSES DU PANEL
//   infoText.classList.add("hidden");
//   infoPanel.classList.replace("h-[calc(50vh-2rem)]", "h-[40px]");
//   videoPanel.classList.replace("h-[calc(50vh-2rem)]", "h-[40px]");
//   videoPanel.classList.remove("md:w-1/2");
//   videoWaiting.classList.replace("rounded-3xl", "rounded-xl");
//   videoPresenting.classList.replace("rounded-3xl", "rounded-xl");
// }

// // REMONTRE TOUS LES PROJETS
// function hideProjects(e) {
//   var elements = document.querySelectorAll("#projects > div");
//   for (let i = 0, max = elements.length; i < max; i++) {
//     elements[i].classList.replace("flex", "hidden");
//   }

//   // REMONTRE LE PROJET QUI ÉTAIT MONTRÉ
//   var thumbnails = document.querySelectorAll("#thumbnails > div");
//   for (let i = 0, max = thumbnails.length; i < max; i++) {
//     thumbnails[i].classList.remove("opacity-10");
//     thumbnails[i].classList.replace("opacity-10", "opacity-100");
//   }

//   // TEXT SUR LA VIDEO S'IL Y EN A
//   playButton.innerHTML = "(if you are a design studio,<br> please click here!)";
//   isWhat.innerHTML = "...";

//   // MONTRE LE "SEE MORE" QUAND PROJET OUVERT
//   contactUp.classList.replace("block", "hidden");
//   moreInfo.classList.replace("grid", "hidden");
//   moreInfo.classList.replace("opacity-100", "opacity-0");

//   // CHOSES DU PANEL
//   infoText.classList.remove("hidden");
//   infoPanel.classList.replace("h-[40px]", "h-[calc(50vh-2rem)]");
//   videoPanel.classList.replace("h-[40px]", "h-[calc(50vh-2rem)]");
//   videoPanel.classList.add("md:w-1/2");
//   videoWaiting.classList.replace("rounded-xl", "rounded-3xl");
//   videoPresenting.classList.replace("rounded-xl", "rounded-3xl");
// }

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

// 🎥 VIDEOS STUF

const videoWaiting = document.getElementById("videoWaiting");
const videoPresenting = document.getElementById("videoPresenting");
const videoPanel = document.getElementById("videoPanel");
const playButton = document.getElementById("playButton");

videoWaiting.removeAttribute("controls");

function launchPresenation() {
  playButton.classList.add("hidden");
  videoPanel.classList.add("cursor-help");
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
});

// SEE MORE
const isWhat = document.getElementById("isWhat");
const topPanel = document.getElementById("topPanel");
const infoPanel = document.getElementById("infoPanel");
const infoText = document.getElementById("infoText");
const seeMore = document.getElementById("seeMore");
const fog = document.getElementById("fog");

function displayMore() {
  if (infoPanel.getAttribute("data-state") === "close") {
    infoPanel.classList.replace("h-[calc(50vh-2rem)]", "h-fit");

    seeMore.classList.replace("absolute", "relative");
    seeMore.innerHTML = "see less";
    fog.classList.add("hidden");
    infoPanel.setAttribute("data-state", "open");
  } else if (infoPanel.getAttribute("data-state") === "open") {
    infoPanel.classList.replace("h-fit", "h-[calc(50vh-2rem)]");

    seeMore.classList.replace("relative", "absolute");
    seeMore.innerHTML = "see more";
    fog.classList.remove("hidden");
    infoPanel.setAttribute("data-state", "close");
  }
}

seeMore.addEventListener("click", displayMore);

// PTOJECTS STUFF
function showProject(e) {
  //CHACHE LES AUTRES PROJETS SI OUVERTS
  var projets = document.querySelectorAll("#projects > div");
  for (let i = 0, max = projets.length; i < max; i++) {
    projets[i].classList.replace("flex", "hidden");
  }

  var thumbnails = document.querySelectorAll("#thumbnails > div");
  for (let i = 0, max = thumbnails.length; i < max; i++) {
    thumbnails[i].classList.replace("hidden", "block");
  }

  // MONTRER EN HAUT
  window.scrollTo({ top: 0, behavior: "smooth" });

  // TEXT SUR LA VIDEO S'IL Y EN A
  playButton.innerHTML = "💬";

  // CACCHE LE "SEE MORE" QUAND PROJET OUVERT
  seeMore.classList.add("hidden");

  // TEXT SUR LES TROIS POINTS
  var randomColor = [
    "globettroter",
    "newspaper reader",
    "<i>chic</i> guy",
    "battery",
  ][Math.floor(Math.random() * 4)];
  isWhat.innerHTML = " also a " + randomColor;

  // CACHE LE PROJET SÉLECTIONNÉ DES AUTRES
  e.classList.add("hidden");

  // MONTRE LE PROJET SEELCTIONNÉ
  var projectSelected = e.getAttribute("data-project");
  console.log(projectSelected);
  document
    .getElementById("project-" + projectSelected)
    .classList.replace("hidden", "flex");

  // CHOSES DU PANEL
  infoText.classList.add("hidden");
  infoPanel.classList.replace("h-[calc(50vh-2rem)]", "h-[40px]");
  videoPanel.classList.replace("h-[calc(50vh-2rem)]", "h-[40px]");
  videoPanel.classList.remove("md:w-1/2");
  videoWaiting.classList.replace("rounded-3xl", "rounded-xl");
  videoPresenting.classList.replace("rounded-3xl", "rounded-xl");
  fog.classList.add("hidden");
}

// REMONTRE TOUS LES PROJETS
function hideProjects(e) {
  var elements = document.querySelectorAll("#projects > div");
  for (let i = 0, max = elements.length; i < max; i++) {
    elements[i].classList.replace("flex", "hidden");
  }

  // REMONTRE LE PROJET QUI ÉTAIT MONTRÉ
  var projectHided = e.getAttribute("data-project");
  document
    .getElementById("mini-" + projectHided)
    .classList.replace("hidden", "block");

  // TEXT SUR LA VIDEO S'IL Y EN A
  playButton.innerHTML = "(if you are a design studio,<br> please click here!)";
  isWhat.innerHTML = "...";

  // MONTRE LE "SEE MORE" QUAND PROJET OUVERT
  seeMore.classList.remove("hidden");

  // CHOSES DU PANEL
  infoText.classList.remove("hidden");
  infoPanel.classList.replace("h-[40px]", "h-[calc(50vh-2rem)]");
  videoPanel.classList.replace("h-[40px]", "h-[calc(50vh-2rem)]");
  videoPanel.classList.add("md:w-1/2");
  videoWaiting.classList.replace("rounded-xl", "rounded-3xl");
  videoPresenting.classList.replace("rounded-xl", "rounded-3xl");
  fog.classList.remove("hidden");
}

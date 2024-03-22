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

const seeMore = document.getElementById("seeMore");
const infoPanel = document.getElementById("infoPanel");
const fog = document.getElementById("fog");

const topPanel = document.getElementById("topPanel");

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
  pauseVideo();

  var projectSelected = e.getAttribute("data-project");
  console.log(projectSelected);
  document
    .getElementById("project-" + projectSelected)
    .classList.replace("hidden", "flex");

  infoPanel.classList.replace("h-[calc(50vh-2rem)]", "h-[60px]");
  videoPanel.classList.replace("h-[calc(50vh-2rem)]", "h-[60px]");

  videoPanel.classList.remove("md:w-1/2");

  topPanel.classList.add("md:mb-3");

  videoWaiting.classList.replace("rounded-3xl", "rounded-xl");
  videoPresenting.classList.replace("rounded-3xl", "rounded-xl");
}

// on cache la fenetre d'infos de tous les proejts
function hideProjects() {
  var elements = document.querySelectorAll(".projects > div");
  for (let i = 0, max = elements.length; i < max; i++) {
    document
      .querySelector(".projects > div")
      .classList.replace("flex", "hidden");
  }

  infoPanel.classList.replace("h-[60px]", "h-[calc(50vh-2rem)]");
  videoPanel.classList.replace("h-[60px]", "h-[calc(50vh-2rem)]");

  videoPanel.classList.add("md:w-1/2");

  topPanel.classList.remove("md:mb-3");

  videoWaiting.classList.replace("rounded-xl", "rounded-3xl");
  videoPresenting.classList.replace("rounded-xl", "rounded-3xl");
}

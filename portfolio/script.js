// REAR CAMERA PHONE

// CHANGE BACKGROUNDS

var currentObject = 0;

function nextObject() {
  currentObject++;
  if (currentObject < objects.length) {
    loadNext();
  } else {
    currentObject = 0;
    loadNext();
  }
}

function previousObject() {
  currentObject--;
  if (currentObject < 0) {
    currentObject = objects.length - 1;
    loadPrevious();
  } else {
    loadPrevious();
  }
}

function loadNext() {
  document.getElementById("rightArrow").classList.add("active");
  setTimeout(function () {
    document.getElementById("rightArrow").classList.remove("active");
  }, 200);

  document.getElementById("objectImage").classList.add("imageGo");
  document.getElementById("objectImage").classList.remove("imageMove");

  setTimeout(function () {
    document.getElementById("objectImage").classList.remove("imageGo");
    document.getElementById("objectImage").classList.add("hidden");
    updateObject();
    setTimeout(function () {
      document.getElementById("objectImage").classList.remove("hidden");
      setTimeout(function () {
        document.getElementById("objectImage").classList.add("imageMove");
      }, 100);
    }, 100);
  }, 100);
}

function loadPrevious() {
  document.getElementById("leftArrow").classList.add("active");
  setTimeout(function () {
    document.getElementById("leftArrow").classList.remove("active");
  }, 200);
  document.getElementById("objectImage").classList.remove("imageMove");

  setTimeout(function () {
    document.getElementById("objectImage").classList.add("imageGo");
    document.getElementById("objectImage").classList.add("hidden");
    updateObject();

    setTimeout(function () {
      document.getElementById("objectImage").classList.remove("hidden");
      setTimeout(function () {
        document.getElementById("objectImage").classList.remove("imageGo");

        document.getElementById("objectImage").classList.add("imageMove");
      }, 100);
    }, 100);
  }, 100);
}

function updateObject() {
  const currentItem = objects[currentObject];
  console.log(currentObject);
  document.getElementById("objectImage").src = "media/" + currentItem.image;
  document.getElementById("objectTitle").innerHTML = currentItem.title;

  document.getElementById("objectDescription").innerHTML =
    currentItem.description;
  document.getElementById("objectTags").innerHTML = currentItem.tags;
  document.getElementById("objectURL").href = currentItem.url;
  document.getElementById("objectURL").innerHTML = currentItem.url;

  const secret = document.querySelectorAll("header div");

  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.remove("selected");
  }

  console.log(currentObject);
  document.getElementById("block" + currentObject).classList.add("selected");
}

// HEADER BLOCKS LINKS
const secret = document.querySelectorAll("header div");

for (let i = 0, max = secret.length; i < max; i++) {
  secret[i].addEventListener("mousedown", function (e) {
    console.log(this.getAttribute("data-number"));
    currentObject = this.getAttribute("data-number") - 1;
    nextObject();
  });
}

// PLAY AND PAUSE DIAPORAMA
var input = document.getElementById("diapoBtn");

let intervalId = null;
let count = 0;

function stopDiapo() {
  clearInterval(intervalId);
  intervalId = null;
  input.style.backgroundImage = "url(play.svg)";
}
function diapoMode() {
  if (intervalId) {
    // If interval is running, stop it
    clearInterval(intervalId);
    intervalId = null;
    input.style.backgroundImage = "url(play.svg)";
  } else {
    // If interval is not running, start it
    intervalId = setInterval(nextObject, 3000);
    input.style.backgroundImage = "url(pause.svg)";
  }
}

// Toggle the interval
document.getElementById("diapoBtn").addEventListener("click", diapoMode);

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    console.log("lookoooo");
  } else if (event.code === "ArrowRight") {
    event.preventDefault();
    stopDiapo();
    nextObject();
  } else if (event.code === "ArrowLeft") {
    event.preventDefault();
    previousObject();
  }
});

window.addEventListener("load", (event) => {
  updateObject();
  document.getElementById("objectImage").classList.add("imageMove");
});

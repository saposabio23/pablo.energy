// CHANGE BACKGROUNDS

var currentObject = 0;

function nextObject() {
  document.getElementById("nextpro").style.opacity = 0;
  setTimeout(function () {
    document.getElementById("nextpro").style.opacity = 0.4;
  }, 1000);

  currentObject++;
  if (currentObject < objects.length) {
    loadNext();
  } else {
    currentObject = 0;
    loadNext();
  }
}

function previousObject() {
  document.getElementById("nextpro").style.opacity = 0;
  setTimeout(function () {
    document.getElementById("nextpro").style.opacity = 0.4;
  }, 1000);
  currentObject--;
  if (currentObject < 0) {
    currentObject = objects.length - 1;
    loadPrevious();
  } else {
    loadPrevious();
  }
}

var objectImage = document.querySelector(".thumbnail");

function loadNext() {
  document.getElementById("rightSide").classList.add("active");
  setTimeout(function () {
    document.getElementById("rightSide").classList.remove("active");
  }, 200);

  objectImage.classList.add("imageGo");
  objectImage.classList.remove("imageMove");

  setTimeout(function () {
    objectImage.classList.remove("imageGo");
    objectImage.classList.add("hidden");
    updateObject();
    setTimeout(function () {
      objectImage.classList.remove("hidden");
      setTimeout(function () {
        objectImage.classList.add("imageMove");
      }, 10);
    }, 300);
  }, 300);
}

function loadPrevious() {
  document.getElementById("leftSide").classList.add("active");
  setTimeout(function () {
    document.getElementById("leftSide").classList.remove("active");
  }, 200);
  objectImage.classList.remove("imageMove");

  setTimeout(function () {
    objectImage.classList.add("imageGo");
    objectImage.classList.add("hidden");
    updateObject();

    setTimeout(function () {
      objectImage.classList.remove("hidden");
      setTimeout(function () {
        objectImage.classList.remove("imageGo");
        objectImage.classList.add("imageMove");
      }, 10);
    }, 300);
  }, 300);
}

function updateObject() {
  const currentItem = objects[currentObject];
  document.body.style.backgroundColor = currentItem.color;

  // document.getElementById("objectImage").src = "media/" + currentItem.thumbnail;

  document.querySelector(".thumbnail").innerHTML = "";

  document.getElementById("nextpro").innerHTML = currentItem.text;

  currentItem.images.forEach((image) => {
    const imageElement = document.createElement("img");
    imageElement.src = "media/" + image;
    document.querySelector(".thumbnail").prepend(imageElement);

    imageElement.addEventListener("click", function (e) {
      imageElement.remove();
    });
  });

  document.getElementById("objectTitle").innerHTML = currentItem.title;

  document.getElementById("objectDescription").innerHTML =
    currentItem.description;

  // document.getElementById("objectDate").innerHTML = currentItem.date;

  document.getElementById("objectTags").innerHTML = "";

  currentItem.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.innerHTML = tag;
    document.getElementById("objectTags").appendChild(tagElement);
  });

  document.getElementById("objectURL").href = "https://" + currentItem.url;
  document.getElementById("objectURL").innerHTML = "www." + currentItem.url;

  const secret = document.querySelectorAll("header div");

  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.remove("selected");
  }
  document
    .querySelector('[data-number="' + currentObject + '"]')
    .classList.add("selected");
}

// Create INDEX

function createIndex() {
  for (let i = 0, max = objects.length; i < max; i++) {
    const objectIndex = document.createElement("div");
    objectIndex.setAttribute("data-number", i);

    const spanIndex = document.createElement("span");
    spanIndex.innerHTML = objects[i].title;

    objectIndex.appendChild(spanIndex);
    document.querySelector("header").appendChild(objectIndex);

    objectIndex.addEventListener("click", function (e) {
      currentObject = this.getAttribute("data-number") - 1;
      nextObject();
      stopDiapo();
    });
  }
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
    intervalId = setInterval(nextObject, 4000);
    input.style.backgroundImage = "url(pause.svg)";
  }
}

// Toggle the interval
document.getElementById("diapoBtn").addEventListener("click", diapoMode);

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    diapoMode();
  } else if (event.code === "ArrowRight") {
    event.preventDefault();
    stopDiapo();
    nextObject();
  } else if (event.code === "ArrowLeft") {
    event.preventDefault();
    stopDiapo();
    previousObject();
  }
});

const images = [
  "pablo-me.jpeg",
  "pablo-gijs.JPG",
  "pablo-dnsep.jpeg",
  "esadikoi-0.png",
  "esadikoi-1.png",
  "esadikoi-2.png",
  "esadikoi-3.png",
  "esadikoi-4.png",
  "esadikoi-5.png",
  "esadikoi-0.png",
  "esadikoi-5.png",
  "esadikoi-4.png",
  "esadikoi-2.png",
  "esadikoi-3.png",
  "nature-go-0.png",
  "nature-go-1.png",
  "nature-go-2.png",
  "nature-go-3.png",
  "nature-go-4.png",
  "collaborative-narratives-0.png",
  "collaborative-narratives-1.png",
  "collaborative-narratives-2.png",
  "collaborative-narratives-spreadsheet.png",
  "copa-alzar-intro.png",
  "copa-alzar-presentacion.png",
  "copa-alzar-galeria.png",
  "copa-alzar-vin.png",
  "copa-alzar-finale.png",
  "vendete.png",
  "vendete-cam.jpeg",
  "moreno-photos.png",
  "a-map-of-internet-2.png",
  "a-map-of-internet-3.png",
  "fils-rouges-2.png",
  "fils-rouges-1.png",
  "bg-0.png",
  "bg-1.png",
  "andrea-aguilera-rotate.png",
];

// Function to preload images
async function preloadImages(imageArray) {
  for (const src of imageArray) {
    try {
      const response = await fetch("media/" + src);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // console.log(`${src} loaded successfully`);
    } catch (error) {
      console.log(`Error loading ${src}: ${error.message}`);
    }
  }
}

window.addEventListener("load", (event) => {
  preloadImages(images);
  createIndex();
  updateObject();
  objectImage.classList.add("imageMove");
  setTimeout(function () {
    document.getElementById("nextpro").style.opacity = 0.4;
  }, 400);
});

/*
START PAGE
*/

var supertitlefront = document.querySelector(".supertitlefront");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("#infoStart").classList.add("display-infoStart");
  }, 5000);
});

supertitlefront.focus();

function lancerTout() {
  positionFootnote();
  document.querySelector(".tout").classList.add("appear");
  document.querySelector(".start").classList.add("inside");
  setTimeout(function () {
    document.querySelector(".tout").style.visibility = "visible";
    document.querySelector(".tout").classList.remove("appear");
    setTimeout(function () {
      document.querySelector(".start").style.display = "none";
    }, 5000);
  }, 2000);
}

supertitlefront.addEventListener("input", function () {
  const passw = "<h1>the web we want</h1>";

  var value = supertitlefront.value.toLowerCase();

  if (value.match(passw)) {
    lancerTout();
  } else {
    // document.querySelector('#infoStart').style.display = ('none')
  }
});

/*
SOMMAIRE PANEL
*/
var panel = document.querySelector(".panel");

var sommaireButton = document.getElementById("sommaireButton");
var notesButton = document.getElementById("notesButton");
var optionsButton = document.getElementById("optionsButton");

function displayPanel() {
  panel.classList.add("displayed");
}

function hidePanel() {
  panel.classList.remove("displayed");
}

function hideAllSide() {
  sommairePanel.style.display = "none";
  sommairePanel.classList.remove("showed");
  notesPanel.style.display = "none";
  notesPanel.classList.remove("showed");
  optionsPanel.style.display = "none";
  optionsPanel.classList.remove("showed");
  hideButtonsSide();

  document.getElementById("bookmarkPartieIOff").style.backgroundColor =
    "var(--color-white)";
  document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
    "var(--color-white)";
  document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
    "var(--color-white)";
  document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
    "var(--color-white)";

  sommaireButton.innerHTML = '<span class="headerTitles">🗂 Sommaire</span>';
  notesButton.innerHTML =
    '<span class="headerTitles">📝 Prises de notes</span>&nbsp;<span class="numbernotes">(0)</span></span>';
  optionsButton.innerHTML = '<span class="headerTitles">⚙️ Options</span>';

  updateNotes();
}

function hideButtonsSide() {
  sommaireButton.classList.remove("sommaireButtonOn");
  notesButton.classList.remove("sommaireButtonOn");
  optionsButton.classList.remove("sommaireButtonOn");
}

var sommairePanel = document.querySelector(".sommairePage");

function displaySommaire() {
  if (sommairePanel.classList.contains("showed")) {
    sommairePanel.style.display = "none";
    sommairePanel.classList.remove("showed");
    hideButtonsSide();
    hidePanel();
    sommaireButton.innerHTML = '<span class="headerTitles">🗂 Sommaire</span>';
    document.getElementById("bookmarkPartieIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
      "inherit";
  } else {
    hideAllSide();
    displayPanel();
    sommaireButton.classList.add("sommaireButtonOn");
    sommairePanel.style.display = "block";
    sommairePanel.classList.add("showed");
    sommaireButton.innerHTML =
      '<span class="headerTitles">✕ <small>[ESC]</small></span>';
    document.getElementById("bookmarkPartieIOff").style.backgroundColor =
      "var(--color-special-1)";
    document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
      "var(--color-special-1)";
    document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
      "var(--color-special-1)";
    document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
      "var(--color-special-1)";
  }
}

sommaireButton.addEventListener("click", displaySommaire);

/*
NOTES PANEL
*/
var notesPanel = document.querySelector(".notesPage");
var prisedenotes = document.querySelector(".prisedenotes");

function forceDisplayNotes() {
  hideAllSide();
  displayPanel();
  notesButton.classList.add("sommaireButtonOn");
  notesPanel.style.display = "block";
  notesPanel.classList.add("showed");
  notesButton.innerHTML =
    '<span class="headerTitles">✕ <small>[ESC]</small></span>';
  document.getElementById("bookmarkPartieIOff").style.backgroundColor =
    "var(--color-special-2)";
  document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
    "var(--color-special-2)";
  document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
    "var(--color-special-2)";
  document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
    "var(--color-special-2)";
}

function displaynotes() {
  if (notesPanel.classList.contains("showed")) {
    notesPanel.style.display = "none";
    notesPanel.classList.remove("showed");
    hideButtonsSide();
    hidePanel();
    notesButton.innerHTML =
      '<span class="headerTitles">📝 Prises de notes</span>&nbsp;<span class="numbernotes">(0)</span></span>';
    updateNotes();
    document.getElementById("bookmarkPartieIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
      "inherit";
  } else {
    hideAllSide();
    displayPanel();
    notesButton.classList.add("sommaireButtonOn");
    notesPanel.style.display = "block";
    notesPanel.classList.add("showed");
    notesButton.innerHTML =
      '<span class="headerTitles">✕ <small>[ESC]</small></span>';
    document.getElementById("bookmarkPartieIOff").style.backgroundColor =
      "var(--color-special-2)";
    document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
      "var(--color-special-2)";
    document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
      "var(--color-special-2)";
    document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
      "var(--color-special-2)";
  }
}

notesButton.addEventListener("click", displaynotes);

/*
OPTIONS PANEL
*/
var optionsPanel = document.querySelector(".optionsPage");

function displayoptions() {
  if (optionsPanel.classList.contains("showed")) {
    optionsPanel.style.display = "none";
    optionsPanel.classList.remove("showed");
    hideButtonsSide();
    hidePanel();
    optionsButton.innerHTML = '<span class="headerTitles">⚙️ Options</span>';
    document.getElementById("bookmarkPartieIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
      "inherit";
    document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
      "inherit";
  } else {
    hideAllSide();
    displayPanel();
    optionsButton.classList.add("sommaireButtonOn");
    optionsPanel.style.display = "block";
    optionsPanel.classList.add("showed");
    optionsButton.innerHTML =
      '<span class="headerTitles">✕ <small>[ESC]</small></span>';
    document.getElementById("bookmarkPartieIOff").style.backgroundColor =
      "var(--color-special-3)";
    document.getElementById("bookmarkPartieIIOff").style.backgroundColor =
      "var(--color-special-3)";
    document.getElementById("bookmarkPartieIIIOff").style.backgroundColor =
      "var(--color-special-3)";
    document.getElementById("bookmarkPartieFinOff").style.backgroundColor =
      "var(--color-special-3)";
  }
}

optionsButton.addEventListener("click", displayoptions);

addEventListener("keydown", (event) => {
  if (event.code == "Escape") {
    event.preventDefault(); // Prevent the default action
    hideAllSide();
    hidePanel();
  }
});

// Titles OBSERVER

let fromTop = 300;

function checkCibles() {
  var book = document.querySelector(".book");

  if (
    document.body.scrollTop > fromTop ||
    (document.documentElement.scrollTop > fromTop &&
      book.getAttribute("data-reading") === "partieIntro")
  ) {
    document.getElementById("ciblePartieIntro").style.display = "block";
  } else if (
    document.body.scrollTop > fromTop ||
    (document.documentElement.scrollTop > fromTop &&
      book.getAttribute("data-reading") === "partieI")
  ) {
    document.getElementById("ciblePartieI").style.display = "block";
  } else if (
    document.body.scrollTop > fromTop ||
    (document.documentElement.scrollTop > fromTop &&
      book.getAttribute("data-reading") === "partieII")
  ) {
    document.getElementById("ciblePartieII").style.display = "block";
  } else if (
    document.body.scrollTop > fromTop ||
    (document.documentElement.scrollTop > fromTop &&
      book.getAttribute("data-reading") === "partieIII")
  ) {
    document.getElementById("ciblePartieIII").style.display = "block";
  } else if (
    document.body.scrollTop > fromTop ||
    (document.documentElement.scrollTop > fromTop &&
      book.getAttribute("data-reading") === "partieFin")
  ) {
    document.getElementById("ciblePartieFin").style.display = "block";
  } else if (
    document.body.scrollTop < fromTop ||
    document.documentElement.scrollTop < fromTop
  ) {
    document.getElementById("ciblePartieIntro").style.display = "none";
    document.getElementById("ciblePartieI").style.display = "none";
    document.getElementById("ciblePartieII").style.display = "none";
    document.getElementById("ciblePartieIII").style.display = "none";
    document.getElementById("ciblePartieFin").style.display = "none";
  }
}

window.addEventListener("scroll", checkCibles);

var observerIa = new IntersectionObserver(function (entries) {
  if (
    !entries[0].isIntersecting &&
    book.getAttribute("data-reading") === "partieI"
  ) {
    document.getElementById("I-naissance-cible").style.display = "block";
    document.getElementById("I-vierge-cible").style.display = "none";
  } else {
    document.getElementById("I-naissance-cible").style.display = "none";
  }
});
observerIa.observe(document.getElementById("I-naissance"));

var observerIb = new IntersectionObserver(function (entries) {
  if (
    !entries[0].isIntersecting &&
    book.getAttribute("data-reading") === "partieI"
  ) {
    document.getElementById("I-vierge-cible").style.display = "block";
    document.getElementById("I-naissance-cible").style.display = "none";
  } else {
    document.getElementById("I-vierge-cible").style.display = "none";
  }
});
observerIb.observe(document.getElementById("I-vierge"));

var observerIIa = new IntersectionObserver(function (entries) {
  if (
    !entries[0].isIntersecting &&
    book.getAttribute("data-reading") === "partieII"
  ) {
    document.getElementById("II-adulte-cible").style.display = "block";
    document.getElementById("II-machine-cible").style.display = "none";
  } else {
    document.getElementById("II-adulte-cible").style.display = "none";
  }
});
observerIIa.observe(document.getElementById("II-adulte"));

var observerIIb = new IntersectionObserver(function (entries) {
  if (
    !entries[0].isIntersecting &&
    book.getAttribute("data-reading") === "partieII"
  ) {
    document.getElementById("II-machine-cible").style.display = "block";
    document.getElementById("II-adulte-cible").style.display = "none";
  } else {
    document.getElementById("II-machine-cible").style.display = "none";
  }
});
observerIIb.observe(document.getElementById("II-machine"));

var observerIIIa = new IntersectionObserver(function (entries) {
  if (
    !entries[0].isIntersecting &&
    book.getAttribute("data-reading") === "partieIII"
  ) {
    document.getElementById("III-autre-cible").style.display = "block";
  } else {
  }
});
observerIIIa.observe(document.getElementById("III-autre"));

var observerFinRef = new IntersectionObserver(function (entries) {
  if (
    !entries[0].isIntersecting &&
    book.getAttribute("data-reading") === "partieFin"
  ) {
    document.getElementById("cibleFinChange").innerHTML = "● Références";
  } else {
    document.getElementById("cibleFinChange").innerHTML = "● Conclusion";
  }
});
observerFinRef.observe(document.getElementById("fin-references"));

var observerFinCol = new IntersectionObserver(function (entries) {
  if (
    !entries[0].isIntersecting &&
    book.getAttribute("data-reading") === "partieFin"
  ) {
    document.getElementById("cibleFinChange").innerHTML = "● Colophon";
  } else {
    document.getElementById("cibleFinChange").innerHTML = "● Références";
  }
});
observerFinCol.observe(document.getElementById("fin-colophon"));

function openImage() {
  let image = document.querySelectorAll("img");
  image.forEach(function (image) {});
}

let figures = document.querySelectorAll(".footnote");

for (figure of figures) {
  figure.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("fullFigure");
  });
}

/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */
window.onload = mobileWindow();

function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  console.log("VH on mobiles", vh);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);


/* -----------------------------------
SHOW LYRICS
// -------------------------------------- */
var blocks = document.querySelector('#blocks');
var songContent = document.querySelector('.songContent');
var close = document.querySelector('#close');


function hideSong() {
  var songs = document.querySelectorAll('.songs');
  for (let i = 0, max = songs.length; i < max; i++) {
    songs[i].classList.remove("show");
  }
}

blocks.addEventListener('click', (event) => {
  hideSong()
  songContent.scrollTo({ top: 0, behavior: 'smooth' });

  songToLoad = event.target.id
  var thesong = document.getElementById(songToLoad);
  thesong.classList.add('show')
})



function checkUrl(e) {
  var video = document.getElementById('video');

  var urlNeeded = e.getAttribute('url');
  console.log(urlNeeded)

  video.src = 'https://www.youtube.com/embed/' + urlNeeded + '?autoplay=1'
}




var spreadsheet = document.querySelector('#spreadsheet');
var open = document.querySelector('#open');

function whatToDo() {
  if (spreadsheet.classList.contains("showspread")) {
    closeSpreadsheet()
  }
  else {
    openSpreadsheet()
  }
}

function openSpreadsheet() {
  spreadsheet.src = "https://docs.google.com/spreadsheets/d/1RfXl7_9w-Sz1luLR-E_XNnl5DG4kEL4grT9gPMiO1tI/edit#gid=0";
  spreadsheet.classList.add("showspread");
  setTimeout(function () {
    open.innerHTML = 'wait.'
    setTimeout(function () {
      open.innerHTML = 'wait..'
      setTimeout(function () {
        open.innerHTML = 'wait...'
        setTimeout(function () {
          spreadsheet.style.filter = "blur(0px)";
          open.innerHTML = 'close'
        }, 1000)
      }, 1000)
    }, 1000)
  }, 0)

}

function closeSpreadsheet() {
  spreadsheet.src = ""
  spreadsheet.removeAttribute("style")
  spreadsheet.classList.remove("showspread");
  open.innerHTML = 'add + lyrics'
}

open.addEventListener("click", whatToDo);

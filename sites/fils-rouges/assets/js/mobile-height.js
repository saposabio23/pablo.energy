/* -----------------------------------
IPHONE HEIGHT
calc(var(--vh, 1vh) * 100);
// -------------------------------------- */


function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // console.log("VH on mobiles", vh);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);
window.onload = mobileWindow();


function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector('.progress-bar').style.height = scrolled + "%";
}

document.onscroll = function() {scrollBar()};
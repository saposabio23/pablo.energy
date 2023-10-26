function init() {
  displayClock()
  isItNight()
}

function alertMail(){
  alert('Reach me at pablomoreno@proton.me 📮')
}

/* -----------------------------------
CLOCKKKK
-------------------------------------- */

function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.querySelector('.time').innerHTML = display;
  setTimeout(displayClock, 1000); 
}


// /* -----------------------------------
// SLEEP WEB
// -------------------------------------- */
function isItNight() {
  var nighScreen = document.getElementById("screen-night");
    var day = new Date();
    var hr = day.getHours();
    if ((hr == 0) || (hr == 1) || (hr == 2) || (hr == 3) || (hr == 4) || (hr == 5) || (hr == 6)){
        document.title = 'Sleeping... 💤';
        nighScreen.classList.add("itsnight")
        offAtNight()
    }
    if ((hr == 7) || (hr == 8) || (hr == 9) || (hr == 10) || (hr == 11) || (hr == 12) || (hr == 13) || (hr == 14) || (hr == 15) || (hr == 16) || (hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22) || (hr == 23)){
    }
  }

  function offAtNight() {
    document.querySelector('.nonight').remove();
   }


/* -----------------------------------
WEB ARCHIVE
-------------------------------------- */
const select = document.querySelector(".archive-selector");
const options = document.querySelectorAll(".archive-selector option");

// 1

select.addEventListener("change", function() {
  const url = this.options[this.selectedIndex].dataset.url;
  if(url) {
    location.href = url;
  }
});


// 2
for(const option of options) {
  const url = option.dataset.url;
  if(location.href.includes(url)) {
    option.setAttribute("selected", "");
    break;
  }
}


init()
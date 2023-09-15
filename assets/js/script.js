function init() {
  displayClock()
  isItNight()
}

/* -----------------------------------
CLOCKKKK
-------------------------------------- */

function displayClock(){
  var display = new Date().toLocaleTimeString();
  const timer = document.getElementById("timer");
  timer.innerHTML = display;
  setTimeout(displayClock, 1000); 
}


/* -----------------------------------
SCROLL MORE
-------------------------------------- */
var home = document.querySelector('.front')

function showMore(){
  home.classList.add('screen-up')
}


/* -----------------------------------
MAIL STUFF
-------------------------------------- */
var mailcopy = document.getElementById("mailcopied");

function copyMail() {
  navigator.clipboard
    .writeText('pablomoreno@proton.me')
    mailcopy.classList.add("mailappear")
      setTimeout(function(){
        mailcopy.classList.replace("mailappear", "mailexit")
      }, 1500);
}



// /* -----------------------------------
// BOTTOM OF THE PAGE
// -------------------------------------- */
var observer = new IntersectionObserver(function (entries) {
var meCircle = document.getElementById("meCircle");
  if (!entries[0].isIntersecting) {
    meCircle.classList.add("circling")
    console.log('out!')
  }
  else {
    meCircle.classList.remove("circling")
    console.log('inside!')


  }
});

observer.observe(document.querySelector("#app"))

// /* -----------------------------------
// RANDOM PRESENTATION
// -------------------------------------- */
// function whatNew() {
//   var frases = Array(
//     'wazzzzup?',
//     '⚡️⚡️⚡️',
//     'lot of ⚡️ 4 u',
//     'around the 🌏',
//     "how's the day?",
//     "have a good day!",)

//   const queHay = document.getElementById("whatNew");

//   var frase = frases[Math.floor(Math.random() * frases.length)];
//   console.log(frase)
//   queHay.innerHTML = frase;
// }


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



// /* -----------------------------------
// SOUNDS UI 
// -------------------------------------- */
const block = document.querySelectorAll('.block');
block.forEach(function(block) {
  block.addEventListener('mouseenter', function() {
    console.log();
    sound.play();

  });
});

// /* -----------------------------------
// SECRET SPACE
// -------------------------------------- */
const secret = document.querySelectorAll('.secret')


// here when the passwords matchs it show the hidden
function showSecrets() {
  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.add("show");
  }
}

// the password script
function clickPress(event) {
  if (event.key == "Enter") {
    const passw = "23";
    if (document.form.texte.value.match(passw)) {
      showSecrets()
      document.querySelector('#meCircle').classList.remove('badpass');
      document.querySelector('#meCircle').value = 'YES!';

    }
    else {
      document.querySelector('#meCircle').classList.add('badpass');
      document.querySelector('#meCircle').value = 'NOPE';
    }
  }
}


init()
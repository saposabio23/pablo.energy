function init() {
  isItNight()
}

function alertMail() {
  alert('📮 pablomoreno@proton.me')
}


function showList() {

  if (document.querySelector('.content').classList.contains('true')) {
    document.querySelector('#websites').innerHTML = 'websites'
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.image').style.display = 'block';
    document.querySelector('#bio').style.display = 'block';

    document.querySelector('.content').classList.remove('true')
  }

  else{
    document.querySelector('.content').style.display = 'block';
    document.querySelector('.image').style.display = 'none';
    document.querySelector('#websites').innerHTML = '[close]';

    document.querySelector('.content').classList.add('true')

  }
}

// /* -----------------------------------
// SLEEP WEB
// -------------------------------------- */
function isItNight() {
  var nighScreen = document.getElementById("screen-night");
  var day = new Date();
  var hr = day.getHours();
  if ((hr == 0) || (hr == 1) || (hr == 2) || (hr == 3) || (hr == 4) || (hr == 5) || (hr == 6)) {
    document.title = 'Sleeping... 💤';
    nighScreen.classList.add("itsnight")
    offAtNight()
  }
  if ((hr == 7) || (hr == 8) || (hr == 9) || (hr == 10) || (hr == 11) || (hr == 12) || (hr == 13) || (hr == 14) || (hr == 15) || (hr == 16) || (hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22) || (hr == 23)) {
  }
}

function offAtNight() {
  document.querySelector('.night').remove();
}


/* -----------------------------------
WEB ARCHIVE
-------------------------------------- */
const select = document.querySelector(".archive-selector");
const options = document.querySelectorAll(".archive-selector option");

// 1

select.addEventListener("change", function () {
  const url = this.options[this.selectedIndex].dataset.url;
  if (url) {
    location.href = url;
  }
});


// 2
for (const option of options) {
  const url = option.dataset.url;
  if (location.href.includes(url)) {
    option.setAttribute("selected", "");
    break;
  }
}


// /* -----------------------------------
// SECRET SPACE
// -------------------------------------- */
const secret = document.querySelectorAll('.secret')


// here when the passwords matchs it show the hidden
function showSecrets() {
  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.add("slow");
  }
}

function removeSecrets() {
  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.remove("slow");
  }
}

// the password script
function clickPress(event) {
  if (event.key == "Enter") {
    const passw = "23";
    if (document.form.texte.value.match(passw)) {
      document.querySelector('#password').value = '🎩';
      showSecrets()
      showList()
    }
    else {
      document.querySelector('#password').value = '💔';
      removeSecrets()
      // hideList()
    }
  }
}



init()
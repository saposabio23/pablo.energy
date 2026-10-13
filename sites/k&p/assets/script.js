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


/* --------------LOGO TURN------------- */

function newList(event) {
    event.target.classList.add("activated");
}

var $prim = document.querySelector('#prim');
function prim() {
    $prim.classList.add("prim");
}
$prim.addEventListener('click', prim);

var $sec = document.querySelector('#sec');
function sec() {
    $sec.classList.add("sec");
}
$sec.addEventListener('click', sec);

var $ter = document.querySelector('#ter');
function ter() {
    $ter.classList.add("ter");
}
$ter.addEventListener('click', ter);

var $quar = document.querySelector('#quar');
function quar() {
    $quar.classList.add("quar");
}
$quar.addEventListener('click', quar);

var $quin = document.querySelector('#quin');
var $me = document.querySelector('#me');
var $cir = document.querySelector('.circleBase');

function quin() {
    $quin.classList.add("quin");
    setTimeout(function(){
        $me.classList.add("me");
        $cir.classList.add("colorborder");
    }, 2000);
}
$quin.addEventListener('click', quin);

/* --------------PASSW------------- */
var $enquin = document.querySelector('.enter');

function clickPress(event) {
    if (event.key == "Enter") {
        var passw0 = "landlord";
        var passw1 = "Landlord";
        var passw2 = "the landlord";
        var passw3 = "The landlord";
        var passw4 = "THE LANDLORD";
        var passw5 = "LANDLORD";
        if(document.form.texte.value.match(passw0)) { 
            document.querySelector('.enter').classList.add("please");
        }
        else if (document.form.texte.value.match(passw1)) {
            document.querySelector('.enter').classList.add("please");
        }
        else if (document.form.texte.value.match(passw2)) {
            document.querySelector('.enter').classList.add("please");
        }
        else if (document.form.texte.value.match(passw3)) {
            document.querySelector('.enter').classList.add("please");
        }
        else if (document.form.texte.value.match(passw4)) {
            document.querySelector('.enter').classList.add("please");
        }
        else if (document.form.texte.value.match(passw5)) {
            document.querySelector('.enter').classList.add("please");
        }
        else { 
            document.querySelector('.enter').classList.add("quit");
            document.querySelector('#texte').classList.add("hide");
            setTimeout(function(){
                window.location.reload();
            }, 1000);
        }
    }
}



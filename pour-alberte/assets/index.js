
/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */

function mobileWindow() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);


/* -----------------------------------
MOON
// -------------------------------------- */


function setMoon(source) {
    document.getElementById('moon').innerHTML = source;
}
function getMoonPhase(year, month, day) {
    var c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }
    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; //jd is total days elapsed
    jd /= 29.5305882; //divide by the moon cycle
    b = parseInt(jd); //int(jd) -> b, take integer part of jd
    jd -= b; //subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); //scale fraction from 0-8 and round
    if (b >= 8) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }


    // 0 => New Moon 37.5 [show circle, hide rect]
    // 1 => Waxing Crescent Moon 50.5 [show circle, hide rect]
    // 2 => Quarter Moon //translateX(50%), [display rect, hide circle]
    // 3 => Waxing Gibbous Moon 70.5 [show circle, hide rect]
    // 4 => Full Moon [hide circle and rect]
    // 5 => Waning Gibbous Moon, -15.5 [show circle, hide rect]
    // 6 => Last Quarter Moon //transform: translateX(-50%) [display rect, hide circle]
    // 7 => Waning Crescent Moon 30.5 [show circle, hide rect]

    return b;
}

let launchMoon = function () {

    let d = new Date();
    let i = 0;

    let phase = getMoonPhase(d.getFullYear(), d.getMonth() + 1, d.getDate() + i)
    i += 4

    console.log(phase)

    if (phase == 0) {
        var source = "🌑"
        setMoon(source)
    }

    if (phase == 1) {
        var source = "🌒";
        setMoon(source)
    }
    if (phase == 2) {
        var source = "🌓";
        setMoon(source)
    }
    if (phase == 3) {
        var source = "🌔";
        setMoon(source)
    }
    if (phase == 4) {
        var source = "🌕";
        setMoon(source)
    }
    if (phase == 5) {
        var source = "🌖";
        setMoon(source)
    }
    if (phase == 6) {
        var source = "🌗";
        setMoon(source)
    }
    if (phase == 7) {
        var source = "🌘";
        setMoon(source)
    }
};

launchMoon();



/* -----------------------------------
QUESTION
// -------------------------------------- */

function firstQuestion() {
    document.querySelector('.first').style.display = 'none';
}

function secondQuestion() {
    document.querySelector('.second').style.display = 'none';
}

function thirdQuestion() {
    document.querySelector('.question').style.display = 'none';
    // document.querySelector('body').style.overflow = 'scroll';
}

function badAwnser() {
    window.location.href = 'https://en.wikipedia.org/wiki/April_16';
}


/* -----------------------------------
ACTIVIITIES
// -------------------------------------- */

function hideIt(element) {
    element.classList.toggle('op0')
}



/* -----------------------------------
PROVERBS
// -------------------------------------- */

// PROVERBS
const quotes = [
    '"NO BIKE - NO LIFE"',
    '"All 4 the STYRKE"',
    '"A DAY: icecream and sunset"'
];

let currentIndex = 0;

function changeQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    document.getElementById("quote").innerText = quotes[currentIndex];
}


/* -----------------------------------
MUSIC
// -------------------------------------- */

const audio = new Audio('media/embrujada.mp3');
const button = document.getElementById('audioButton');

let isPlaying = false;

button.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        button.textContent = 'play';
    } else {
        audio.play();
        button.textContent = 'pause';
    }
    isPlaying = !isPlaying;
});

// Optional: Reset button when audio ends
audio.addEventListener('ended', () => {
    isPlaying = false;
    button.textContent = 'play';
});




/* -----------------------------------
IMAGES FULLSCRENNE
// -------------------------------------- */

const frames = document.querySelectorAll('.frame');

frames.forEach(frame => {
    frame.addEventListener('click', () => {
        frame.classList.toggle('fullscreen');
    });
});
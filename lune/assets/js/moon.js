console.log("🌙")

function favicon(source) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = "assets/emojis/" + source;
    document.getElementsByTagName('head')[0].appendChild(link);
}

var night = document.querySelector('.night')
var texte = document.querySelector('#texte')

function setMoon(source, text) {
    var moon = document.createElement("img");
    moon.className = 'moon';
    moon.src = "assets/emojis/" + source;
    texte.innerHTML = text;
    night.appendChild(moon)
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

let callback = function () {

    let d = new Date();
    let i = 0;

    let phase = getMoonPhase(d.getFullYear(), d.getMonth() + 1, d.getDate() + i)
    i += 4

    console.log(phase)

    if (phase == 0) {
        var source = "new.png"
        var text = "Bientôt il y aura une nouvelle lune";
        favicon(source)
        setMoon(source, text)
    }

    if (phase == 1) {
        var source = "wax-crescent.png";
        var text = "Ce soir la lune sera croissante";
        favicon(source)
        setMoon(source, text)
    }
    if (phase == 2) {
        var source = "first-quarter.png";
        var text = "Ce soir la lune sera à moitié pleine";
        favicon(source)
        setMoon(source, text)
    }
    if (phase == 3) {
        var source = "wax-gibbous.png";
        var text = "Ce soir la lune sera gibbeuse croissante";
        favicon(source)
        setMoon(source, text)
    }
    if (phase == 4) {
        var source = "full.png";
        var text = "Ce soir la lune sera à rabord";
        favicon(source)
        setMoon(source, text)
    }
    if (phase == 5) {
        var source = "wan-gibbous.png";
        var text = "Ce soir la lune sera gibbeuse décroissante";
        favicon(source)
        setMoon(source, text)
    }
    if (phase == 6) {
        var source = "last-quarter.png";
        var text = "Ce soir la lune sera à moitié vide";
        favicon(source)
        setMoon(source, text)
    }
    if (phase == 7) {
        var source = "assets/img/wan-crescent.png";
        var text = "Ce soir la lune sera décroissante";
        favicon(source)
        setMoon(source, text)
    }
};

callback();



var info = document.querySelector('.info')

function showInfo() {
    if (info.classList.contains("opening")) {
        info.classList.remove("opening")
        info.classList.add("closing")
    }
    else {
        info.classList.add("opening")
        info.classList.remove("closing")
    }
}

document.body.addEventListener("click", showInfo)
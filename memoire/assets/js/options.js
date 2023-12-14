
// /* -----------------------------------
// FULLSCRENE MODE
// -------------------------------------- */
var fullscreenbtn = document.querySelector('.fullscreen');

function toggleFullscreen(elem) {
    elem = elem || document.documentElement;

    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        document.querySelector('.fullscreen').innerHTML = 'Sortir du plein écran';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        document.querySelector('.fullscreen').innerHTML = 'Plein écran';
    }
}

fullscreenbtn.addEventListener('click', function () {
    toggleFullscreen();
});


// /* -----------------------------------
// DARK MODE
// -------------------------------------- */

isDarkMode = false;

function isItNight() {
    var day = new Date();
    var hr = day.getHours();
    if ((hr == 21) || (hr == 22) || (hr == 23) || (hr == 0) || (hr == 1) || (hr == 2) || (hr == 3) || (hr == 4) || (hr == 5) || (hr == 6)) {
        switchTheme()
    }
    if ((hr == 7) || (hr == 8) || (hr == 9) || (hr == 10) || (hr == 11) || (hr == 12) || (hr == 13) || (hr == 14) || (hr == 15) || (hr == 16) || (hr == 17) || (hr == 18) || (hr == 19) || (hr == 20)) {
    }
}

// isItNight()



function switchTheme() {

    if (isDarkMode == false) {
        var styleSheet = document.createElement("style")
        styleSheet.innerText = ":root{ --color-white: #313131;  --color-black: white; --color-secondary: #646464;--color-special-1: #59697d;--color-special-2: #59771b;--color-special-3: #572557;"
        document.head.appendChild(styleSheet)

        isDarkMode = true;

        document.querySelector('.switcher').innerHTML = 'Changer au thème clair';
    }


    else if (isDarkMode == true) {
        var styleSheet = document.createElement("style")
        styleSheet.innerText = ":root{ --color-white: white;  --color-black: black; --color-secondary: #c4c2bc; --color-highlight: darkorchid;--color-special-1: lightsteelblue;--color-special-2: yellowgreen;--color-special-3: violet;"
        document.head.appendChild(styleSheet)

        isDarkMode = false;

        document.querySelector('.switcher').innerHTML = 'Changer au thème sombre';
    }

}


// /* -----------------------------------
// FONT SIZE ADJSUT
// -------------------------------------- */
var actualSize = 20;
var actualLineHeight = 26;

function changeFontSize(delta) {
    actualSize += delta
    actualLineHeight += delta
    document.body.style.fontSize = actualSize + "px";
    document.body.style.lineHeight = actualLineHeight + "px";
}

function increaseFontSize() {
    changeFontSize(2);
}

function decreaseFontSize() {
    changeFontSize(-2);
}

function resetFontSize() {
    actualSize = 20;
    actualLineHeight = 26;
    changeFontSize(0)
}


// /* -----------------------------------
// RELOAD SITE
// -------------------------------------- */

function reloadSite() {
    window.location.reload();
}
document.getElementById('reload').addEventListener('click', reloadSite)


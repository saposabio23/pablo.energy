console.log("%cGlace sans tain, par Pablo Moreno. 2021. pablomoreno@pm.me", "color: blue; font-size: 10px; background-color:white;");

// Footnote anchor highlighting

let anchors = document.querySelectorAll('.footnote-anchor');

for (anchor of anchors) {
    anchor.addEventListener('mouseover', e => {
        let footnote = document.querySelector(`[data-footnote='${e.currentTarget.dataset.anchor}']`);
        footnote.classList.add('highlight');

        e.currentTarget.classList.add('highlight-text');
    });
    anchor.addEventListener('mouseout', e => {
        e.stopPropagation();
        let footnote = document.querySelector(`[data-footnote='${e.currentTarget.dataset.anchor}']`);
        footnote.classList.remove('highlight');
        e.currentTarget.classList.remove('highlight-text');

    });
}

let footnotes = document.querySelectorAll('.footnote');

for (footnote of footnotes) {
    footnote.addEventListener('mouseover', e => {
        let anchor = document.querySelector(`[data-anchor='${e.currentTarget.dataset.footnote}']`);
        anchor.classList.add('highlight-text');
    });
    footnote.addEventListener('mouseout', e => {
        e.stopPropagation();
        let anchor = document.querySelector(`[data-anchor='${e.currentTarget.dataset.footnote}']`);
        anchor.classList.remove('highlight-text');
    });
}


/*
Scrollbar line
*/
function scrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector('.progressbar').style.height = scrolled + "%";
}

document.onscroll = function () { scrollBar() };

/*
Fullscreen mode
*/
//////////////// FULLSCREEN BTN ///////////////////////
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
        document.querySelector('.fullscreen').innerHTML = 'X';
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
        document.querySelector('.fullscreen').innerHTML = '⇱';
    }
}

fullscreenbtn.addEventListener('click', function () {
    toggleFullscreen();
});


/*
INCREASE/DECREASE font-size
*/
var actual = 100;

function changeFontSize(delta) {
    actual += delta
    document.body.style.fontSize = actual + "%";
    console.log(actual)
}

function increaseFontSize() {
    changeFontSize(10);
}

function decreaseFontSize() {
    changeFontSize(-10);
}

function resetFontSize() {
    actual = 100;
    console.log(actual)
    changeFontSize(0)

}
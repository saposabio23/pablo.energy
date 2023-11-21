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
// function scrollBar() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.querySelector('.progressbar').style.height = scrolled + "%";
// }

// document.onscroll = function () { scrollBar() };

/*
OPTIONS PANEL
*/
var optionsPanel = document.querySelector('.optionsPage')

function displayoptions() {
    if (optionsPanel.classList.contains('showed')) {
        optionsPanel.style.display = ('none');
        optionsPanel.classList.remove('showed');
    }

    else {
        optionsPanel.style.display = ('block');
        optionsPanel.classList.add('showed')
    }
}

document.getElementById('optionsButton').addEventListener('click', displayoptions)



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


/*
INCREASE/DECREASE font-size
*/
var actualSize = 18;
var actualLineHeight = 24;

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
    actualSize = 18;
    actualLineHeight = 24;
    changeFontSize(0)
}

/*
Mouse over OPTIONS
*/
document.getElementById('optionsButton').addEventListener('mouseenter', function () {
    document.querySelector('.bookPageRight').classList.add('reduireRight')
});

document.getElementById('optionsButton').addEventListener('mouseleave', function () {
    document.querySelector('.bookPageRight').classList.remove('reduireRight')
});

document.getElementById('sommaireButton').addEventListener('mouseenter', function () {
    document.querySelector('.bookPageLeft').classList.add('reduireLeft')
});

document.getElementById('sommaireButton').addEventListener('mouseleave', function () {
    document.querySelector('.bookPageLeft').classList.remove('reduireLeft')
});


/*
SOMMAIRE PANEL
*/
var sommairePanel = document.querySelector('.sommairePage')

function displaySommaire() {
    if (sommairePanel.classList.contains('showed')) {
        sommairePanel.style.display = ('none');
        sommairePanel.classList.remove('showed');
    }

    else {
        sommairePanel.style.display = ('block');
        sommairePanel.classList.add('showed')
    }
}

document.getElementById('sommaireButton').addEventListener('click', displaySommaire)




/*
NOTES PANEL
*/
var notesPanel = document.querySelector('.notesPage')

function displaynotes() {
    if (notesPanel.classList.contains('showed')) {
        notesPanel.style.display = ('none');
        notesPanel.classList.remove('showed');
    }

    else {
        notesPanel.style.display = ('block');
        notesPanel.classList.add('showed')
    }
}

document.getElementById('notesButton').addEventListener('click', displaynotes)

document.querySelector('.notifNotes').addEventListener('click', () => {
    notesPanel.classList.remove('showed');
    displaynotes()
})


// Function to get the Selected Text
function getSelectedText() {
    var selectedText = '';

    // window.getSelection
    if (window.getSelection) {
        selectedText = window.getSelection();
    }
    // document.getSelection
    else if (document.getSelection) {
        selectedText = document.getSelection();
    }
    // document.selection
    else if (document.selection) {
        selectedText =
            document.selection.createRange().text;
    } else return;
    // To write the selected text into the textarea

    let notesPrise = document.createElement("textarea");
    notesPrise.setAttribute('contenteditable', 'true')
    notesPrise.className = 'littleNote';
    notesPrise.innerHTML = selectedText;
    
    let deleteNote = document.createElement("div");
    deleteNote.className = 'pointer';
    deleteNote.innerHTML = '<img src="assets/img/delete.png">';
    
    let reachNote = document.createElement("div");
    reachNote.className = 'pointer';
    reachNote.innerHTML = '<img src="assets/img/reach.png">';
    
    notesPrise.prepend(deleteNote);
    notesPrise.prepend(reachNote);

    notesPanel.appendChild(notesPrise);

    deleteNote.addEventListener('click', () => {
        notesPrise.remove()
    })
    
}

function highlightSelection() {
    var userSelection = window.getSelection().getRangeAt(0);
    var safeRanges = getSafeRanges(userSelection);
    for (var i = 0; i < safeRanges.length; i++) {
        highlightRange(safeRanges[i]);
    }
}

function highlightRange(range) {
    var newNode = document.createElement("div");
    newNode.setAttribute(
        "style",
        "background-color:  var(--color-borders); display: inline;"
    );
    range.surroundContents(newNode);
}

function getSafeRanges(dangerous) {
    var a = dangerous.commonAncestorContainer;
    // Starts -- Work inward from the start, selecting the largest safe range
    var s = new Array(0), rs = new Array(0);
    if (dangerous.startContainer != a) {
        for (var i = dangerous.startContainer; i != a; i = i.parentNode) {
            s.push(i);
        }
    }
    if (s.length > 0) {
        for (var i = 0; i < s.length; i++) {
            var xs = document.createRange();
            if (i) {
                xs.setStartAfter(s[i - 1]);
                xs.setEndAfter(s[i].lastChild);
            } else {
                xs.setStart(s[i], dangerous.startOffset);
                xs.setEndAfter((s[i].nodeType == Node.TEXT_NODE) ? s[i] : s[i].lastChild);
            }
            rs.push(xs);
        }
    }

    // Ends -- basically the same code reversed
    var e = new Array(0), re = new Array(0);
    if (dangerous.endContainer != a) {
        for (var i = dangerous.endContainer; i != a; i = i.parentNode) {
            e.push(i);
        }
    }
    if (e.length > 0) {
        for (var i = 0; i < e.length; i++) {
            var xe = document.createRange();
            if (i) {
                xe.setStartBefore(e[i].firstChild);
                xe.setEndBefore(e[i - 1]);
            } else {
                xe.setStartBefore((e[i].nodeType == Node.TEXT_NODE) ? e[i] : e[i].firstChild);
                xe.setEnd(e[i], dangerous.endOffset);
            }
            re.unshift(xe);
        }
    }

    // Middle -- the uncaptured middle
    if ((s.length > 0) && (e.length > 0)) {
        var xm = document.createRange();
        xm.setStartAfter(s[s.length - 1]);
        xm.setEndBefore(e[e.length - 1]);
    } else {
        return [dangerous];
    }

    // Concat
    rs.push(xm);
    response = rs.concat(re);

    // Send to Console
    return response;
}

addEventListener("keydown", (event) => {
    if (event.code == 'KeyN') {
        document.querySelector('.notifNotes').classList.add('animateNotifNotes')
        setTimeout(() => {
            document.querySelector('.notifNotes').classList.remove('animateNotifNotes')
        }, 4000);

        highlightSelection()
        getSelectedText()
        window.getSelection().removeAllRanges()
        notesPanel.scrollTop = notesPanel.scrollHeight;
    }
});


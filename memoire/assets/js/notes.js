
/*
FOOT NOTES
¡*/


let anchors = document.querySelectorAll('.footnote-anchor');
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

/*
SAVE NOTESSS
*/
function rsizeTxt() {

    // Targets all textareas with class "txta"
    let textareas = document.querySelectorAll('.txta'),
        hiddenDiv = document.createElement('div'),
        content = null;

    // Adds a class to all textareas
    for (let j of textareas) {
        j.classList.add('txtstuff');
    }

    // Build the hidden div's attributes

    // The line below is needed if you move the style lines to CSS
    // hiddenDiv.classList.add('hiddendiv');

    // Add the "txta" styles, which are common to both textarea and hiddendiv
    // If you want, you can remove those from CSS and add them via JS
    hiddenDiv.classList.add('txta');

    // Add the styles for the hidden div
    // These can be in the CSS, just remove these three lines and uncomment the CSS
    hiddenDiv.style.display = 'none';
    hiddenDiv.style.whiteSpace = 'pre-wrap';
    hiddenDiv.style.wordWrap = 'break-word';

    // Loop through all the textareas and add the event listener
    for (let i of textareas) {
        (function (i) {
            // Note: Use 'keyup' instead of 'input'
            // if you want older IE support
            i.addEventListener('input', function () {

                // SCROLL TO  BOTTOM (but need to be on last child!)
                // document.querySelector('.prisedenotes').scrollIntoView({ behavior: "smooth", block: "end" });


                // Append hiddendiv to parent of textarea, so the size is correct
                i.parentNode.appendChild(hiddenDiv);

                // Remove this if you want the user to be able to resize it in modern browsers
                i.style.resize = 'none';

                // This removes scrollbars
                i.style.overflow = 'hidden';

                // Every input/change, grab the content
                content = i.value;

                // Add the same content to the hidden div

                // This is for old IE
                content = content.replace(/\n/g, '<br>');

                // The <br ..> part is for old IE
                // This also fixes the jumpy way the textarea grows if line-height isn't included
                hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

                // Briefly make the hidden div block but invisible
                // This is in order to read the height
                hiddenDiv.style.visibility = 'hidden';
                hiddenDiv.style.display = 'block';
                i.style.height = hiddenDiv.offsetHeight + 'px';

                // Make the hidden div display:none again
                hiddenDiv.style.visibility = 'visible';
                hiddenDiv.style.display = 'none';


            });
        })(i);
    }
}

var noteNumber = 1;

function updateNotes() {
    // UPDATE NUMBER OF NOTES
    let noteNumberInner = document.querySelectorAll('.numbernotes');

    listNote = noteNumber - 1;

    for (let numbers of noteNumberInner) {
        numbers.innerHTML = ("(" + listNote + ")")
    }

}


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


    // CREATE INDICATION NEAR TEXT
    let notesNumber = document.createElement("span");
    notesNumber.innerHTML = '← Nº' + noteNumber;
    notesNumber.className = ('littleNote');


    if (book.getAttribute("data-reading") === "partieI") {
        document.getElementById('partieI').appendChild(notesNumber);
    }
    else if (book.getAttribute("data-reading") === "partieII") {
        document.getElementById('partieII').appendChild(notesNumber);

    }
    else if (book.getAttribute("data-reading") === "partieIII") {
        document.getElementById('partieIII').appendChild(notesNumber);

    }
    else if (book.getAttribute("data-reading") === "partieFin") {
        document.getElementById('partieFin').appendChild(notesNumber);
    }

    else if (book.getAttribute("data-reading") === "partieIntro") {
        document.getElementById('partieIntro').appendChild(notesNumber);

    }

    var elDistanceToTop = window.getSelection().getRangeAt(0).getBoundingClientRect().top + window.scrollY;

    notesNumber.style.top = (elDistanceToTop + "px")



    // WRITE NOTE ON THE SIDE
    let notesCopy = document.createElement("div");
    notesCopy.className = 'notesCopy';

    let notesCopyHeader = document.createElement("div");
    notesCopyHeader.className = 'notesCopyHeader';

    let notesNumberSaved = document.createElement("span");
    notesNumberSaved.innerHTML = 'Note n°' + noteNumber;
    notesCopyHeader.appendChild(notesNumberSaved);


    if (book.getAttribute("data-reading") === "partieI") {
        quellePartie = 'Partie I'
    }
    else if (book.getAttribute("data-reading") === "partieII") {
        quellePartie = 'Partie II'
    }
    else if (book.getAttribute("data-reading") === "partieIII") {
        quellePartie = 'Partie III'

    }
    else if (book.getAttribute("data-reading") === "partieFin") {
        quellePartie = 'Conclusion';
    }
    else if (book.getAttribute("data-reading") === "partieIntro") {
        quellePartie = 'Avant-propos';
    }

    let notesPartie = document.createElement("span");
    notesPartie.innerHTML = quellePartie;

    notesCopyHeader.appendChild(notesPartie);

    notesCopy.appendChild(notesCopyHeader);

    let notesRemarqueeSaved = document.createElement("p");
    notesRemarqueeSaved.className = "notesCopySelection"
    notesRemarqueeSaved.innerHTML = '"' + selectedText + '"';
    notesCopy.appendChild(notesRemarqueeSaved);

    let notesEcrite = document.createElement("textarea");
    notesEcrite.className = "txta"
    notesEcrite.setAttribute('contenteditable', 'true')
    notesEcrite.setAttribute('placeholder', 'Écrivez...')
    notesCopy.appendChild(notesEcrite);

    prisedenotes.appendChild(notesCopy);

    noteNumber++;
    updateNotes()

    forceDisplayNotes()
    rsizeTxt()

    notesEcrite.focus();
    setTimeout(function () {
        notesEcrite.value = '';
    }, 1)

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
        "background-color:  var(--color-special-2); display: inline; color: var(--color-black);"
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
    if (event.altKey && event.code == 'KeyN') {
        highlightSelection()
        getSelectedText()
        window.getSelection().removeAllRanges()
        // var objDiv = document.getElementById("your_div");
        notesPanel.scrollTop = notesPanel.scrollHeight;
        tooltip.style.display = 'none';
    }
});


// TOOLTIP

var tooltip = document.getElementById('tooltip');
var sel = window.getSelection();
var rel1 = document.createRange();
rel1.selectNode(document.getElementById('cal1'));
var rel2 = document.createRange();
rel2.selectNode(document.getElementById('cal2'));
window.addEventListener('mouseup', function () {
    if (!sel.isCollapsed) {
        // debugger;
        var r = sel.getRangeAt(0).getBoundingClientRect();
        var rb1 = rel1.getBoundingClientRect();
        var rb2 = rel2.getBoundingClientRect();
        tooltip.style.top = (r.bottom - rb2.top) * 100 / (rb1.top - rb2.top) + 'px'; //this will place ele below the selection
        tooltip.style.left = (r.left - rb2.left) * 100 / (rb1.left - rb2.left) + 'px'; //this will align the right edges together

        //code to set content

        tooltip.style.display = 'block';
    }
});
window.addEventListener('mousedown', function (e) {

    tooltip.style.display = 'none';
});


function hideTooltip() {
    tooltip.classList.add('hiddenHard')
}



// DONLWOAD TXT

// when document is ready

function save() {
    var body = document.createElement('body');

    let notesCopy = document.querySelectorAll('.notesCopy');
    notesCopy.forEach(function (notesCopy) {
        var contentNoteID = notesCopy.querySelector('span').innerHTML;
        console.log(contentNoteID)

        var contentNote = notesCopy.querySelector('.notesCopySelection').innerHTML;
        console.log(contentNote)

        var contentCommentaire = notesCopy.querySelector('textarea').value;
        console.log(contentCommentaire)

        var quellePartie = document.querySelector('.book').getAttribute('data-reading');
        console.log(quellePartie)


        var textBlock = document.createElement('div');
        textBlock.className = ('block');
        var textHeader = document.createElement("div");

        var textNoteID = document.createElement("h4");
        textNoteID.innerText = contentNoteID;


        if (book.getAttribute("data-reading") === "partieI") {
            quellePartie = 'Partie I'
        }
        else if (book.getAttribute("data-reading") === "partieII") {
            quellePartie = 'Partie II'
        }
        else if (book.getAttribute("data-reading") === "partieIII") {
            quellePartie = 'Partie III'

        }
        else if (book.getAttribute("data-reading") === "partieFin") {
            quellePartie = 'Conclusion';
        }
        else if (book.getAttribute("data-reading") === "partieIntro") {
            quellePartie = 'Avant-propos';
        }

        let notesPartie = document.createElement("span");
        notesPartie.innerHTML = quellePartie;

        var textNote = document.createElement("p");
        textNote.innerText = contentNote;
        var textCommentaire = document.createElement("p");
        textCommentaire.innerText = contentCommentaire;

        textHeader.appendChild(textNoteID);
        textHeader.appendChild(notesPartie);
        textBlock.appendChild(textHeader);
        textBlock.appendChild(textNote);
        textBlock.appendChild(textCommentaire);


        body.appendChild(textBlock);
    });

    data = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Le Web que l’on fait ✍︎ - NOTES</title><style>body{font-family: sans-serif; margin: 30px 50px;}header {max-width: 450px;background-color: white;}header p {margin: 10px auto;max-width: 450px;line-height: 24px;}header h1 {margin: 10px 0;}h4{color: darkorchid;margin: 0;}.block{border-radius: 10px;max-width: 450px;margin: 10px 0;background-color: rgba(210, 210, 210, 0.44);padding: 15px;font-size: 16px;line-height: 24px; border: 1px solid gray;}.block div {display: flex;justify-content: space-between;padding: 0 5px;}.block span {opacity: 0.4;}.block p:nth-child(2) {background-color: white;padding: 10px;border-radius: 10px;margin: 10px 0;}</style></head>' + '<header><p>Titre:Le Web que l’on fait ✍︎<br>L’importance d’imaginer et concevoir des espaces web faits-mains pour re-exploiter les mondes digitales</p><p>Auteur: Pablo Moreno (pablomoreno@proton.me)</p></header>' + body.innerHTML + '</html>';

    var c = document.createElement("a");
    c.download = "Le Web que l’on fait ✍︎ - NOTES.html";

    var t = new Blob([data], {
        type: "text/plain"
    });
    c.href = window.URL.createObjectURL(t);
    c.click();

    alert("Notes téléchargées.")
}

downloadTxt.addEventListener('click', save);

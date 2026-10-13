var book = document.querySelector('.book')


var partieIntro = document.getElementById('partieIntro')
var partieI = document.getElementById('partieI')
var partieII = document.getElementById('partieII')
var partieIII = document.getElementById('partieIII')
var partieFin = document.getElementById('partieFin')

var notesPartieIntro = document.getElementById('notesPartieIntro')
var notesPartieI = document.getElementById('notesPartieI')
var notesPartieII = document.getElementById('notesPartieII')
var notesPartieIII = document.getElementById('notesPartieIII')
var notesPartieFin = document.getElementById('notesPartieFin')

var commencerLaLecture = document.getElementById('commencerLaLecture')
var bookmarkPartieI = document.getElementById('bookmarkPartieI')
var bookmarkPartieII = document.getElementById('bookmarkPartieII')
var bookmarkPartieIII = document.getElementById('bookmarkPartieIII')
var bookmarkPartieFin = document.getElementById('bookmarkPartieFin')

var bookmarkPartieIOff = document.getElementById('bookmarkPartieIOff')
var bookmarkPartieIIOff = document.getElementById('bookmarkPartieIIOff')
var bookmarkPartieIIIOff = document.getElementById('bookmarkPartieIIIOff')
var bookmarkPartieFinOff = document.getElementById('bookmarkPartieFinOff')

function positionFootnote() {

    let footnotes = document.querySelectorAll('.footnote');

    for (footnote of footnotes) {
        number = footnote.getAttribute('data-footnote');
        // console.log(number)

        let anchor = document.querySelector(`[data-anchor='${number}']`);
        // console.log(anchor)

        var elDistanceToTop = anchor.getBoundingClientRect().top + window.scrollY;
        // console.log(elDistanceToTop)

        footnote.style.top = (elDistanceToTop + "px")
    }

}

function hideCibles() {
    document.getElementById("ciblePartieIntro").style.display = ('none')
    document.getElementById("ciblePartieI").style.display = ('none')
    document.getElementById("ciblePartieII").style.display = ('none')
    document.getElementById("ciblePartieIII").style.display = ('none')
    document.getElementById("ciblePartieFin").style.display = ('none')

    window.scrollTo({ top: 0, behavior: 'smooth' })

}

// CHANGING PAGES
function lecturePartieIntro() {
    // console.log('SHOW INTRO')
    book.setAttribute('data-reading', 'partieIntro')


    document.querySelector('.sommairePartieIntro').classList.add('indexSelected')
    document.querySelector('.sommairePartieI').classList.remove('indexSelected')
    document.querySelector('.sommairePartieII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieIII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieFin').classList.remove('indexSelected')
    partieIntro.style.display = ('block');
    partieI.style.display = ('none');
    partieII.style.display = ('none');
    partieIII.style.display = ('none');
    partieFin.style.display = ('none');

    notesPartieIntro.style.display = ('block');
    notesPartieI.style.display = ('none');
    notesPartieII.style.display = ('none');
    notesPartieIII.style.display = ('none');
    notesPartieFin.style.display = ('none');

    bookmarkPartieI.style.display = ('flex');
    bookmarkPartieII.style.display = ('flex');
    bookmarkPartieIII.style.display = ('flex');
    bookmarkPartieFin.style.display = ('flex');

    bookmarkPartieIOff.style.display = ('none');
    bookmarkPartieIIOff.style.display = ('none');
    bookmarkPartieIIIOff.style.display = ('none');
    bookmarkPartieFinOff.style.display = ('none');

    book.classList.remove('book-3-4')
    book.classList.remove('book-2-4')
    book.classList.remove('book-1-4')
    book.classList.remove('book-Full')

    positionFootnote()

    hideCibles()


}

function lecturePartieI() {
    // console.log('SHOW PARTIE1')
    book.setAttribute('data-reading', 'partieI')



    document.querySelector('.sommairePartieIntro').classList.remove('indexSelected')
    document.querySelector('.sommairePartieI').classList.add('indexSelected')
    document.querySelector('.sommairePartieII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieIII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieFin').classList.remove('indexSelected')

    partieIntro.style.display = ('none');
    partieI.style.display = ('block');
    partieII.style.display = ('none');
    partieIII.style.display = ('none');
    partieFin.style.display = ('none');

    notesPartieIntro.style.display = ('none');
    notesPartieI.style.display = ('block');
    notesPartieII.style.display = ('none');
    notesPartieIII.style.display = ('none');
    notesPartieFin.style.display = ('none');

    bookmarkPartieI.style.display = ('none');
    bookmarkPartieII.style.display = ('flex');
    bookmarkPartieIII.style.display = ('flex');
    bookmarkPartieFin.style.display = ('flex');

    bookmarkPartieIOff.style.display = ('block');
    bookmarkPartieIIOff.style.display = ('none');
    bookmarkPartieIIIOff.style.display = ('none');
    bookmarkPartieFinOff.style.display = ('none');

    book.classList.add('book-3-4')
    book.classList.remove('book-2-4')
    book.classList.remove('book-1-4')
    book.classList.remove('book-Full')

    positionFootnote()

    hideCibles()

}


function lecturePartieII() {
    // console.log('SHOW PARTIE2')
    book.setAttribute('data-reading', 'partieII')


    document.querySelector('.sommairePartieIntro').classList.remove('indexSelected')
    document.querySelector('.sommairePartieI').classList.remove('indexSelected')
    document.querySelector('.sommairePartieII').classList.add('indexSelected')
    document.querySelector('.sommairePartieIII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieFin').classList.remove('indexSelected')

    partieIntro.style.display = ('none');
    partieI.style.display = ('none');
    partieII.style.display = ('block');
    partieIII.style.display = ('none');
    partieFin.style.display = ('none');

    notesPartieIntro.style.display = ('none');
    notesPartieI.style.display = ('none');
    notesPartieII.style.display = ('block');
    notesPartieIII.style.display = ('none');
    notesPartieFin.style.display = ('none');

    bookmarkPartieI.style.display = ('none');
    bookmarkPartieII.style.display = ('none');
    bookmarkPartieIII.style.display = ('flex');
    bookmarkPartieFin.style.display = ('flex');

    bookmarkPartieIOff.style.display = ('block');
    bookmarkPartieIIOff.style.display = ('block');
    bookmarkPartieIIIOff.style.display = ('none');
    bookmarkPartieFinOff.style.display = ('none');

    book.classList.add('book-3-4')
    book.classList.add('book-2-4')
    book.classList.remove('book-1-4')
    book.classList.remove('book-Full')
    positionFootnote()

    hideCibles()


}

function lecturePartieIII() {
    // console.log('SHOW PARTIE3')
    book.setAttribute('data-reading', 'partieIII')

    document.querySelector('.sommairePartieIntro').classList.remove('indexSelected')
    document.querySelector('.sommairePartieI').classList.remove('indexSelected')
    document.querySelector('.sommairePartieII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieIII').classList.add('indexSelected')
    document.querySelector('.sommairePartieFin').classList.remove('indexSelected')

    partieIntro.style.display = ('none');
    partieI.style.display = ('none');
    partieII.style.display = ('none');
    partieIII.style.display = ('block');
    partieFin.style.display = ('none');

    notesPartieIntro.style.display = ('none');
    notesPartieI.style.display = ('none');
    notesPartieII.style.display = ('none');
    notesPartieIII.style.display = ('block');
    notesPartieFin.style.display = ('none');

    bookmarkPartieI.style.display = ('none');
    bookmarkPartieII.style.display = ('none');
    bookmarkPartieIII.style.display = ('none');
    bookmarkPartieFin.style.display = ('flex');

    bookmarkPartieIOff.style.display = ('block');
    bookmarkPartieIIOff.style.display = ('block');
    bookmarkPartieIIIOff.style.display = ('block');
    bookmarkPartieFinOff.style.display = ('none');

    book.classList.add('book-3-4')
    book.classList.add('book-2-4')
    book.classList.add('book-1-4')
    book.classList.remove('book-Full')
    positionFootnote()

    hideCibles()

}

function lecturePartieFin() {
    // console.log('SHOW FIN')
    book.setAttribute('data-reading', 'partieFin')

    document.querySelector('.sommairePartieIntro').classList.remove('indexSelected')
    document.querySelector('.sommairePartieI').classList.remove('indexSelected')
    document.querySelector('.sommairePartieII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieIII').classList.remove('indexSelected')
    document.querySelector('.sommairePartieFin').classList.add('indexSelected')

    partieIntro.style.display = ('none');
    partieI.style.display = ('none');
    partieII.style.display = ('none');
    partieIII.style.display = ('none');
    partieFin.style.display = ('block');

    notesPartieIntro.style.display = ('none');
    notesPartieI.style.display = ('none');
    notesPartieII.style.display = ('none');
    notesPartieIII.style.display = ('none');
    notesPartieFin.style.display = ('block');

    bookmarkPartieI.style.display = ('none');
    bookmarkPartieII.style.display = ('none');
    bookmarkPartieIII.style.display = ('none');
    bookmarkPartieFin.style.display = ('none');

    bookmarkPartieIOff.style.display = ('block');
    bookmarkPartieIIOff.style.display = ('block');
    bookmarkPartieIIIOff.style.display = ('block');
    bookmarkPartieFinOff.style.display = ('block');

    book.classList.add('book-3-4')
    book.classList.add('book-2-4')
    book.classList.add('book-1-4')
    book.classList.add('book-Full')
    positionFootnote()

    hideCibles()

}

bookmarkPartieI.addEventListener('click', lecturePartieI);
bookmarkPartieII.addEventListener('click', lecturePartieII);
bookmarkPartieIII.addEventListener('click', lecturePartieIII);
bookmarkPartieFin.addEventListener('click', lecturePartieFin);

bookmarkPartieIOff.addEventListener('click', lecturePartieIntro);
bookmarkPartieIIOff.addEventListener('click', lecturePartieI);
bookmarkPartieIIIOff.addEventListener('click', lecturePartieII);
bookmarkPartieFinOff.addEventListener('click', lecturePartieIII);


// BOOKMARKS MOVE WHEN HOVER
bookmarkPartieI.addEventListener('mouseenter', function () {
    book.classList.add('reduireBook-3-4')
});

bookmarkPartieI.addEventListener('mouseleave', function () {
    book.classList.remove('reduireBook-3-4')
});


bookmarkPartieII.addEventListener('mouseenter', function () {
    if (book.getAttribute("data-reading") === "partieIntro") {
        book.classList.add('reduireBook-3-4')
        bookmarkPartieI.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieI") {
        book.classList.add('reduireBook-2-4')
        bookmarkPartieI.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieII") {
        book.classList.add('reduireBook-1-4')
        bookmarkPartieI.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieIII") {
        book.classList.add('reduireBook-1-4')
        bookmarkPartieI.classList.add('transformLeft')
    }
});

bookmarkPartieII.addEventListener('mouseleave', function () {
    book.classList.remove('reduireBook')
    book.classList.remove('reduireBook-3-4')
    book.classList.remove('reduireBook-2-4')
    book.classList.remove('reduireBook-1-4')
    book.classList.remove('reduireBook-Full')
    bookmarkPartieI.classList.remove('transformLeft')
});

bookmarkPartieIII.addEventListener('mouseenter', function () {
    if (book.getAttribute("data-reading") === "partieIntro") {
        book.classList.add('reduireBook-3-4')
        bookmarkPartieI.classList.add('transformLeft')
        bookmarkPartieII.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieI") {
        book.classList.add('reduireBook-2-4')
        bookmarkPartieII.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieII") {
        book.classList.add('reduireBook-1-4')
        bookmarkPartieII.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieIII") {
        book.classList.add('reduireBook-1-4')
        bookmarkPartieII.classList.add('transformLeft')
    }
});

bookmarkPartieIII.addEventListener('mouseleave', function () {
    book.classList.remove('reduireBook')
    book.classList.remove('reduireBook-3-4')
    book.classList.remove('reduireBook-2-4')
    book.classList.remove('reduireBook-1-4')
    book.classList.remove('reduireBook-Full')
    bookmarkPartieI.classList.remove('transformLeft')
    bookmarkPartieII.classList.remove('transformLeft')
});

bookmarkPartieFin.addEventListener('mouseenter', function () {
    if (book.getAttribute("data-reading") === "partieIntro") {
        book.classList.add('reduireBook-3-4')
        bookmarkPartieI.classList.add('transformLeft')
        bookmarkPartieII.classList.add('transformLeft')
        bookmarkPartieIII.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieI") {
        book.classList.add('reduireBook-2-4')
        bookmarkPartieII.classList.add('transformLeft')
        bookmarkPartieIII.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieII") {
        book.classList.add('reduireBook-1-4')
        bookmarkPartieII.classList.add('transformLeft')
        bookmarkPartieIII.classList.add('transformLeft')
    }
    else if (book.getAttribute("data-reading") === "partieIII") {
        book.classList.add('reduireBook-1-4')
        bookmarkPartieII.classList.add('transformLeft')
        bookmarkPartieIII.classList.add('transformLeft')
    }
});

bookmarkPartieFin.addEventListener('mouseleave', function () {
    book.classList.remove('reduireBook')
    book.classList.remove('reduireBook-3-4')
    book.classList.remove('reduireBook-2-4')
    book.classList.remove('reduireBook-1-4')
    book.classList.remove('reduireBook-Full')
    bookmarkPartieI.classList.remove('transformLeft')
    bookmarkPartieII.classList.remove('transformLeft')
    bookmarkPartieIII.classList.remove('transformLeft')
});


// BOOKMARKS OFF MOVE WHEN HOVER

bookmarkPartieIOff.addEventListener('mouseenter', function () {

    if (book.getAttribute("data-reading") === "partieI") {
        book.classList.add('ampliarBook-3-4')
    }
    else if (book.getAttribute("data-reading") === "partieII") {
        book.classList.add('ampliarBook-2-4')
        bookmarkPartieIIOff.classList.add('transformRight')
    }
    else if (book.getAttribute("data-reading") === "partieIII") {
        book.classList.add('ampliarBook-1-4')
        bookmarkPartieIIOff.classList.add('transformRight')
        bookmarkPartieIIIOff.classList.add('transformRight')
    }
    else if (book.getAttribute("data-reading") === "partieFin") {
        book.classList.add('ampliarBook-Full')
        bookmarkPartieIIOff.classList.add('transformRight')
        bookmarkPartieIIIOff.classList.add('transformRight')
        bookmarkPartieFinOff.classList.add('transformRight')
    }
});

bookmarkPartieIOff.addEventListener('mouseleave', function () {
    book.classList.remove('ampliarBook-3-4')
    book.classList.remove('ampliarBook-2-4')
    book.classList.remove('ampliarBook-1-4')
    book.classList.remove('ampliarBook-Full')
    bookmarkPartieIIOff.classList.remove('transformRight')
    bookmarkPartieIIIOff.classList.remove('transformRight')
    bookmarkPartieFinOff.classList.remove('transformRight')
});


bookmarkPartieIIOff.addEventListener('mouseenter', function () {

    if (book.getAttribute("data-reading") === "partieII") {
        book.classList.add('ampliarBook-2-4')
    }
    else if (book.getAttribute("data-reading") === "partieIII") {
        book.classList.add('ampliarBook-1-4')
        bookmarkPartieIIIOff.classList.add('transformRight')
        bookmarkPartieFinOff.classList.add('transformRight')
    }
    else if (book.getAttribute("data-reading") === "partieFin") {
        book.classList.add('ampliarBook-Full')
        bookmarkPartieIIIOff.classList.add('transformRight')
        bookmarkPartieFinOff.classList.add('transformRight')
    }
});

bookmarkPartieIIOff.addEventListener('mouseleave', function () {
    book.classList.remove('ampliarBook-3-4')
    book.classList.remove('ampliarBook-2-4')
    book.classList.remove('ampliarBook-1-4')
    book.classList.remove('ampliarBook-Full')
    bookmarkPartieIIOff.classList.remove('transformRight')
    bookmarkPartieIIIOff.classList.remove('transformRight')
    bookmarkPartieFinOff.classList.remove('transformRight')
});

bookmarkPartieIIIOff.addEventListener('mouseenter', function () {

    if (book.getAttribute("data-reading") === "partieIII") {
        book.classList.add('ampliarBook-1-4')
        bookmarkPartieFinOff.classList.add('transformRight')
    }
    else if (book.getAttribute("data-reading") === "partieFin") {
        book.classList.add('ampliarBook-Full')
        bookmarkPartieFinOff.classList.add('transformRight')
    }
});

bookmarkPartieIIIOff.addEventListener('mouseleave', function () {
    book.classList.remove('ampliarBook-3-4')
    book.classList.remove('ampliarBook-2-4')
    book.classList.remove('ampliarBook-1-4')
    book.classList.remove('ampliarBook-Full')
    bookmarkPartieIIOff.classList.remove('transformRight')
    bookmarkPartieIIIOff.classList.remove('transformRight')
    bookmarkPartieFinOff.classList.remove('transformRight')
});



bookmarkPartieFinOff.addEventListener('mouseenter', function () {
    if (book.getAttribute("data-reading") === "partieFin") {
        book.classList.add('ampliarBook-Full')
    }
});

bookmarkPartieFinOff.addEventListener('mouseleave', function () {
    book.classList.remove('ampliarBook-3-4')
    book.classList.remove('ampliarBook-2-4')
    book.classList.remove('ampliarBook-1-4')
    book.classList.remove('ampliarBook-Full')
    bookmarkPartieIIOff.classList.remove('transformRight')
    bookmarkPartieIIIOff.classList.remove('transformRight')
    bookmarkPartieFinOff.classList.remove('transformRight')
});


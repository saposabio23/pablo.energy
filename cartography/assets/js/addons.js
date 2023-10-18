// /* -----------------------------------
// SOUNDS UI 
// -------------------------------------- */
const button = document.querySelectorAll('.hoverShadow');
button.forEach(function(button) {
  button.addEventListener('mouseenter', function() {
    soundhover.play();
  });
});


// réglages welcoming

document.getElementById('welcome').addEventListener('click', (event) => {
    document.querySelector('.welcoming').classList.add('disappear');
    setTimeout(() => {
        document.querySelector('.tagList').classList.add('appears');
    }, "800");
})

document.getElementById('welcome').addEventListener('mouseenter', function () {
    soundhover.play();
});

// montre l'historique ou le chache
let history = document.querySelector('.history')
let historyButton = document.getElementById('buttonHistory')

function showHistory() {
    // history.classList.remove('appears');
    // history.classList.add('show');
    
    if(history.classList.contains('hidden')) {
        history.classList.remove('hidden');
        history.classList.add('show');
        historyButton.classList.add('checked');
    }
    else {
        history.classList.remove('show');
        history.classList.add('hidden');
        historyButton.classList.remove('checked');
    }
    
}
historyButton.addEventListener('click', showHistory)

// montre l'index ou le chache
let buttonIndex = document.getElementById('buttonIndex')

function showindex() {
    // index.classList.remove('appears');
    // index.classList.add('show');
    
    if(index.classList.contains('hidden')) {
        index.classList.remove('hidden');
        index.classList.add('show');
        buttonIndex.classList.add('checked');
    }
    else {
        index.classList.remove('show');
        index.classList.add('hidden');
        buttonIndex.classList.remove('checked');
    }
    
}
buttonIndex.addEventListener('click', showindex)


var zoomSlider = document.getElementById("bookzoom");

function zoomBooks() {
    var zoom = zoomSlider.value;
    var zoomValue = zoom + "%";
    document.body.style.setProperty('--zoom', zoomValue)
}

zoomSlider.addEventListener("input", zoomBooks);


// document.getElementById("carto").style.backdropFilter = "blur(15px)";
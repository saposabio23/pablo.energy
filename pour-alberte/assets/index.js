function firstQuestion() {
    document.querySelector('.first').style.display = 'none';
}

function secondQuestion() {
    document.querySelector('.second').style.display = 'none';
}

function thirdQuestion() {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';
}

function badAwnser() {
    window.location.href = 'https://en.wikipedia.org/wiki/April_16';
}

// ACTIVITIES
function hideIt(element) {
    element.classList.toggle('op0')
}

// AUDIO
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



// IMAGES
const frames = document.querySelectorAll('.frame');

frames.forEach(frame => {
    frame.addEventListener('click', () => {
        frame.classList.toggle('fullscreen');
    });
});
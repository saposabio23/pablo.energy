const start = document.querySelector('.start')
const playlist = document.querySelector('.playlist')
const title = document.querySelector('h1')
const things = document.querySelector('.things')


function createIframe(event) {
  var createIframe = document.createElement("iframe");
  createIframe.setAttribute("src",  '' + event.currentTarget.value + '');
  createIframe.className = 'iframex'
  playlist.prepend(createIframe);

  openPlaylist()
}


function openPlaylist() {
  playlist.classList.add('playlistOn')
  start.classList.add('startOff')

  setTimeout(function () {
    title.classList.add('hide')
    things.classList.add('hide')
    var closeButton = document.createElement("button");
    closeButton.setAttribute("onclick", "closePlaylist()");
    closeButton.id = 'closeButton'
    closeButton.innerHTML = 'Close'
    start.prepend(closeButton);
  }, 200)
}

function closePlaylist() {
  playlist.classList.remove('playlistOn')
  start.classList.remove('startOff')

  setTimeout(function () {
    closeButton.remove();
    alternateTitle();
    title.classList.remove('hide')
    things.classList.remove('hide')

    setTimeout(function () {
      const iframe = document.querySelector('.iframex')
      iframe.remove();
      }, 900)
  }, 200)
}


const wakeup = document.querySelector('#wakeup')
const working = document.querySelector('#working')
const motivation = document.querySelector('#motivation')

function normalTitle() {
  title.innerHTML = 'What are you doing?'
}

function alternateTitle() {
  title.innerHTML = 'Still doing more things??'
}


function whenHoverWakeup() {
  title.innerHTML = 'Starting a good day?'
}

function whenHoverWorking() {
  title.innerHTML = 'Code session again?'
}

function whenHoverMotivation() {
  title.innerHTML = 'Looking for motivation?'
}


wakeup.addEventListener('mouseenter', whenHoverWakeup)
wakeup.addEventListener('click', createIframe)

working.addEventListener('mouseenter', whenHoverWorking)
working.addEventListener('click', createIframe)

motivation.addEventListener('mouseenter', whenHoverMotivation)
motivation.addEventListener('click', createIframe)

wakeup.addEventListener('mouseleave', normalTitle)
working.addEventListener('mouseleave', normalTitle)
motivation.addEventListener('mouseleave', normalTitle)

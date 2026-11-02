console.log("hello");

var input = document.querySelector('#input')
var notes = document.querySelector('.notes')
var note = document.querySelector('.note')
var button = document.querySelector('#button')
var cloud = document.querySelector('#cloud')
var firm = document.querySelector('.firm')


function sendNote1(e){
  if (e.keyCode == 13){
    sendNote()
    input.value = ""
    button.classList.add("buttonHover")
    setTimeout(
    function() {
        button.classList.remove("buttonHover")
    }, 100);

  }
}

function sendNote2(){
      sendNote()
      input.value = ""
      button.classList.add("buttonHover")
      setTimeout(
      function() {
          button.classList.remove("buttonHover")
      }, 100);
}

function sendNote() {
  var value = input.value
  var newtext = document.createElement('div')
  newtext.classList.add("note")
  newtext.innerHTML = value
  document.body.appendChild(newtext)
}

input.addEventListener('keyup', sendNote1)
button.addEventListener('click', sendNote2)


function showFirm(){
  firm.classList.add("firmShow")
  setTimeout(
    function() {
      firm.classList.remove("firmShow")
    }, 3000);
}

cloud.addEventListener('mouseenter', showFirm)





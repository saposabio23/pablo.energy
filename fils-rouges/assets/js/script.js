

// PROGRAMME DISPLAY
var programme = document.querySelector('.programme')
var progText = document.querySelector('#prog')
var progClose = document.querySelector('.close')
var titreProg = document.querySelector('#titreProg')

function activeProgram() {
  if (programme.classList.contains("on")) {
    programme.classList.remove("on")
    programme.style.display = "none";
    progClose.innerHTML = "❡";
  }
  else {
    programme.classList.add("on")
    progClose.style.opacity = "1";
    programme.style.display = "block";
    // programme.scrollTo({ top: 0, behavior: 'smooth' });
    progClose.innerHTML = "×";
  }
}

progText.addEventListener("click", activeProgram)
progClose.addEventListener("click", activeProgram)
titreProg.addEventListener("click", activeProgram)


// PROGRAMME ON SCROOLL
window.onscroll = function () {
  scrollShowProgram()
};

function scrollShowProgram() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    progClose.style.opacity = "1";
  }
  else if (programme.classList.contains("on")) {
    progClose.style.opacity = "1";
  }
  else {
    progClose.style.opacity = "0";
  }
}


  // PROGRAMME ON click

  document.addEventListener('click', function(e){
    if(e.target.className=="pro"){
      console.log(e)
      programme.classList.remove("on")
      programme.style.display = "none";
      progClose.innerHTML = "❡";
    }
  })
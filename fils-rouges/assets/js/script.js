// Set the date we're counting down to
var countDownDate = new Date("Sept 22, 2023 20:00:00").getTime();

var count = document.querySelector('#count')
var demo = document.querySelector('#demo')
var prog = document.querySelector('#prog')
var rsvp = document.querySelector('#rsvp')

// Update the count down every 1 second
function countdown(){

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="count"
  count.innerHTML = days + "j " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    demo.innerHTML = "ÇA COMMENCE.";
    setTimeout(function () {
      demo.innerHTML = "ÇA COMMENCE..";
      setTimeout(function () {
        demo.innerHTML = "ÇA COMMENCE...";
        setTimeout(function () {
          demo.innerHTML = "en projection";
          rsvp.style.display = 'none';
          prog.style.display = 'block';
        }, 1000)
      }, 1000)
    }, 1000)
  }
  
  var repeat = setInterval(countdown, 1000);
}

countdown()


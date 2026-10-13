
/* -----------------------------------
NIGHT FUNCTION
-------------------------------------- */
var nighScreen = document.getElementById("nightScreen");

function isItNight() {
  var day = new Date();
  var hr = day.getHours();
  if (
    hr == 0 ||
    hr == 1 ||
    hr == 2 ||
    hr == 3 ||
    hr == 4 ||
    hr == 5 ||
    hr == 6
  ) {
    document.title = "Sleeping... 💤";
    nighScreen.classList.remove("hidden");
  }
  if (
    hr == 7 ||
    hr == 8 ||
    hr == 9 ||
    hr == 10 ||
    hr == 11 ||
    hr == 12 ||
    hr == 13 ||
    hr == 14 ||
    hr == 15 ||
    hr == 16 ||
    hr == 17 ||
    hr == 18 ||
    hr == 19 ||
    hr == 20 ||
    hr == 21 ||
    hr == 22 ||
    hr == 23
  ) {
  }
}
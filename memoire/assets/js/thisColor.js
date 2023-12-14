/* -----------------------------------
CSS COLOOOORS
// -------------------------------------- */
function witchColor() {
  var randomColor = [ 'slateblue', 'tan', 'chocolate', 'cornflowerblue', 'darkorange', 'yellowgreen', 'violet', 'tomato', 'steelblue', 'sienna', 'seagreen'][Math.floor(Math.random() * 11)]


  console.log(randomColor);
  var newColor=":root{--thisColor: " + randomColor + ";}"

  var styleSheet = document.createElement("style")
  styleSheet.innerText = newColor
  document.head.appendChild(styleSheet)
}


witchColor()
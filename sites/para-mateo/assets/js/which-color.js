/* -----------------------------------
CSS COLOOOORS
var(--thisColor);
// -------------------------------------- */

function witchColor() {
  var colorList = [ 'aquamarine', 'bisque', 'cadetblue', 'cornflowerblue', 'yellowgreen', 'violet', 'salmon', 'skyblue', 'peachpuff', 'plum', 'orange', 'orangered', 'midnightblue', 'lightsalmon']

  var randomColor = colorList[Math.floor(Math.random() * colorList.length)];

  var whichColor=":root{--thisColor: " + randomColor + ";}"
  
  var styleSheet = document.createElement("style")
  styleSheet.innerText = whichColor
  document.head.appendChild(styleSheet)
  
  console.log(randomColor);
}

witchColor()




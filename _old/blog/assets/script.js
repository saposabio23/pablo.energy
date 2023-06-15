/* -----------------------------------
CSS COLOOOORS
// -------------------------------------- */
function witchColor() {
    var randomColor = [ 'Aqua', 'Aquamarine', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HotPink', 'IndianRed', 'Indigo', 'Khaki', 'Lavender', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'Lime', 'LimeGreen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'Yellow', 'YellowGreen'][Math.floor(Math.random() * 127)]
  
  
    console.log(randomColor);
    var newColor=":root{--thisColor: " + randomColor + ";}"
  
    var styleSheet = document.createElement("style")
    styleSheet.innerText = newColor
    document.head.appendChild(styleSheet)

    var $texte = document.querySelector("body")

    var nvmot= document.createElement("p");
    nvmot.className = "info";
    nvmot.innerHTML = "The background-color of this entry is called " + randomColor;
    $texte.appendChild(nvmot);

  }
  
  witchColor()



$circle = document.getElementById("circle");
$date = document.getElementById("date");


circle.addEventListener('mouseenter', (e) => {
    date.style.opacity = '1';
});

circle.addEventListener('mouseleave', (e) => {
    date.style.opacity = '0';
});


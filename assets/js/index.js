window.onload = function () {
    ageOfPablo()
    setInterval(ageOfPablo, 1000);
    initialize()
    mobileWindow();
    wip()
};

/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */

function mobileWindow() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);



let index = 0;
const texts = ["Ha", "Hav", "Have", "Have a", "Have a n", "Have a ni", "Have a nic", "Have a nice", "Have a nice d", "Have a nice da", "Have a nice day", "Have a nice day!"];

// THREE DOTS
function wip() {
    setInterval(() => {
        document.title = texts[index];
        index = (index + 1) % texts.length;
    }, 500);
}

function ageOfPablo() {
    const startDate = new Date(1998, 4, 30);
    const now = new Date();

    const elapsedMilliseconds = now - startDate;

    const seconds = Math.floor(elapsedMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let years = Math.floor(days / 365.25);
    let remainingDays = days % 365.25;
    let months = Math.floor(remainingDays / 30.44);
    remainingDays = Math.floor(remainingDays % 30.44);

    const elapsed = {
        years: years,
        months: months,
        days: remainingDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
    };

    document.getElementById('yearsAge').textContent = elapsed.years;
    document.getElementById('monthsAge').textContent = elapsed.months;
    document.getElementById('daysAge').textContent = elapsed.days;

    // console.log(elapsed.seconds)
}



let panorama;

function initialize() {
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById("street-view"),
        {
            position: { lat: 52.35379279046571, lng: 4.897520202148485 },
            pov: { heading: 165, pitch: 5 },
            zoom: .8,
            panControl: true,
            zoomControl: true,
            linksControl: false,
            enableCloseButton: false,
            fullscreenControl: true,
            addressControl: false,
        },
    );
}



/* -----------------------------------
CSS COLOOOORS
var(--thisColor);
// -------------------------------------- */

function witchColor() {
    var colorList = ['Aqua', 'Aquamarine', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HotPink', 'IndianRed', 'Indigo', 'Khaki', 'Lavender', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'Lime', 'LimeGreen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'Yellow', 'YellowGreen']

    var randomColor = colorList[Math.floor(Math.random() * colorList.length)];

    var whichColor = ":root{--thisColor: " + randomColor + ";}"

    var styleSheet = document.createElement("style")
    styleSheet.innerText = whichColor
    document.head.appendChild(styleSheet)
}

witchColor()



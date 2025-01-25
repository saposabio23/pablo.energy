window.onload = function () {
    wip()
    ageOfPablo()
    setInterval(ageOfPablo, 1000);
    initialize()
};

let index = 0;
const texts = ["Ha", "Hav", "Have", "Have a", "Have a n", "Have a ni", "Have a nic", "Have a nice", "Have a nice d", "Have a nice da", "Have a nice day", "Have a nice day!"];

// THREE DOTS
function wip() {
    setInterval(() => {
        document.title = texts[index];
        index = (index + 1) % texts.length;
    }, 300);
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
            zoom: 1,
            panControl: true,
            zoomControl: true,
            linksControl: false,
            enableCloseButton: false,
            fullscreenControl: true,
            addressControl: false,
        },
    );
}



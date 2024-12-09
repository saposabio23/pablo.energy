window.onload = function () {
    wip()
    getLocalTime();
    setInterval(getLocalTime, 1000);
    ageOfPablo()
    setInterval(ageOfPablo, 1000);
};

let index = 0;
const texts = ["W", "We", "Web", "Webs", "Websi", "Websit", "Website", "Websites", "Websites b", "Websites by", "Websites by P", "Websites by Pa", "Websites by Pab", "Websites by Pabl", "Websites by Pablo", "Websites by Pablo!"];

// THREE DOTS
function wip() {
    setInterval(() => {
        document.title = texts[index];
        index = (index + 1) % texts.length;
    }, 300);
}

// LOCALTIME INS AMS
function getLocalTime() {
    const timeOptions = {
        timeZone: "Europe/Amsterdam",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };

    const now = new Date();
    const clockformatter = new Intl.DateTimeFormat('en-GB', timeOptions);
    const [hour, minute, second] = clockformatter.formatToParts(now)
        .filter(part => part.type !== 'literal')
        .map(part => part.value);

    document.getElementById('hours').textContent = hour;
    document.getElementById('minutes').textContent = minute;
    document.getElementById('seconds').textContent = second;
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

// IFRAME STUFF
const screen = document.querySelector(".screen");
const body = document.querySelector("body");
const select = document.querySelector(".websites");
const close = document.querySelector("#close");
const random = document.querySelector("#random");
const stats = document.querySelector(".stats");
const options = document.querySelectorAll(".websites option");
const iframe = document.querySelector("iframe");



function openScreen() {
    screen.classList.add('bigScreen')
    iframe.classList.add('bigIframe')
    body.classList.add('bigBody')
    close.style.display = "inline";
}

function closeScreen() {
    select.selectedIndex = 0;
    screen.classList.remove('bigScreen')
    iframe.classList.remove('bigIframe')
    body.classList.remove('bigBody')

    close.style.display = "none";

    iframe.src = '';
}

function randomWeb() {
    const options = Array.from(document.querySelectorAll("select.websites > optgroup > option"));

    const randomOption = options[Math.floor(Math.random() * options.length)];
    iframe.src = randomOption.dataset.url;

    openScreen()

    select.value = randomOption.value;
}

select.addEventListener("change", function () {
    openScreen()
    if (this.options[this.selectedIndex].dataset.url == "actual") {
        window.location = "https://pablo.energy";
    }
    else {
        iframe.src = this.options[this.selectedIndex].dataset.url;
    }
});

close.addEventListener("click", closeScreen);
random.addEventListener("click", randomWeb);


document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
        closeScreen()
    }
    else { }
});

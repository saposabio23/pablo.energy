window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("intro-photo").classList.remove("opacity-0");
    document.getElementById("intro-texto").classList.remove("opacity-0");
    document.getElementById("intro-menu").classList.remove("opacity-0");
    setTimeout(() => {
        document.getElementById("ball").classList.remove("opacity-0");
    }, 1000);
});

// FAVICON
function setFaviconCircle(opacity = 1) {
    const color = "#B0FD45";

    // SVG for a 32x32 icon with a circle in the center
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <rect width="32" height="32" fill="transparent" />
        <circle cx="16" cy="16" r="10" fill="${color}" fill-opacity="${opacity}" />
      </svg>
    `.trim();

    const url = "data:image/svg+xml," + encodeURIComponent(svg);
    const link = document.getElementById("dynamic-favicon");
    if (link) link.href = url;
}

// Animate: fade in / out using a sine wave
function startFaviconAnimation() {
    let t = 0;
    setInterval(() => {
        // t grows, sine goes -1..1 → map to 0.3..1
        const sine = Math.sin(t);
        const opacity = 0 + (sine + 1) / 2 * (1 - 0); // between 0.3 and 1
        setFaviconCircle(opacity);
        t += 0.10;  // adjust speed here (smaller = slower)
    }, 50);       // update interval (ms)
}

// Start when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    setFaviconCircle(1);      // initial icon
    startFaviconAnimation();  // then animate
});


// GRADIENT TOP APPEARS
const fleche = document.getElementById("fleche");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;

    const atBottom = scrollPos + viewportHeight >= fullHeight - 10;

    if (atBottom) {
        // Mostrar flecha, apuntar arriba
        fleche.style.opacity = "1";
        fleche.href = "#top";
        fleche.textContent = "↑";
        fleche.style.pointerEvents = "auto"
    } else if (scrollPos > 100) {
        fleche.style.opacity = "0";
        fleche.style.pointerEvents = "none"; // para que no se pueda clicar cuando está oculta
    } else {
        fleche.style.opacity = "1";
        fleche.style.pointerEvents = "auto";
        fleche.href = "#today";
        fleche.textContent = "↓";
    }
});
// VIDEO PABLO
// const vid = document.getElementById("pablo-face");

// // Always start paused and at frame 0
// vid.pause();
// vid.currentTime = 0;

// vid.addEventListener("mouseenter", () => {
//     playOnce();
// });

// vid.addEventListener("click", () => {
//     playOnce();
// });

// setTimeout(() => {
//     playOnce();   // trigger auto-play once
// }, 30000);

// vid.addEventListener("ended", () => {
//     vid.currentTime = 0;
//     vid.pause();
// });

// function playOnce() {
//     vid.currentTime = 0;
//     vid.play();
// }

// CLOCK
// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     document.getElementById('clockH').textContent = `${hours}`;
//     document.getElementById('clockM').textContent = `${minutes}`;
// }

// Start time
const startTime = Date.now();

function updateTimer() {
    const now = Date.now();
    const diff = Math.floor((now - startTime) / 1000);

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    let text = "";

    if (minutes === 0) {
        // Under 1 minute → show seconds only
        text = `${seconds} seconds`;
    } else if (minutes === 1) {
        // Exactly 1 minute
        text = `1 minute`;
    } else {
        // Multiple minutes
        text = `${minutes} minutes`;
    }

    document.getElementById('visit-timer').textContent = text;
}

// Update every second
setInterval(updateTimer, 1000);

// Run once immediately
updateTimer();

// FLICKITY CLICK TO NEXT
document.addEventListener("DOMContentLoaded", () => {
    // Select ALL carousels on the page
    const carousels = document.querySelectorAll(".main-carousel");
    if (!carousels.length) return;

    carousels.forEach(carouselEl => {
        const flkty = Flickity.data(carouselEl);
        if (!flkty) return;

        // Click anywhere → next slide
        carouselEl.addEventListener("click", (e) => {
            // OPTIONAL: ignore clicks on videos
            if (e.target.tagName === "VIDEO") return;

            flkty.next();
        });
    });
});

// WEBSITES LIST
var ADDRESS = "1UGVXTssu8J9mBbOyPSX0qkOo13xggy_MgboicC4UlTU/1";

fetch("https://opensheet.elk.sh/" + ADDRESS)
    .then(res => res.json())
    .then(data => {
        const grid = document.getElementById("projects-grid");
        if (!grid) return;

        // Newest year first; within a year, rows lower in the sheet first
        const year = row => parseInt(row.Date, 10) || 0;
        data.slice().reverse().sort((a, b) => year(b) - year(a)).forEach(row => {
            // Skip empty rows (no Title)
            if (!row.Title || !row.Title.trim()) return;

            // Skip rows marked as inactive (red dot)
            const state = (row.State || "").trim();
            if (state === "\uD83D\uDD34") return;

            const site = {
                title: row.Title.trim(),
                description: (row.Description || "").trim(),
                year: (row.Date || "").trim(),
                url: (row.URL || "#").trim() || "#",
                image: previewUrl(row.Preview),
                nature: (row.Nature || "").trim()
            };

            grid.appendChild(createProjectRow(site));
        });

        applyNatureFilter();
    })
    .catch(err => console.error("Error fetching sheet:", err));

// Turn a Google Drive share link from the sheet's Preview column into an image URL
function previewUrl(value) {
    const link = (value || "").trim();
    const id = link.match(/\/d\/([\w-]+)/)?.[1] || link.match(/[?&]id=([\w-]+)/)?.[1];
    return id ? "https://drive.google.com/thumbnail?id=" + id + "&sz=w400" : link;
}

// Preview (black until a screenshot is set in the sheet's Preview column)
function createPreview(site, className) {
    const preview = document.createElement("div");
    preview.className =
        "aspect-[4/3] bg-black rounded-lg overflow-hidden transition duration-300 group-hover:opacity-80 " + className;

    if (site.image) {
        const img = document.createElement("img");
        img.src = site.image;
        img.alt = site.title;
        img.loading = "lazy";
        img.className = "w-full h-full object-cover";
        preview.appendChild(img);
    }

    return preview;
}

function createProjectRow(site) {
    // Row (preview on the left, text on the right)
    const row = document.createElement("a");
    row.href = site.url;
    row.target = "_blank";
    row.setAttribute('title', site.title);
    row.dataset.nature = site.nature.toLowerCase();
    row.className =
        "flex gap-3 items-center p-2 leading-tight transition-all duration-200 hover:bg-zinc-200 rounded-[8px] group";

    // Title + description
    const text = document.createElement("div");
    text.className = "flex flex-col gap-1 min-w-0";

    const titleEl = document.createElement("h4");
    titleEl.textContent = site.title;
    text.appendChild(titleEl);

    if (site.description) {
        const descEl = document.createElement("p");
        descEl.textContent = site.description;
        descEl.className = "text-grey";
        text.appendChild(descEl);
    }

    if (site.year) {
        const yearEl = document.createElement("span");
        yearEl.textContent = site.year;
        yearEl.className = "text-grey text-sm";
        text.appendChild(yearEl);
    }

    row.appendChild(createPreview(site, "h-[80px] shrink-0"));
    row.appendChild(text);
    return row;
}

// WEBSITES FILTER (slider)
const NATURES = ["Commissioned", "Personal", "Friends", "Experimental"];
const natureSlider = document.getElementById("nature-slider");
const natureLabel = document.getElementById("nature-label");

function applyNatureFilter() {
    if (!natureSlider) return;
    const nature = NATURES[natureSlider.value];
    if (natureLabel) natureLabel.textContent = nature;

    let shown = 0;
    document.querySelectorAll("#projects-grid [data-nature]").forEach(card => {
        const match = card.dataset.nature === nature.toLowerCase();
        card.classList.toggle("hidden", !match);
        if (match) shown++;
    });

    document.getElementById("projects-empty")?.classList.toggle("hidden", shown > 0);
}

natureSlider?.addEventListener("input", applyNatureFilter);


// IMAGES ON THE SREUSME
function setupResumePopup() {
    const resume = document.getElementById('resume');
    const popup = document.getElementById('resume-popup');
    const popupDiv = document.querySelector('#resume-popup>div');
    const imgEl = popup?.querySelector('img');

    if (!resume || !popup || !imgEl) return;

    const defaultImage = 'pablo-moreno.jpg';
    let hideTimer;

    resume.querySelectorAll('.listStack').forEach(item => {
        item.addEventListener('click', () => {
            const src = item.dataset.popupImage || defaultImage;
            if (!src) return;

            // random entre -3 y +3 grados
            const randomDeg = (Math.random() * 6) - 3;
            popupDiv.style.transform = `rotate(${randomDeg}deg)`;

            imgEl.src = 'media/resume/' + src;
            popup.classList.add('show');
            popup.setAttribute('aria-hidden', 'false');

            clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                popup.classList.remove('show');
                popup.setAttribute('aria-hidden', 'true');
            }, 5000);
        });
    });
}

function removeResumePopup() {
    document.getElementById('resume-popup').classList.remove('show');
    document.getElementById('resume-popup').setAttribute('aria-hidden', 'true');
}

window.addEventListener('load', () => {
    setupResumePopup();
});


// AMSTERDAM TIME
const amsterdamTime = document.getElementById("amsterdam-time");
const amsterdamFormat = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});

function updateAmsterdamTime() {
    if (amsterdamTime) amsterdamTime.textContent = amsterdamFormat.format(new Date());
}

updateAmsterdamTime();
setInterval(updateAmsterdamTime, 1000);

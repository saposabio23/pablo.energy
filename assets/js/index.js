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

// Groups, in page order, matching the sheet's Nature column (other values, like "hidden", never show)
const CATEGORIES = ["for people", "for friends", "for me"];

fetch("https://opensheet.elk.sh/" + ADDRESS)
    .then(res => res.json())
    .then(data => {
        const grid = document.getElementById("projects-grid");
        if (!grid) return;

        // Newest year first; within a year, rows lower in the sheet first
        const year = row => parseInt(row.Date, 10) || 0;
        const sites = [];
        data.slice().reverse().sort((a, b) => year(b) - year(a)).forEach(row => {
            // Skip empty rows (no Title)
            if (!row.Title || !row.Title.trim()) return;

            sites.push({
                title: row.Title.trim(),
                description: (row.Description || "").trim(),
                year: (row.Date || "").trim(),
                url: (row.URL || "#").trim() || "#",
                image: previewUrl(row.Preview),
                nature: (row.Nature || "").trim().toLowerCase()
            });
        });

        CATEGORIES.forEach(category => {
            const group = sites.filter(site => site.nature === category);
            if (group.length) grid.appendChild(createProjectGroup(category, group));
        });

        document.getElementById("projects-empty")?.classList.toggle("hidden", grid.children.length > 0);
    })
    .catch(err => console.error("Error fetching sheet:", err));

// Category heading, then its websites as a list
function createProjectGroup(category, sites) {
    const group = document.createElement("div");
    group.className = "flex flex-col gap-1";

    const heading = document.createElement("h4");
    heading.textContent = category;
    heading.className = "text-sm text-grey uppercase mb-1";
    group.appendChild(heading);

    sites.forEach(site => group.appendChild(createProjectRow(site)));
    return group;
}

// Turn a Google Drive share link from the sheet's Preview column into a small thumbnail URL
function previewUrl(value) {
    const link = (value || "").trim();
    const id = link.match(/\/d\/([\w-]+)/)?.[1] || link.match(/[?&]id=([\w-]+)/)?.[1];
    return id ? "https://drive.google.com/thumbnail?id=" + id + "&sz=w100" : link;
}

// Tiny preview next to the title (black until a screenshot is set in the sheet's Preview column)
function createPreview(site) {
    const base = "h-[20px] aspect-[16/10] shrink-0 self-center rounded-[3px] transition duration-300 group-hover:opacity-60";

    if (!site.image) {
        const placeholder = document.createElement("span");
        placeholder.className = "bg-black " + base;
        return placeholder;
    }

    const img = document.createElement("img");
    img.src = site.image;
    img.alt = "";
    img.loading = "lazy";
    img.className = "object-cover " + base;
    return img;
}

// Row: preview, title, description (truncates), year
function createProjectRow(site) {
    const row = document.createElement("a");
    row.href = site.url;
    row.target = "_blank";
    row.rel = "noopener";
    row.setAttribute('title', site.title);
    row.className = "flex items-baseline gap-3 leading-tight hover:text-grey transition duration-300 group";

    row.appendChild(createPreview(site));

    const titleEl = document.createElement("span");
    titleEl.textContent = site.title;
    titleEl.className = "shrink-0 text-lg";
    row.appendChild(titleEl);

    const descEl = document.createElement("span");
    descEl.textContent = site.description;
    descEl.className = "text-grey truncate min-w-0 flex-1";
    row.appendChild(descEl);

    if (site.year) {
        const yearEl = document.createElement("span");
        yearEl.textContent = site.year;
        yearEl.className = "text-grey text-sm shrink-0";
        row.appendChild(yearEl);
    }

    return row;
}


// SECTION INDEX (desktop)
// The section labels work as an index of the page: they all stay stacked at the top left,
// and only the current section keeps its color (the others turn white).
// Clicking a label scrolls to its section.
const desktopQuery = window.matchMedia("(min-width: 768px)");
const LABEL_GAP = 8;
const LABEL_EDGE = 12;
let labelFrame = 0;

const sectionLabels = [...document.querySelectorAll("[data-section-label]")].map(label => {
    // Invisible copy that keeps the label's place in the grid, to read its left edge and width
    const slot = document.createElement("div");
    slot.className = label.className;
    slot.setAttribute("aria-hidden", "true");
    slot.style.visibility = "hidden";
    slot.style.display = "none";
    label.before(slot);

    const section = label.closest("[id]");

    label.classList.add("cursor-pointer");
    label.addEventListener("click", e => {
        // The photo inside the intro label keeps its own behaviour
        if (e.target.closest("#intro-photo")) return;
        section?.scrollIntoView({ behavior: "smooth" });
    });

    return { label, slot, section };
});

function placeSectionLabels() {
    labelFrame = 0;

    // Current section: the last one whose top has passed the upper third of the screen,
    // or the last section once the page is scrolled to the bottom
    const line = window.innerHeight / 3;
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
    let current = 0;
    sectionLabels.forEach(({ section }, i) => {
        if (section && section.getBoundingClientRect().top <= line) current = i;
    });
    if (atBottom) current = sectionLabels.length - 1;

    let y = LABEL_EDGE;
    sectionLabels.forEach(({ label, slot }, i) => {
        if (!desktopQuery.matches) {
            slot.style.display = "none";
            label.style.cssText = "";
            label.classList.remove("is-idle");
            return;
        }

        slot.style.display = "";
        slot.style.height = label.offsetHeight + "px";
        const box = slot.getBoundingClientRect();

        label.style.cssText =
            `position: fixed; top: ${y}px; left: ${box.left}px; width: ${box.width}px; z-index: 40;`;
        // Shared with the corner video, which grows to this width on hover
        if (i === 0) document.documentElement.style.setProperty("--index-width", box.width + "px");
        label.classList.toggle("is-idle", i !== current);
        y += box.height + LABEL_GAP;
    });
}

function requestLabelPlacement() {
    if (!labelFrame) labelFrame = requestAnimationFrame(placeSectionLabels);
}

window.addEventListener("scroll", requestLabelPlacement, { passive: true });
window.addEventListener("resize", requestLabelPlacement);
desktopQuery.addEventListener("change", requestLabelPlacement);
new ResizeObserver(requestLabelPlacement).observe(document.body);
placeSectionLabels();


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

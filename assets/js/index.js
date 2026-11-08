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
        text = seconds === 1 ? `1 second` : `${seconds} seconds`;
    } else if (minutes === 1) {
        // Exactly 1 minute
        text = `1 minute`;
    } else {
        // Multiple minutes
        text = `${minutes} minutes`;
    }

    document.querySelectorAll('[data-visit-timer]').forEach(el => el.textContent = text);
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

// SCROLL HINT
// "(Scroll for more)" on the first screen fades out as soon as the page scrolls, and back in at the very top
const scrollHint = document.getElementById("scroll-hint");
if (scrollHint) {
    const toggleScrollHint = () => scrollHint.classList.toggle("is-hidden", window.scrollY > 0);
    window.addEventListener("scroll", toggleScrollHint, { passive: true });
    toggleScrollHint();
}

// LAZY VIDEOS
// Project videos come with <source data-src>, so nothing downloads on load. Each one gets its src
// about a screen before it scrolls into view, then autoplay starts it as usual.
const lazyVideos = document.querySelectorAll("video source[data-src]");

function loadVideo(source) {
    source.src = source.dataset.src;
    source.removeAttribute("data-src");
    source.parentElement.load();
}

if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            videoObserver.unobserve(entry.target);
            entry.target.querySelectorAll("source[data-src]").forEach(loadVideo);
        });
    }, { rootMargin: "100% 0px" });
    lazyVideos.forEach(source => videoObserver.observe(source.parentElement));
} else {
    lazyVideos.forEach(loadVideo);
}

// WEBSITES LIST
var ADDRESS = "1UGVXTssu8J9mBbOyPSX0qkOo13xggy_MgboicC4UlTU/1";

// The sheet's Visibility column decides what shows: "Yes" shows the row, anything else ("No", empty) hides it
const isVisible = row => (row.Visibility || "").trim().toLowerCase() === "yes";

fetch("https://opensheet.elk.sh/" + ADDRESS)
    .then(res => res.json())
    .then(data => {
        const grid = document.getElementById("projects-grid");
        if (!grid) return;

        // Newest year first; within a year, rows lower in the sheet first
        const year = row => parseInt(row.Date, 10) || 0;
        data.slice().reverse().sort((a, b) => year(b) - year(a)).forEach(row => {
            // Skip empty rows (no Title) and rows set to hide in Visibility
            if (!row.Title || !row.Title.trim()) return;
            if (!isVisible(row)) return;

            grid.appendChild(createProjectRow({
                title: row.Title.trim(),
                description: (row.Description || "").trim(),
                type: (row.Type || "").trim(),
                url: (row.URL || "#").trim() || "#",
                image: previewUrl(row.Preview)
            }));
        });

        document.getElementById("projects-empty")?.classList.toggle("hidden", grid.children.length > 0);
    })
    .catch(err => console.error("Error fetching sheet:", err));

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

// Row: preview, title, description (truncates, desktop only), type
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
    descEl.className = "hidden md:block text-grey truncate min-w-0 flex-1";
    row.appendChild(descEl);

    if (site.type) {
        const typeEl = document.createElement("span");
        typeEl.textContent = site.type;
        typeEl.className = "ml-auto md:ml-0 text-grey text-base shrink-0";
        row.appendChild(typeEl);
    }

    return row;
}


// SECTION INDEX (desktop)
// Each section label scrolls in with its section and sticks mid-screen during it (CSS sticky).
// Once its section ends, it rides up and stays stacked under the previous labels at the top left,
// turning white. Clicking a label scrolls to its section.
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

    // Sticky stops at the section's end minus this margin, which is where the label joins the stack
    const margin = parseFloat(getComputedStyle(label).marginBottom) || 0;

    return { label, slot, section, margin };
});

function placeSectionLabels() {
    labelFrame = 0;

    let y = LABEL_EDGE;
    sectionLabels.forEach(({ label, slot, section, margin }) => {
        if (!desktopQuery.matches) {
            slot.style.display = "none";
            label.style.cssText = "";
            label.classList.remove("is-idle");
            return;
        }

        const height = label.offsetHeight;
        const finished = section.getBoundingClientRect().bottom - margin - height <= y;

        if (finished) {
            slot.style.display = "";
            slot.style.height = height + "px";
            const box = slot.getBoundingClientRect();

            label.style.cssText =
                `position: fixed; top: ${y}px; left: ${box.left}px; width: ${box.width}px; z-index: 40;`;
        } else {
            slot.style.display = "none";
            label.style.cssText = "";
        }

        label.classList.toggle("is-idle", finished);
        y += height + LABEL_GAP;
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


// CORNER VIDEO
// A click or tap grows the video and shows the caption and call button over it; another one shrinks it back.
// Pressing and moving drags it anywhere. On drop it is held from the screen edges nearest to it,
// so it opens toward the middle of the screen, and it always stays EDGE px inside the screen.
const cornerVideo = document.getElementById("corner-video");
const EDGE = 12;     // same gap as bottom-3 / left-3
let drag = null;     // pointer and box position when the press started
let dragged = false; // the last press moved it, so its click doesn't open or close it
let anchor = null;   // nearest edges and distances after a drop; null until the first drag

const clamp = (value, max) => Math.max(EDGE, Math.min(value, max));

// Space left for the box on each axis (clientWidth leaves out the desktop scrollbar)
function maxOffsets() {
    return {
        x: document.documentElement.clientWidth - cornerVideo.offsetWidth - EDGE,
        y: document.documentElement.clientHeight - cornerVideo.offsetHeight - EDGE
    };
}

function setInsets(left, top, right = "auto", bottom = "auto") {
    Object.assign(cornerVideo.style, { left, top, right, bottom });
}

// Puts it at its anchor, pushed back inside when the open card or a smaller window would overflow.
// anchor keeps the dropped distances, so closing it returns it to where it was dropped.
function placeCornerVideo() {
    if (!anchor || drag) return;
    const max = maxOffsets();
    const insets = { left: "auto", top: "auto", right: "auto", bottom: "auto" };
    insets[anchor.x] = clamp(anchor.dx, max.x) + "px";
    insets[anchor.y] = clamp(anchor.dy, max.y) + "px";
    setInsets(insets.left, insets.top, insets.right, insets.bottom);
    cornerVideo.style.transformOrigin = `${anchor.y} ${anchor.x}`;
}

if (cornerVideo) {
    cornerVideo.addEventListener("pointerdown", e => {
        // The call button keeps its own behaviour
        if (e.button !== 0 || e.target.closest("a")) return;
        const style = getComputedStyle(cornerVideo);
        drag = { x: e.clientX, y: e.clientY, left: parseFloat(style.left), top: parseFloat(style.top) };
        dragged = false;
    });

    cornerVideo.addEventListener("pointermove", e => {
        if (!drag) return;
        const dx = e.clientX - drag.x;
        const dy = e.clientY - drag.y;
        // A few px of wobble still counts as a click
        if (!dragged && Math.hypot(dx, dy) < 5) return;
        if (!dragged) {
            dragged = true;
            cornerVideo.setPointerCapture(e.pointerId);
            cornerVideo.setAttribute("data-dragging", "");
        }
        const max = maxOffsets();
        setInsets(clamp(drag.left + dx, max.x) + "px", clamp(drag.top + dy, max.y) + "px");
    });

    const endDrag = () => {
        if (!drag) return;
        drag = null;
        if (!dragged) return;
        cornerVideo.removeAttribute("data-dragging");

        const left = parseFloat(cornerVideo.style.left);
        const top = parseFloat(cornerVideo.style.top);
        const right = document.documentElement.clientWidth - left - cornerVideo.offsetWidth;
        const bottom = document.documentElement.clientHeight - top - cornerVideo.offsetHeight;
        anchor = {
            x: left < right ? "left" : "right",
            y: top < bottom ? "top" : "bottom",
            dx: Math.min(left, right),
            dy: Math.min(top, bottom)
        };
        placeCornerVideo();
    };
    cornerVideo.addEventListener("pointerup", endDrag);
    cornerVideo.addEventListener("pointercancel", endDrag);

    cornerVideo.addEventListener("click", e => {
        if (e.target.closest("a") || dragged) return;
        cornerVideo.toggleAttribute("data-open");
    });

    // Re-check while it opens or closes (its size animates) and when the window changes
    new ResizeObserver(placeCornerVideo).observe(cornerVideo);
    window.addEventListener("resize", placeCornerVideo);
}


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

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("intro-photo").classList.remove("opacity-0");
    document.getElementById("intro-texto").classList.remove("opacity-0");
    document.getElementById("intro-menu").classList.remove("opacity-0");
    setTimeout(() => {
        document.getElementById("ball").classList.remove("opacity-0");
    }, 900);
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
        const container = document.getElementById("projects-list");
        if (!container) return;

        data.forEach(row => {
            // Skip empty rows (no Title)
            if (!row.Title || !row.Title.trim()) return;

            // Skip rows marked as inactive (red dot)
            const state = (row.State || "").trim();
            if (state === "\uD83D\uDD34") return;

            const title = row.Title.trim();
            const description = (row.Description || "").trim();
            const year = (row.Date || "").trim();
            const nature = (row.Nature || "").trim();
            const url = (row.URL || "#").trim();

            // Outer div (with hover state)
            const wrapper = document.createElement("a");
            wrapper.href = url || "#";
            wrapper.setAttribute('data-slideframe', 'true');
            wrapper.setAttribute('title', url);
            wrapper.setAttribute('data-nature', nature);
            wrapper.dataset.slideframe = "true";
            wrapper.className =
                "md:text-lg leading-tight transition-all duration-200 cursor-pointer hover:bg-zinc-200 rounded-[6px] group w-full ";

            // Inner <a>
            const link = document.createElement("div");
            link.className =
                "px-3 py-2 mx-auto flex justify-between";

            // Left side (title + description on hover)
            const left = document.createElement("div");
            left.className = "flex gap-2";

            const titleEl = document.createElement("h4");
            titleEl.textContent = title;
            left.appendChild(titleEl);

            const descEl = document.createElement("p");
            descEl.textContent = description;
            descEl.className =
                "opacity-0 transition-all duration-200 group-hover:opacity-100 text-grey hidden md:inline";

            if (description) {
                left.appendChild(descEl);
            }

            // Right side (year)
            const right = document.createElement("div");
            right.className = "flex gap-2";

            const yearEl = document.createElement("div");
            yearEl.textContent = year;
            yearEl.className = "group-hover:hidden";
            right.appendChild(yearEl);

            const helpEl = document.createElement("div");
            helpEl.textContent = "↗︎";
            helpEl.className = "hidden group-hover:inline text-grey";
            right.appendChild(helpEl);

            // Assemble
            link.appendChild(left);
            link.appendChild(right);
            wrapper.appendChild(link);
            container.appendChild(wrapper);
        });

        applyNatureFilter();
        bindSlideFrameLinks();
    })
    .catch(err => console.error("Error fetching sheet:", err));

// WEBSITES FILTER
const chkPersonal = document.getElementById('filter-personal');
const chkCommissioned = document.getElementById('filter-commissioned');

// Default state: commissioned selected
if (chkCommissioned) chkCommissioned.checked = true;

function applyNatureFilter() {
    // Query each time so newly fetched projects are included
    const projects = document.querySelectorAll('#projects-list [data-nature]');
    const activeNatures = [];

    if (chkPersonal?.checked) activeNatures.push('Personal');
    if (chkCommissioned?.checked) activeNatures.push('Commissioned');

    projects.forEach(project => {
        const nature = project.dataset.nature;
        const shouldShow =
            activeNatures.length === 0 || activeNatures.includes(nature);

        if (shouldShow) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });
}

// Listen to changes on both checkboxes with a radio-like exclusivity
if (chkPersonal && chkCommissioned) {
    chkPersonal.addEventListener('change', () => {
        if (chkPersonal.checked) chkCommissioned.checked = false;
        applyNatureFilter();
    });

    chkCommissioned.addEventListener('change', () => {
        if (chkCommissioned.checked) chkPersonal.checked = false;
        applyNatureFilter();
    });
} else {
    [chkPersonal, chkCommissioned].forEach(chk => {
        if (!chk) return;
        chk.addEventListener('change', applyNatureFilter);
    });
}
applyNatureFilter();


function bindSlideFrameLinks() {
    // Uses the slideFrame overlay that slideFrame.min.js injects
    const overlay = document.querySelector('.slideframe');
    const frame = document.querySelector('.slideframe-container-frame');
    const titleEl = document.querySelector('.slideframe-container-titlebar-title');
    const external = document.querySelector('.slideframe-container-titlebar-external');

    if (!overlay || !frame || !titleEl || !external) return;

    document.querySelectorAll('#projects-list a[data-slideframe="true"]').forEach(link => {
        if (link.dataset.slideframeBound) return;
        link.dataset.slideframeBound = "true";

        link.addEventListener('click', e => {
            if (e.metaKey || e.ctrlKey) return;

            const href = link.getAttribute('href') || "";
            const isMailto = href.startsWith('mailto:');
            const isTel = href.startsWith('tel:');

            // Only skip empty/#/mailto/tel
            if (!href || href === "#" || isMailto || isTel) return;

            e.preventDefault();

            overlay.classList.add('slideframe--visible');
            document.body.classList.add('slideframe-body--noscroll', 'slideframe-body--loading');

            frame.setAttribute('src', href);
            const title = link.hasAttribute('title') ? link.getAttribute('title') : link.innerText;
            frame.setAttribute('title', title);
            titleEl.innerText = title;
            external.setAttribute('href', href);
        });
    });
}


// IMAGES ON THE SREUSME
function setupResumePopup() {
    const resume = document.getElementById('resume');
    const popup = document.getElementById('resume-popup');
    const popupDiv = document.querySelector('#resume-popup>div');
    const imgEl = popup?.querySelector('img');

    if (!resume || !popup || !imgEl) return;

    const defaultImage = 'assets/pablo-moreno.jpg';
    let hideTimer;

    resume.querySelectorAll('.listStack').forEach(item => {
        item.addEventListener('click', () => {
            const src = item.dataset.popupImage || defaultImage;
            if (!src) return;

            // random entre -3 y +3 grados
            const randomDeg = (Math.random() * 6) - 3;
            popupDiv.style.transform = `rotate(${randomDeg}deg)`;

            imgEl.src = src;
            popup.classList.add('show');
            popup.setAttribute('aria-hidden', 'false');

            clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                popup.classList.remove('show');
                popup.setAttribute('aria-hidden', 'true');
            }, 2500);
        });
    });
}

function removeResumePopup() {
    document.getElementById('resume-popup').classList.remove('show');
    document.getElementById('resume-popup').setAttribute('aria-hidden', 'true');
}

window.addEventListener('load', () => {
    bindSlideFrameLinks();
    setupResumePopup();
});

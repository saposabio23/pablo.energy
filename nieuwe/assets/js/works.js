// GRADIENT TOP APPEARS
const gradTop = document.getElementById("gradient-top");
const indentityText = document.getElementById("indentity-text");



window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        gradTop.style.opacity = "1";
        indentityText.style.opacity = "0";

    } else {
        gradTop.style.opacity = "0";
        indentityText.style.opacity = "1";
    }
});

// VIDEO PABLO
const vid = document.getElementById("pablo-face");

// Always start paused and at frame 0
vid.pause();
vid.currentTime = 0;

vid.addEventListener("mouseenter", () => {
    playOnce();
});

vid.addEventListener("click", () => {
    playOnce();
});

setTimeout(() => {
    playOnce();   // trigger auto-play once
}, 30000);

vid.addEventListener("ended", () => {
    vid.currentTime = 0;
    vid.pause();
});

function playOnce() {
    vid.currentTime = 0;
    vid.play();
}

// CLOCK
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clockH').textContent = `${hours}`;
    document.getElementById('clockM').textContent = `${minutes}`;

}

// initial call + update every second
updateClock();
setInterval(updateClock, 1000);


// IMAGES STACK
document.querySelectorAll(".imageStack").forEach(stackEl => {
    const imgs = stackEl.querySelectorAll(".stack-img");
    let currentIndex = 0;

    stackEl.addEventListener("click", () => {
        const img = imgs[currentIndex];
        if (!img) return; // no more images

        // add falling effect
        img.classList.add("fall");

        // when animation ends, hide the image so it doesn't block clicks
        img.addEventListener("transitionend", () => {
            img.classList.add("hidden");
        }, { once: true });

        currentIndex++;

        // OPTIONAL: reset this stack when all images have fallen
        // if (currentIndex >= imgs.length) {
        //     setTimeout(() => {
        //         imgs.forEach(im => im.classList.remove("fall", "hidden"));
        //         currentIndex = 0;
        //     }, 900); // a bit longer than the 0.8s animation
        // }
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

            const title = row.Title.trim();
            const description = (row.Description || "").trim();
            const year = (row.Date || "").trim();
            const url = (row.URL || "#").trim();

            // Outer div (with hover state)
            const wrapper = document.createElement("div");
            wrapper.className =
                "p-1 text-lg leading-tight transition-all duration-200 cursor-pointer hover:bg-zinc-200 group";

            // Inner <a>
            const link = document.createElement("a");
            link.href = url || "#";
            link.setAttribute('data-slideframe', 'true');
            link.dataset.slideframe = "true";
            link.className =
                "w-[500px] max-w-full px-4 py-2 md:p-0 mx-auto flex justify-between";

            // Left side (title + description on hover)
            const left = document.createElement("div");
            left.className = "flex gap-2";

            const titleEl = document.createElement("div");
            titleEl.textContent = title;

            const descEl = document.createElement("span");
            descEl.textContent = description;
            descEl.className =
                "opacity-0 transition-all duration-200 group-hover:opacity-100 text-grey";

            left.appendChild(titleEl);
            if (description) {
                left.appendChild(descEl);
            }

            // Right side (year)
            const yearEl = document.createElement("div");
            yearEl.textContent = year;

            // Assemble
            link.appendChild(left);
            link.appendChild(yearEl);
            wrapper.appendChild(link);
            container.appendChild(wrapper);
        });
    })
    .catch(err => console.error("Error fetching sheet:", err));



// document.addEventListener('DOMContentLoaded', () => {
//     const primaryList = document.querySelector('.nav__list--primary');
//     const secondaryList = document.querySelector('.nav__list--secondary');
//     const anchor = document.querySelector('.nav__title--primary');
//     const targets = secondaryList ? secondaryList.querySelectorAll('.nav__title') : [];

//     if (!primaryList || !secondaryList || !anchor || !targets.length) return;

//     let baseTransform = 'translateY(0)';

//     const applyTransform = (value, { animate = true } = {}) => {
//         if (!animate) {
//             const previousTransition = anchor.style.transition || '';
//             anchor.style.transition = 'none';
//             anchor.style.transform = value;
//             void anchor.offsetHeight; // force reflow
//             requestAnimationFrame(() => {
//                 anchor.style.transition = previousTransition;
//             });
//             return;
//         }
//         anchor.style.transform = value;
//     };

//     const moveAnchor = (el, options) => {
//         const primaryTop = primaryList.getBoundingClientRect().top;
//         const targetTop = el.getBoundingClientRect().top;
//         applyTransform(`translateY(${targetTop - primaryTop}px)`, options);
//     };

//     const setBaseTransform = (value, options) => {
//         baseTransform = value;
//         applyTransform(baseTransform, options);
//     };

//     const resetAnchor = (options) => {
//         applyTransform(baseTransform, options);
//     };

//     const getPathSlug = () => {
//         const path = window.location.pathname.toLowerCase();
//         if (path.includes('works')) return 'works';
//         if (path.includes('sites')) return 'sites';
//         if (path.includes('cv')) return 'cv';
//         if (path.includes('friends')) return 'friends';
//         if (path.includes('today')) return 'today';
//         return 'energy';
//     };

//     const findNavItem = (slug) => {
//         return Array.from(targets).find(
//             (title) => title.textContent.trim().toLowerCase() === slug
//         );
//     };

//     const setInitialAnchor = () => {
//         const slug = getPathSlug();
//         if (slug === 'energy') {
//             setBaseTransform('translateY(0)', { animate: false });
//             return;
//         }
//         const initialTarget = findNavItem(slug);
//         if (initialTarget) {
//             const primaryTop = primaryList.getBoundingClientRect().top;
//             const targetTop = initialTarget.getBoundingClientRect().top;
//             setBaseTransform(`translateY(${targetTop - primaryTop}px)`, { animate: false });
//         } else {
//             setBaseTransform('translateY(0)', { animate: false });
//         }
//     };

//     targets.forEach((title) => {
//         title.addEventListener('mouseenter', () => moveAnchor(title));
//         title.addEventListener('focus', () => moveAnchor(title));
//         title.addEventListener('mouseleave', resetAnchor);
//         title.addEventListener('blur', resetAnchor);
//     });

//     secondaryList.addEventListener('mouseleave', resetAnchor);

//     setInitialAnchor();
// });

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("intro-photo").classList.remove("opacity-0");
    document.getElementById("intro-texto").classList.remove("opacity-0");
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
        t += 0.20;  // adjust speed here (smaller = slower)
    }, 50);       // update interval (ms)
}

// Start when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    setFaviconCircle(1);      // initial icon
    startFaviconAnimation();  // then animate
});

// CONTACT: build the mailto only when a person interacts, so crawlers never see the address
const contact = document.getElementById("contact");
function setMailto() {
    contact.href = "mailto:" + contact.dataset.user + "@" + contact.dataset.domain;
}
["pointerenter", "focus", "touchstart", "click"].forEach((e) =>
    contact.addEventListener(e, setMailto, { once: true, passive: true })
);

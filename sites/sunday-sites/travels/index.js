async function loadData() {
    const data = await (await fetch('cities.json')).json();
    const coordinates = await (await fetch('coordinates.json')).json();
    return { data, coordinates };
}

function cityToColor({ lat, lon }) {
    const r = Math.floor((Math.abs(lat) % 1) * 255);
    const g = Math.floor((Math.abs(lon) % 1) * 255);
    const b = (r ^ g) & 255;
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function renderTimeline(data, coordinates) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    data.forEach(({ month, cities }) => {
        const monthEl = document.createElement('div');
        monthEl.className = 'month';
        const title = document.createElement('h2');
        title.textContent = month;
        monthEl.appendChild(title);

        cities.forEach(city => {
            const cityEl = document.createElement('span');
            cityEl.className = 'city';
            const coord = coordinates[city];
            if (coord) {
                cityEl.style.backgroundColor = cityToColor(coord);
            } else {
                cityEl.style.backgroundColor = '#999'; // fallback color
            }
            cityEl.textContent = city;
            monthEl.appendChild(cityEl);
        });

        timeline.appendChild(monthEl);
    });
}

loadData().then(({ data, coordinates }) => {
    renderTimeline(data, coordinates);
});

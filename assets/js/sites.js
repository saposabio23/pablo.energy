
var ADDRESS = "1UGVXTssu8J9mBbOyPSX0qkOo13xggy_MgboicC4UlTU/1";


fetch("https://opensheet.elk.sh/" + ADDRESS)
    .then((res) => res.json())
    .then((data) => {

        // Ici on check (console.log) tout le contenu de la page du tableur:
        console.log(data)


        data.forEach((row) => {

            let fullRow = document.createElement("div");
            fullRow.classList.add('line');

            const year = (row.Date || '').toString().slice(0, 4);
            if (year) {
                fullRow.dataset.year = year;
            }

            if (row.State.includes('🟢')) {
                fullRow.classList.add('public')
            } else if (row.State.includes('🟠')) {
                fullRow.classList.add('private')
            } else if (row.State.includes('🔴')) {
                fullRow.classList.add('hidden')
            }

            // let faviconCell = document.createElement("td");
            // let favicon = document.createElement("img");
            // favicon.src = "https://www.google.com/s2/favicons?domain=" + row.URL.replace(/^https?:\/\//, "") + "&sz=64";
            // faviconCell.appendChild(favicon);
            // fullRow.appendChild(faviconCell);

            let info = document.createElement("div");
            info.classList.add('info');
            fullRow.appendChild(info);

            let date = document.createElement("div");
            date.innerHTML = row.Date;
            info.appendChild(date);

            let title = document.createElement("div");
            title.innerHTML = row.Title;
            info.appendChild(title);

            let description = document.createElement("div");
            description.className = 'description'
            description.innerHTML = row.Description;
            info.appendChild(description);

            let url = document.createElement("a");
            url.className = 'url'
            url.href = row.URL;
            url.innerHTML = "👀";
            fullRow.appendChild(url);

            document.querySelector('.list').appendChild(fullRow);
        });
    });

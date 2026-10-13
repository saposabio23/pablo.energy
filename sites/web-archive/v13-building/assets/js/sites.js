
var ADDRESS = "1UGVXTssu8J9mBbOyPSX0qkOo13xggy_MgboicC4UlTU/1";


fetch("https://opensheet.elk.sh/" + ADDRESS)
    .then((res) => res.json())
    .then((data) => {

        // Ici on check (console.log) tout le contenu de la page du tableur:
        console.log(data)


        data.forEach((row) => {

            // let link = document.createElement("a");
            // link.href = row.URL;

            let fullRow = document.createElement("tr");
            // link.appendChild(fullRow);
            fullRow.classList.add("year" + row.Date.split('/')[0]);

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

            let dateCell = document.createElement("td");
            let date = document.createElement("span");
            date.innerHTML = row.Date;
            dateCell.appendChild(date);
            fullRow.appendChild(dateCell);

            let titleCell = document.createElement("td");
            let title = document.createElement("h6");
            title.innerHTML = row.Title;
            titleCell.appendChild(title);
            fullRow.appendChild(titleCell);

            let descriptionCell = document.createElement("td");
            let description = document.createElement("p");
            description.className = 'description'
            description.innerHTML = row.Description;
            descriptionCell.appendChild(description);
            fullRow.appendChild(descriptionCell);

            let urlCell = document.createElement("td");
            let url = document.createElement("span");
            url.className = 'url'
            url.innerHTML = row.URL;
            urlCell.appendChild(url);
            fullRow.appendChild(urlCell);


            document.querySelector('table').appendChild(fullRow);
        });
    });
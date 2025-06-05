
var ADDRESS = "1UGVXTssu8J9mBbOyPSX0qkOo13xggy_MgboicC4UlTU/1";


fetch("https://opensheet.elk.sh/" + ADDRESS)
    .then((res) => res.json())
    .then((data) => {

        // Ici on check (console.log) tout le contenu de la page du tableur:
        console.log(data)


        data.forEach((row) => {

            let link = document.createElement("a");
            link.href = row.URL;

            let block = document.createElement("div");
            link.appendChild(block);

            let date = document.createElement("span");
            date.innerHTML = row.Date;
            block.appendChild(date);

            let title = document.createElement("h6");
            title.innerHTML = row.Title;
            block.appendChild(title);

            let url = document.createElement("span");
            url.innerHTML = row.URL;
            block.appendChild(url);


            document.querySelector('body').appendChild(link);
        });
    });
let table = document.querySelector('.table')

fetch(
  "https://opensheet.elk.sh/1jkAa-Qz3SM9TLjoT_rG2Mdhvsyhk_uNGZwcbwZ6u4RY/1"
)
  .then((res) => res.json())
  .then((data) => {

    // ON MET LA LISTE DANS LE DESORDRE
    function shuffle(data) {
      let currentIndex = data.length, randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [data[currentIndex], data[randomIndex]] = [
          data[randomIndex], data[currentIndex]];
      }

      return data;
    }


    shuffle(data);

    console.log(data)

    //   POUR CHAQUE RANGÉE FAIT ÇA:
    data.forEach((row) => {

      let block = document.createElement("div");
      // block.href = '#' + row.id;

      let paroles = document.createElement("p");
      paroles.innerHTML = '"' + row.VERS + '"';
      block.appendChild(paroles);

      let infos = document.createElement("div");
      infos.className = 'infos'
      block.appendChild(infos);

      let song = document.createElement("p");
      song.innerHTML = 'dans la chanson <span>' + row.CHANSON + "</span> de l'album <span>" + row.ALBUM + '</span>';
      infos.appendChild(song);

      TIME = row.Timestamp.substr(0,10);

      console.log(TIME)

      let time = document.createElement("p");
      time.innerHTML = 'ajouté par <span id="pseudo">' + row.PSEUDO + '</span> le ' + TIME;
      infos.appendChild(time);


      table.appendChild(block);


    });
  });

let link = document.getElementById('link')

link.addEventListener('mouseenter', function () {
  document.getElementById('link').innerHTML = 'À FOOOOOND!!';
})

link.addEventListener('mouseleave', function () {
  document.getElementById('link').innerHTML = 'NOOOOON?';
})



function start() {
  window.scrollTo(0, document.body.scrollHeight);
}

start() 
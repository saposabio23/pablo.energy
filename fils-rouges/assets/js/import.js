var SPREADSHEET_ID_AND_TAB = "1CepMxBlqokqLrDMb84xbm3CkfmGTCF-mlHB-BtDu8KQ/1";

var inside = document.querySelector('.inside')

fetch(
  "https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      // Do something with each row here.

      let block = document.createElement("div");
      block.className = 'block';
      block.id = 'blocks';

      let gauche = document.createElement("div");
      gauche.className = 'cote gauche';
      block.appendChild(gauche);

      let droite = document.createElement("div");
      droite.className = 'cote droite';
      block.appendChild(droite);


      let image = document.createElement("img");
      image.src = row.Lien;
      image.className = 'imagex';
      gauche.appendChild(image);

      let titre = document.createElement("h3");
      titre.innerHTML = '"' + row.Titre + '"';
      droite.appendChild(titre);

      let numeros = document.createElement("small");
      numeros.innerHTML = 'par ' + row.Auteur + ' · ' + row.Promo + '<sup>ème</sup> année · ' +  row.Durée + '"';
      droite.appendChild(numeros);

      let sypnosis = document.createElement("p");
      sypnosis.innerHTML = row.Synopsis;
      droite.appendChild(sypnosis);


      // let mood = document.createElement("span");
      // mood.className = 'mood'
      // mood.style.backgroundColor = row.Mood;
      // droite.appendChild(mood);

      inside.appendChild(block);
      

    });
  });
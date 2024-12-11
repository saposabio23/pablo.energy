var inside = document.querySelector('.inside')
var table = document.querySelector('.table')

fetch(
  "https://opensheet.elk.sh/1CepMxBlqokqLrDMb84xbm3CkfmGTCF-mlHB-BtDu8KQ/1"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      // Do something with each row here.

      let block = document.createElement("div");
      block.className = 'block';
      block.id = row.id;
      // block.id = 'blocks';

      let gauche = document.createElement("div");
      gauche.className = 'cote gauche';
      block.appendChild(gauche);

      let image = document.createElement("img");
      image.src = 'img/' + row.Image;
      image.className = 'imagex';
      gauche.appendChild(image);

      let droite = document.createElement("div");
      droite.className = 'cote droite';
      block.appendChild(droite);

      let titre = document.createElement("h3");
      titre.innerHTML = row.Titre;
      droite.appendChild(titre);

      let sypnosis = document.createElement("p");
      sypnosis.innerHTML = row.Synopsis;
      droite.appendChild(sypnosis);

      let numeros = document.createElement("small");
      numeros.innerHTML = ' ' + row.Auteurices + ' · ' + row.Promo + '<sup>ème</sup> année · ' + row.Durée + '"';
      droite.appendChild(numeros);

      let lien = document.createElement("a");
      lien.className = 'lien';
      lien.href = row.lien;
      lien.innerHTML = '→ lien';
      droite.appendChild(lien);

      inside.appendChild(block);


    });
  });



fetch(
  "https://opensheet.elk.sh/1CepMxBlqokqLrDMb84xbm3CkfmGTCF-mlHB-BtDu8KQ/2"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {

      let block = document.createElement("a");
      block.className = row.Type;
      block.href = '#' + row.id;

      let titre = document.createElement("span");
      titre.className = "pro";
      titre.innerHTML = row.Titre;
      block.appendChild(titre);

      let auteurice = document.createElement("span");
      auteurice.className = "pro";
      auteurice.innerHTML = row.Auteurice;
      block.appendChild(auteurice);

      table.appendChild(block);


    });
  });
  

const grid = document.querySelector('.grid')

function createData() {
  console.log(websites)

  websites.forEach(function (websites) {

    if (websites.type == "title") {
      let block = document.createElement("div");
      block.className = websites.status;

      let title = document.createElement("h2");
      title.innerHTML = websites.title;
      block.className = 'blockTitle ' + websites.status + '';
      block.appendChild(title);

      grid.appendChild(block);
    }

    else if (websites.type == "project") {
      let block = document.createElement("div");
      block.className = 'block ' + websites.status + ' ' + websites.visibility +'';
      
      let title = document.createElement("h2");
      title.innerHTML = websites.title;
      block.appendChild(title);
      
      let blockURL = document.createElement("a");
      blockURL.setAttribute("href", websites.url);
      blockURL.setAttribute("target", '_blank');

      let image = document.createElement("img");
      image.src = 'assets/thumbnails/websites/' + websites.image + '.png';
      blockURL.appendChild(image);
      block.appendChild(blockURL);

      let year = document.createElement("span");
      year.innerHTML = websites.year;
      block.appendChild(year);

      grid.appendChild(block);
    }

  });
}

createData()




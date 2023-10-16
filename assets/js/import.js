const grid = document.querySelector('.grid')

function createData() {
  console.log(websites)

  websites.forEach(function (websites) {

    if (websites.status == "blockTitle") {
      let block = document.createElement("div");
      block.className = websites.status;

      let title = document.createElement("h2");
      title.innerHTML = websites.title;
      block.appendChild(title);

      grid.appendChild(block);
    }

    else {

      let block = document.createElement("a");
      block.className = 'block ' + websites.status + '';
      block.setAttribute("href", websites.url);

      let title = document.createElement("h2");
      title.innerHTML = websites.title;
      block.appendChild(title);

      let image = document.createElement("img");
      image.src = 'assets/thumbnails/websites/' + websites.image + '.png';
      block.appendChild(image);

      let year = document.createElement("span");
      year.innerHTML = websites.year;
      // block.appendChild(year);

      grid.appendChild(block);
    }

  });
}

createData()




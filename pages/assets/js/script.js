const grid = document.querySelector('.grid')

function init () {
  createData()
}

function createData() {
  console.log(allData)

  allData.forEach(function (allData) {
    let block = document.createElement("a");
    block.className = 'block ' + allData.status + '';
    block.setAttribute("href", allData.url);

    let title = document.createElement("h2");
    title.innerHTML = allData.title;
    block.appendChild(title);

    let image = document.createElement("img");
    image.src = 'img' + allData.url + '.png';
    block.appendChild(image);

    let year = document.createElement("span");
    year.innerHTML = allData.year;
    // block.appendChild(year);

    grid.appendChild(block);
  });
}

init()



// THIS IS ABOUT THE PASSWORD
const secret = document.querySelectorAll('.secret')


// here when the passwords matchs it show the hidden
function showSecrets() {
  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.add("show");
  }
}

// the password script
function clickPress(event) {
  if (event.key == "Enter") {
    const passw = "23";
    if (document.form.texte.value.match(passw)) {
      showSecrets()
      document.querySelector('#texte').classList.remove('badpass');
      document.querySelector('.contenu').style.display = 'block';
      document.querySelector('#texte').value = 'YES!';

    }
    else {
      document.querySelector('#texte').classList.add('badpass');
      document.querySelector('#texte').value = 'NOPE';
      document.querySelector('.contenu').style.display = 'none';
    }
  }
}

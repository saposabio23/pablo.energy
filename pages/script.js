const table = document.querySelector('tbody')

function init () {
  createData()
  
  var table = document.getElementById('data');
  var sort = new Tablesort(table);
  // new Tablesort(table), {
  //   descending: false
  // };

}

function createData() {
  console.log(allData)

  allData.forEach(function (allData) {
    let dataTitle = allData.title;
    let dataUpdated = allData.updated;
    let dataURL = allData.url;
    let dataDescription = allData.description;


    let block = document.createElement("tr");
    block.className = allData.status;
    block.setAttribute("onClick", "location.href='" + allData.url + "'");



    let updated = document.createElement("td");
    updated.innerHTML = allData.updated;
    block.appendChild(updated);

    let title = document.createElement("td");
    title.innerHTML = allData.title;
    title.id = 'change';
    block.appendChild(title);

    let description = document.createElement("td");
    description.innerHTML = allData.description;
    block.appendChild(description);

    table.appendChild(block);
  });


}

// var arrowUp1 = document.querySelector('.normalArrow1')

// function invertArrow () {
//   arrowUp1.classList.toggle("invertArrow");
// }
// arrowUp1.addEventListener('click', invertArrow);


function invertArrow(e) {
  e.classList.toggle("invertArrow");
}



init()

/* --------------PASSW------------- */
var $enquin = document.querySelector('.enter');
const secret = document.querySelectorAll('.secret')

function showSecrets() {
  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.add("show");
  }
}

function clickPress(event) {
  if (event.key == "Enter") {
    const passw = "23";
    if (document.form.texte.value.match(passw)) {
      showSecrets()
      document.querySelector('#texte').classList.remove('badpass');
      document.querySelector('.contenu').style.display = 'block';

    }
    else {
      document.querySelector('#texte').classList.add('badpass');
      document.querySelector('#texte').value = '⊙.☉';
      document.querySelector('.contenu').style.display = 'none';
    }
  }
}


document.addEventListener("keypress", function (event) {
  if (event.keyCode == 83) {
    showSecrets()
  }
});
/* --------------EACH COLOR------------- */

const table = document.querySelector('tbody')

function init() {
  console.log(allData)

  allData.forEach(function (allData) {
    let dataTitle = allData.title;
    let dataUpdated = allData.updated;
    let dataURL = allData.url;
    let dataDescription = allData.description;


    let block = document.createElement("tr");
    block.className = allData.status;

    let updated = document.createElement("th");
    updated.innerHTML = allData.updated;
    block.appendChild(updated);

    let title = document.createElement("th");
    title.innerHTML = allData.title;
    title.id = 'change';
    block.appendChild(title);


    let url = document.createElement("th");
    url.innerHTML = "<a href=" + allData.url + ">☞</a>"
    block.appendChild(url);

    let description = document.createElement("th");
    description.innerHTML = allData.description;
    block.appendChild(description);

    table.appendChild(block);

  });
}

new Tablesort(document.getElementById('music'));


init()

/* --------------PASSW------------- */
var $enquin = document.querySelector('.enter');
const secret = document.querySelectorAll('.secret')

function showSecrets() {
  for(let i = 0, max = secret.length; i < max; i++){
    secret[i].classList.add("show");
  }
}

function clickPress(event) {
    if (event.key == "Enter") {
        var passw = "sagesse";
        if(document.form.texte.value.match(passw)) { 
          showSecrets()
        }
        else { 
            document.querySelector('.enter').classList.add("hide");
            // setTimeout(function(){
            //     window.location.reload();
            // }, 1000);
        }
    }
}


document.addEventListener("keypress", function(event) {
  if (event.keyCode == 83) {
    showSecrets()
  }
});
/* --------------EACH COLOR------------- */

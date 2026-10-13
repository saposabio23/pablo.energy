console.log('Handmade by Pablo Moreno ⚡️ www.pablo.energy ⚡️ september 2023')


function convertToImageLink(link) {
  const match = link.match(/\/d\/([^\/]+)\//);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  } else {
    return "Invalid Google Drive link";
  }
}


var rotateGadget = document.getElementById('rotateGadget');
var content = document.querySelector('.content');

function launchGrid() {
  let fountain = document.createElement("div");
  fountain.className = 'fountain';
  document.body.appendChild(fountain)
  fountain.style.transform = "translate(0px, " + window.innerHeight + "px)";


  fetch(
    "https://opensheet.elk.sh/1IFYgWa27f1VhCskcDEsuCo40eLTc1djdonULdSEGX6Q/DATA")
    .then((res) => res.json())
    .then((data) => {

      newData = data.concat(emptydata);

      function shuffle(newData) {
        let currentIndex = newData.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [newData[currentIndex], newData[randomIndex]] = [
            newData[randomIndex], newData[currentIndex]];
        }

        return newData;
      }

      shuffle(newData);
      // console.log(newData);


      newData.forEach((row) => {
        if (row.Type == "empty") {
          let grid = document.createElement("div");
          grid.className = row.Type;
          fountain.appendChild(grid);
        }

        else if (row.Type == "Text") {
          let grid = document.createElement("div");
          grid.className = row.Category + ' ' + row.People1 + ' ' + row.People2 + ' ' + row.People3 + ' ' + row.People4;
          grid.setAttribute("data-type", row.Type);

          let thumbnail = document.createElement("p");
          thumbnail.innerHTML = row.Description;
          grid.appendChild(thumbnail);

          fountain.appendChild(grid);

          thumbnail.addEventListener('click', (event) => {
            createBlock(row)
            sound.play();
          })

          // highlightCategory(row, thumbnail)
        }

        else {
          let grid = document.createElement("div");
          grid.className = row.Category + ' ' + row.People1 + ' ' + row.People2 + ' ' + row.People3 + ' ' + row.People4;
          grid.setAttribute("data-type", row.Type);

          let thumbnail = document.createElement("img");
          thumbnail.src = convertToImageLink(row.Image);

          grid.appendChild(thumbnail);

          fountain.appendChild(grid);

          thumbnail.addEventListener('click', (event) => {
            createBlock(row)
            sound.play();
          })

          // highlightCategory(row, thumbnail)
        }
      });
    });
}

// FOUNTAIN -> HIGHLIGHT CATEGORY BLOCKS
// function highlightCategory(row, thumbnail) {
//   thumbnail.addEventListener('mouseenter', function (e) {
//     if (row.Category == 'Reference') {
//       document.getElementById('bubbleReference').classList.add('selection')
//     }
//     else if (row.Category == 'Material') {
//       document.getElementById('bubbleMaterial').classList.add('selection')
//     }
//     else if (row.Category == 'Storyline') {
//       document.getElementById('bubbleStoryline').classList.add('selection')
//     }
//     else if (row.Category == 'Process') {
//       document.getElementById('bubbleProcess').classList.add('selection')
//     }
//     else if (row.Category == 'Final') {
//       document.getElementById('bubbleFinal').classList.add('selection')
//     }
//   })

//   thumbnail.addEventListener('mouseleave', function (e) {
//     document.getElementById('bubbleReference').classList.remove('selection')
//     document.getElementById('bubbleStoryline').classList.remove('selection')
//     document.getElementById('bubbleMaterial').classList.remove('selection')
//     document.getElementById('bubbleProcess').classList.remove('selection')
//     document.getElementById('bubbleFinal').classList.remove('selection')
//   })
// }



// CONTENT -> CREATE BLOCKS
function createBlock(row) {
  if (row.Type == 'Text') {
    let block = document.createElement("div");
    block.className = 'block ' + row.Type;

    let headerBlock = document.createElement("div");
    headerBlock.className = 'headerBlock';
    block.appendChild(headerBlock)

    let title = document.createElement("h2");
    title.innerHTML = row.Title;
    headerBlock.appendChild(title)

    if (row.Description != 'undefined') {
      let description = document.createElement("p");
      description.innerHTML = row.Description;
      block.appendChild(description)
    }

    aditionalElements(row, block)
  }

  if (row.Type == 'Image') {
    let block = document.createElement("div");
    block.className = 'block ' + row.Type;

    let headerBlock = document.createElement("div");
    headerBlock.className = 'headerBlock';
    block.appendChild(headerBlock)

    let title = document.createElement("h2");
    title.innerHTML = row.Title;
    headerBlock.appendChild(title)

    let source = document.createElement("img");
    source.src = convertToImageLink(row.Image);
    block.appendChild(source)

    if (row.Description != 'undefined') {
      let description = document.createElement("p");
      description.innerHTML = row.Description;
      block.appendChild(description)
    }

    aditionalElements(row, block)

  }

  if (row.Type == 'Video') {
    let block = document.createElement("div");
    block.className = 'block ' + row.Type;

    let title = document.createElement("h2");
    title.innerHTML = row.Title;
    block.appendChild(title)

    let video = document.createElement("video");
    video.setAttribute("controls", '');
    let source = document.createElement("source");
    source.src = 'video/' + row.Title + '.mp4';
    source.setAttribute("type", 'video/mp4');
    video.appendChild(source)
    block.appendChild(video)

    if (row.Description != 'undefined') {
      let description = document.createElement("p");
      description.innerHTML = row.Description;
      block.appendChild(description)
    }

    aditionalElements(row, block)
  }
}

// CONTENT -> ADDITONAL CONTENT FOR BLOCKS
var numbersOfBlock = 0;

function aditionalElements(row, block) {

  let headerPeople = document.createElement("div");
  headerPeople.className = 'headerInfos';
  block.appendChild(headerPeople)

  let peopleTitle = document.createElement("h4");
  peopleTitle.innerHTML = 'People:';
  headerPeople.appendChild(peopleTitle)

  if (row.People1 != '') {
    let people1 = document.createElement("span");
    people1.innerHTML = row.People1;
    headerPeople.appendChild(people1)
  }

  if (row.People2 != '') {
    let people2 = document.createElement("span");
    people2.innerHTML = row.People2;
    headerPeople.appendChild(people2)
  }

  if (row.People3 != '') {
    let people3 = document.createElement("span");
    people3.innerHTML = row.People3;
    headerPeople.appendChild(people3)
  }

  if (row.People4 != '') {
    let people4 = document.createElement("span");
    people4.innerHTML = row.People4;
    headerPeople.appendChild(people4)
  }

  let headerplace = document.createElement("div");
  headerplace.className = 'headerInfos';
  block.appendChild(headerplace)

  let placeTitle = document.createElement("h4");
  placeTitle.innerHTML = 'Place:';
  headerplace.appendChild(placeTitle)

  let place = document.createElement("span");
  place.innerHTML = row.Places;
  headerplace.appendChild(place)

  let closeButton = document.createElement("span");
  closeButton.id = 'closeButton';
  closeButton.innerHTML = '×';
  block.appendChild(closeButton)

  closeButton.addEventListener('click', function (e) {
    numbersOfBlock -= 1;
    document.getElementById('cleanCounter').innerHTML = '(' + numbersOfBlock + ')'
    block.remove();
  })

  numbersOfBlock++;
  document.getElementById('cleanCounter').innerHTML = '(' + numbersOfBlock + ')'

  content.prepend(block)

  // SCROLL TO THE CURRENT BLOCK
  content.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  // block.scrollIntoView({ behavior: "smooth" });

  // PAUSE WEHN HOVER THE DIVS
  // block.addEventListener('mouseenter', function (e) {
  //   pauseScroll();
  //   fountain.style.opacity = 0.3;
  // })
  // block.addEventListener('mouseleave', function (e) {
  //   playScroll();
  //   fountain.style.opacity = 1;
  // })
};


// MENU -> CLEAN BLOCKS
function cleanBlocks() {
  numbersOfBlock = 0;
  document.getElementById('cleanCounter').innerHTML = '(' + numbersOfBlock + ')'
  var elements = document.querySelectorAll('.block');
  magic.play();
  for (let i = 0, max = elements.length; i < max; i++) {
    elements[i].remove();
  }
}

addEventListener("keydown", (event) => {
  if (event.which == 27 || event.keyCode == 27) {
    cleanBlocks();
    document.getElementById('buttonClean').classList.add('kicked')
    setTimeout(() => {
      document.getElementById('buttonClean').classList.remove('kicked')
    }, 150);
  }
});



// OPTIONS -> TOGGLE CATEGORIES THUMBNAILS

function toggleCategories(e) {
  var elements = document.querySelectorAll('.' + e.name);
  var empty = document.querySelectorAll('.empty');
  // console.log(e.name)
  if (document.getElementById(e.id).checked) {
    for (let i = 0, max = elements.length; i < max; i++) {
      elements[i].style.opacity = '1';
    }
  } else {
    for (let i = 0, max = elements.length; i < max; i++) {
      elements[i].style.opacity = '0';
    }
  }
}

function checkCategories(e) {
  var elm = document.getElementById('check' + e.id);
  elm.click();
  button.play();
}


// Black and white interface switch
let root = document.body;
let switched = false;

function switchColors() {
  if (switched == false) {
    root.style.setProperty('--color-primary', 'snow')
    root.style.setProperty('--color-secondary', '#40403d')
    switched = true;
  }
  else if (switched == true) {
    root.style.setProperty('--color-primary', '#40403d')
    root.style.setProperty('--color-secondary', 'snow')
    switched = false;
  }
}

addEventListener("keydown", (event) => {
  if (event.which == 83 || event.keyCode == 83) {
    switchColors()
    document.getElementById('buttonSwitch').classList.add('kicked')
    setTimeout(() => {
      document.getElementById('buttonSwitch').classList.remove('kicked')
    }, 150);
  }
});


// FOUNTAIN -> AUTOSCROLL 
var time = window.innerHeight;
var rotate = 0;
var isPaused = false;
let interval = 30;

// console.log(time)

function stateScroll() {
  if (isPaused == true) {
    isPaused = false;
    document.getElementById('buttonPlay').innerHTML = "PAUSE"
  }
  else if (isPaused == false) {
    isPaused = true;
    document.getElementById('buttonPlay').innerHTML = "RESUME"
  }
}

function startScroll() {
  var fountain = document.querySelector('.fountain')
  let fountainHeight = ((fountain.offsetHeight) * -1);
  // console.log('Fountain height:', fountainHeight)
  // console.log('Window height:', time)

  setInterval(function () {
    if (!isPaused) {
      fountain.style.transform = "translate(0px, " + time + "px)";
      time -= 1;

      rotateGadget.style.transform = "rotate(" + rotate + "deg)";
      rotate += 0.1;

      if (time === fountainHeight) {
        isPaused = true;
        rotateGadget.classList.remove('fade')
        document.querySelector('.background > div').classList.remove('erase')
      }
    }
  }, interval);
}

addEventListener("keydown", (event) => {
  if (event.which == 32 || event.keyCode == 32) {
    stateScroll()
    document.getElementById('buttonPlay').classList.add('kicked')
    setTimeout(() => {
      document.getElementById('buttonPlay').classList.remove('kicked')
    }, 150);
  }
});


// START ALL
function start() {
  startScroll();
  document.querySelector('.secondBack').style.display = "block";
  document.getElementById('buttonStart').style.display = "none";
  document.getElementById('buttonPlay').style.display = "block";


  rotateGadget.classList.add('fade')
  document.querySelector('.background > div').classList.add('erase')
}

launchGrid();

// function restarGrid() {
//   document.querySelector('.fountain').remove();
//   launchGrid()
// }

// let links = document.createElement("div");
// links.className = 'links'
// let linksTitle = document.createElement("h3");
// linksTitle.innerHTML = 'Linked';
// links.appendChild(linksTitle)

// let link1 = document.createElement("button");
// link1.className = 'link'
// link1.innerHTML = row.Link1;
// link1.setAttribute("data-linked", row.Link1);
// links.appendChild(link1)

// let link2 = document.createElement("button");
// link2.className = 'link'
// link2.innerHTML = row.Link2;
// link2.setAttribute("data-linked", row.Link2);
// links.appendChild(link2)
// let link3 = document.createElement("button");
// link3.className = 'link'
// link3.innerHTML = row.Link3;
// link3.setAttribute("data-linked", row.Link3);
// links.appendChild(link3)

// block.appendChild(links)




// CREATE LINKED BLOCKS
// document.addEventListener('click', function (e) {
//   if (e.target.className == "link") {
//     var lookingFor = e.target.getAttribute("data-linked")

//     console.log(lookingFor)

//     if (row.Title === lookingFor) {
//       createBlock(title)
//   }
// }
// })




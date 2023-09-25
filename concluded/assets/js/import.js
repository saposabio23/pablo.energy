var rotateGadget = document.getElementById('rotateGadget');
var content = document.querySelector('.content');

function launchGrid() {

  let fountain = document.createElement("div");
  fountain.className = 'fountain';
  document.body.appendChild(fountain)
  fountain.style.transform = "translate(0px, " + window.innerHeight + "px)";

  fetch(
    "https://opensheet.elk.sh/1sG8P53DdMyHYQpMc0FDwDGlAIfYBYydFn-hpZKs5RQU/1")
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
      console.log(newData);


      newData.forEach((row) => {
        if (row.Type == "empty") {
          let grid = document.createElement("div");
          grid.className = row.Type;
          fountain.appendChild(grid);
        }

        else if (row.Type == "Text") {
          let grid = document.createElement("div");
          grid.className = row.Category;
          grid.setAttribute("data-type", row.Type);

          let thumbnail = document.createElement("p");
          thumbnail.innerHTML = row.Description;
          grid.appendChild(thumbnail);

          fountain.appendChild(grid);

          thumbnail.addEventListener('click', (event) => {
            createBlock(row)
            sound.play();
          })

          highlightCategory(row, thumbnail)
        }

        else {
          let grid = document.createElement("div");
          grid.className = row.Category;
          grid.setAttribute("data-type", row.Type);

          let thumbnail = document.createElement("img");
          thumbnail.src = 'img/' + row.Thumbnail;
          grid.appendChild(thumbnail);

          fountain.appendChild(grid);

          thumbnail.addEventListener('click', (event) => {
            createBlock(row)
            sound.play();
          })

          highlightCategory(row, thumbnail)

        }
      });
    });


}

var numbersOfBlock = 0;

function aditionalElements(block) {
  numbersOfBlock++;
  document.getElementById('cleanCounter').innerHTML = '(' + numbersOfBlock + ')'

  let closeButton = document.createElement("span");
  closeButton.id = 'closeButton';
  closeButton.innerHTML = '×';
  block.appendChild(closeButton)

  closeButton.addEventListener('mouseenter', function (e) {
    block.style.backgroundColor = 'black'
  })

  closeButton.addEventListener('mouseleave', function (e) {
    block.style.backgroundColor = 'var(--color-secondary)'
  })

  closeButton.addEventListener('click', function (e) {
    numbersOfBlock -= 1;
    document.getElementById('cleanCounter').innerHTML = '(' + numbersOfBlock + ')'
    block.remove();
  })

  content.appendChild(block)

  // SCROLL TO THE CURRENT BLOCK
  block.scrollIntoView({ behavior: "smooth" });

  // PAUSE WEHN HOVER THE DIVS
  // block.addEventListener('mouseenter', function (e) {
  //   pauseScroll();
  //   fountain.style.opacity = 0.3;
  // })
  // block.addEventListener('mouseleave', function (e) {
  //   playScroll();
  //   fountain.style.opacity = 1;
  // })
}


function highlightCategory(row, thumbnail) {
  thumbnail.addEventListener('mouseenter', function (e) {
    if (row.Category == 'Reference') {
      document.getElementById('bubbleReference').classList.add('selection')
    }
    else if (row.Category == 'Material') {
      document.getElementById('bubbleMaterial').classList.add('selection')
    }
    else if (row.Category == 'Storyline') {
      document.getElementById('bubbleStoryline').classList.add('selection')
    }
    else if (row.Category == 'Process') {
      document.getElementById('bubbleProcess').classList.add('selection')
    }
    else if (row.Category == 'Final') {
      document.getElementById('bubbleFinal').classList.add('selection')
    }
  })


  thumbnail.addEventListener('mouseleave', function (e) {
    document.getElementById('bubbleReference').classList.remove('selection')
    document.getElementById('bubbleStoryline').classList.remove('selection')
    document.getElementById('bubbleMaterial').classList.remove('selection')
    document.getElementById('bubbleProcess').classList.remove('selection')
    document.getElementById('bubbleFinal').classList.remove('selection')
  })
}

function createBlock(row) {
  if (row.Type == 'Text') {
    let block = document.createElement("div");
    block.className = 'block ' + row.Type;

    let title = document.createElement("h2");
    title.innerHTML = row.Title;
    block.appendChild(title)

    let description = document.createElement("p");
    description.innerHTML = row.Description;
    block.appendChild(description)

    aditionalElements(block)
  }

  if (row.Type == 'Image') {
    let block = document.createElement("div");
    block.className = 'block ' + row.Type;

    let title = document.createElement("h2");
    title.innerHTML = row.Title;
    block.appendChild(title)

    let source = document.createElement("img");
    source.src = 'img/' + row.Source;
    block.appendChild(source)

    let description = document.createElement("p");
    description.innerHTML = row.Description;
    block.appendChild(description)

    aditionalElements(block)

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
    source.src = 'video/' + row.Source;
    source.setAttribute("type", 'video/mp4');
    video.appendChild(source)
    block.appendChild(video)

    aditionalElements(block)
  }
}


// TOGGLE CATEGORIES THUMBNAILS
function toggleCategories(e) {
  var elements = document.querySelectorAll('.' + e.name);
  console.log(e.name)
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
}


function cleanBlocks() {
  numbersOfBlock = 0;
  document.getElementById('cleanCounter').innerHTML = '(' + numbersOfBlock + ')'
  var elements = document.querySelectorAll('.block');
  for (let i = 0, max = elements.length; i < max; i++) {
    elements[i].remove();
  }
}

// AUTOSCROLL FOUNTAIN OF IMAGES
var time = window.innerHeight;
var rotate = 0;
var isPaused = false;
let interval = 30;

console.log(time)


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
  console.log('Fountain height:', fountainHeight)
  console.log('Window height:', time)

  setInterval(function () {
    if (!isPaused) {
      fountain.style.transform = "translate(0px, " + time + "px)";
      time -= 1;

      rotateGadget.style.transform = "rotate(" + rotate + "deg)";
      rotate += 0.5;
      
      if (time === fountainHeight) {
        isPaused = true;
        rotateGadget.classList.remove('fade')
        document.querySelector('.background > p').classList.remove('fade')
      }
    }
    else {
      rotateGadget.style.transform = "rotate(" + rotate + "deg)";
      
    }
  }, interval);
}

addEventListener("keydown", (event) => {
  if (event.which == 32 || event.keyCode == 32) {
    stateScroll()
  }
});


function start() {
  startScroll();

  let secondBack = document.createElement("div");
  secondBack.className = 'secondBack';
  document.body.appendChild(secondBack)

  document.querySelector('.header').style.display = "flex";

  rotateGadget.classList.add('fade')
  document.querySelector('.background > p').classList.add('fade')
  rotateGadget.style.userSelect = 'none'

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
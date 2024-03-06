var shopTable = document.getElementById("shopTable");

fetch(
  "https://opensheet.elk.sh/1f5F1M_eIH_IFg_5RgsQpyFBgDvgUMj5ftBVggb5Rkj0/PRODUCTS"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      let productBlock = document.createElement("div");
      productBlock.className = "productBlock " + row.Category;

      let productCover = document.createElement("img");
      productCover.src = row.Images;
      productCover.setAttribute("crossorigin", "anonymous");
      productBlock.appendChild(productCover);

      let productInfos = document.createElement("div");
      productBlock.appendChild(productInfos);

      let productTitle = document.createElement("h3");
      productTitle.innerHTML = row.Title;
      productInfos.appendChild(productTitle);

      let productPrice = document.createElement("span");
      productPrice.innerHTML = row.Price + "€";
      productInfos.appendChild(productPrice);

      let productLink = document.createElement("a");
      productLink.href = row.Link;
      productLink.innerHTML = "<button>BUY 💸!</button>";
      productInfos.appendChild(productLink);

      shopTable.appendChild(productBlock);
    });
  });

function showAll() {
  var element = document.querySelectorAll(".productBlock");
  for (let i = 0, max = element.length; i < max; i++) {
    element[i].style.display = "block";
  }
}

function showRings() {
  var rings = document.querySelectorAll(".ring");
  for (let i = 0, max = rings.length; i < max; i++) {
    rings[i].style.display = "block";
  }
  var bubbles = document.querySelectorAll(".bubble");
  for (let i = 0, max = bubbles.length; i < max; i++) {
    bubbles[i].style.display = "none";
  }
}

function showBubbles() {
  var bubbles = document.querySelectorAll(".bubble");
  for (let i = 0, max = bubbles.length; i < max; i++) {
    bubbles[i].style.display = "block";
  }
  var rings = document.querySelectorAll(".ring");
  for (let i = 0, max = rings.length; i < max; i++) {
    rings[i].style.display = "none";
  }
}

// POUR MÉLANGER LA data ALÉATOIREMENET À CAHQUE RECHARGEMENT

// newData = data.concat(emptydata);

// function shuffle(newData) {
//   let currentIndex = newData.length, randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex > 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [newData[currentIndex], newData[randomIndex]] = [
//       newData[randomIndex], newData[currentIndex]];
//   }

//   return newData;
// }

// shuffle(newData);

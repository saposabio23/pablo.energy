// REAR CAMERA PHONE

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var onAR = false;

function launchAR() {
  if (onAR == true) {
    var video = document.getElementById("video");
    video.remove();
    onAR = false;
    document.getElementById("ARbutton").innerHTML = "Voir en R.A";
  } else {
    let videoAR = document.createElement("video");
    videoAR.id = "video";
    videoAR.setAttribute("autoplay", "");
    document.body.appendChild(videoAR);

    const constraints = {
      video: {
        facingMode: "environment",
      },
    };

    var video = document.getElementById("video"),
      vendorURL = window.URL || window.webkitURL;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.log("Something went wrong");
        });
    }

    onAR = true;
    document.getElementById("ARbutton").innerHTML = "Quitter la R.A";
    console.log(onAR);
  }
}

// CHANGE BACKGROUNDS
let objects = [
  {
    title: "Trépied 180cm",
    image: "tripode.png",
    price: "10",
    text: "mailto:ehtomer@gmail.com?subject=VENTE D'OBJETS&body=Bonjour Pablo! Le trépied que tu as mis en vente m'intéresse. AIl est toujours dispo?%0D%0A%0D%0AJe crois voir que tu peux mettre une appareil photo directement sur lui, sans avoir besoin de fixation, c'est cool!%0D%0A %0D%0ABonne journée!",
  },
  {
    title: "Machine à yahourt",
    image: "yogurtera.png",
    price: "10",
    text: "mailto:ehtomer@gmail.com?subject=VENTE D'OBJETS&body=Salut Pablo,%0D%0A%0D%0AJ'ai vu ta machine à yahourts, et je voudrais bien l'acheter pour en faire chez moi.%0D%0AEn plus je sais qu'on peut ajouter des saveurs avant de les faire pour qu'ils soient déjà sucrés ou vanillés.%0D%0A %0D%0AJ'attends ta réponse!",
  },
  {
    title: "Chaise bureau",
    image: "silla.png",
    price: "35",
    text: "mailto:ehtomer@gmail.com?subject=VENTE D'OBJETS&body=Salut Pablo,%0D%0A%0D%0AJ'ai vu que tu vendais de choses et j'aimerais acheter ta chaise de bureau, histoire d'être mieux pour bosser chez moi.%0D%0A %0D%0ATu me diras. Salut!",
  },
];

var currentObject = 0;

function nextObject() {
  currentObject++;
  if (currentObject < objects.length) {
    loadNext();
  } else {
    currentObject = 0;
    loadNext();
  }
  console.log(currentObject);
}

function previousObject() {
  currentObject--;
  if (currentObject < 0) {
    currentObject = objects.length - 1;
    loadPrevious();
  } else {
    loadPrevious();
  }
  console.log(currentObject);
}

function loadNext() {
  document.getElementById("objectImage").classList.add("imageGo");
  document.getElementById("objectImage").classList.remove("imageMove");

  setTimeout(function () {
    document.getElementById("objectImage").classList.remove("imageGo");
    document.getElementById("objectImage").classList.add("hidden");
    updateObject();
    setTimeout(function () {
      document.getElementById("objectImage").classList.remove("hidden");
      setTimeout(function () {
        document.getElementById("objectImage").classList.add("imageMove");
      }, 100);
    }, 100);
  }, 100);
}

function loadPrevious() {
  document.getElementById("objectImage").classList.remove("imageMove");

  setTimeout(function () {
    document.getElementById("objectImage").classList.add("imageGo");
    document.getElementById("objectImage").classList.add("hidden");
    updateObject();

    setTimeout(function () {
      document.getElementById("objectImage").classList.remove("hidden");
      setTimeout(function () {
        document.getElementById("objectImage").classList.remove("imageGo");

        document.getElementById("objectImage").classList.add("imageMove");
      }, 100);
    }, 100);
  }, 100);
}

function updateObject() {
  const currentItem = objects[currentObject];
  document.getElementById("objectTitle").innerHTML = currentItem.title;
  document.getElementById("objectPrice").innerHTML = currentItem.price + "€";
  document.getElementById("objectImage").src = "media/" + currentItem.image;
  document.getElementById("index").innerHTML = currentObject + 1;
  document.getElementById("emailButton").setAttribute("href", currentItem.text);
}
window.addEventListener("load", (event) => {
  document.getElementById("indexLenght").innerHTML = objects.length;
  updateObject();
  document.getElementById("objectImage").classList.add("imageMove");
});

// CHANGE  BACKGROUND

// function changeBackground() {
//   for (let i = 0, max = bgButtons.length; i < max; i++) {
//     bgButtons[i].classList.remove("bgSelected");
//   }

//   number = e.getAttribute("data-bg");
//   document.querySelector(".bg").style.backgroundImage =
//     "url(media/" + number + ".JPG)";
//   e.classList.add("bgSelected");
// }

const bgList = ["bg-sol.JPG", "bg-table.JPG", "bg-air.JPG"];

// Variable to keep track of the current index
let currentIndex = 0;

function changeBackground() {
  if (onAR == true) {
    var video = document.getElementById("video");
    video.remove();
    onAR = false;
    document.getElementById("ARbutton").innerHTML = "Voir en RA";
  }
  if (currentIndex < bgList.length) {
    const currentItem = bgList[currentIndex];
    document.querySelector(".bg").style.backgroundImage =
      "url(media/" + currentItem + ")";
    currentIndex++;
  } else {
    currentIndex = 0;
    changeBackground();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    changeBackground();
  } else if (event.code === "ArrowRight") {
    event.preventDefault();
    nextObject();
  } else if (event.code === "ArrowLeft") {
    event.preventDefault();
    previousObject();
  }
});

// var MAX_IMAGE_WIDTH = 200; // repalce magic number with const
// var MAX_IMAGE_HEIGHT = 150;   // repalce magic number with const
// var docWidth = document.body.clientWidth;  //replace $(document).width()
// var docHeight = document.body.clientHeight || 500;  //Note: document.body.clientHeight returns 0 in this envorment, in browser will be actaul height, setting defalult value of 500
// // prevent negitve values that could place your image off screen
// var maxWidth = Math.max(0, docWidth - MAX_IMAGE_WIDTH);
// var maxHeight = Math.max(0, docHeight - MAX_IMAGE_HEIGHT);

// var image = [ //set innital values and prevent variable hoisiting
//      "media/banco.png",
//      "media/silla.png",
//      "media/rangements.png",
//      "media/yogurtera.png",
//      "media/tripode.png",
// ];

// function getImage(src, top, left) {
//      var imgElement = document.createElement("img");
//      imgElement.classList.add("objects");
//      imgElement.src = src;
//      imgElement.style.top = top + 'px';
//      imgElement.style.left = left + 'px';
//      imgElement.style.position = 'absolute';

//      return imgElement;
// }

// console.log(image)

// function start() {
//      for (let i = 0, max = image.length; i < max; i++) {
//           var left_position = (Math.random() * maxWidth).toFixed();
//           //Assume you wanted height and not width
//           var top_position = (Math.random() * maxHeight).toFixed();
//           var imgEl = getImage(image[i], top_position, left_position);
//           document.body.appendChild(imgEl);
//      }
// }

// start()

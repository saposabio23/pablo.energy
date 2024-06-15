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
    title: "Trépied photo 180cm",
    image: "tripode.png",
    price: "7€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Machine à yahourt",
    image: "yahourtiere.png",
    price: "7€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Chaise de bureau",
    image: "silla.png",
    price: "30€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Super bouilloire",
    image: "bouilloire.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Cafétières",
    image: "cafe.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Appareil photo digital Pentax-Q",
    image: "camera.png",
    price: "50€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Tapis jaune 120x180cm",
    image: "carpet2.png",
    price: "10€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Clavier QWERTY :(",
    image: "clavier.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Cocotte minute",
    image: "cocotte.png",
    price: "10€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Cassier coloré 60x60x40cm",
    image: "couleurs.png",
    price: "10€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Écran Dell 19' avec super barre son",
    image: "ecran.png",
    price: "30€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Étagère de l'enfer 90x105x30cm",
    image: "libreria.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Planche en bois 110x60cm",
    image: "planche.png",
    price: "10€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Poiles diverses et variées",
    image: "poiles.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Banc/table, 25x90x1,5cm  (par moi!)",
    image: "banco.png",
    price: "10€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Lampe métal flexible Ikea",
    image: "ikea.png",
    price: "4€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Ce truc, je ne sais pas comment ça s'appelle, un bateur?",
    image: "rapido.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Rice-cooker!",
    image: "ricecoocker.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Tabouret-arbre",
    image: "tabouret.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Tabouret Bahaus (par moi!)",
    image: "tabouretbahaus.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Téière familiale",
    image: "teiere.png",
    price: "7€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Tourne disque DENON DP-297 (besoin du diamant, il coûte 20€!)",
    image: "tournedisque.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Traiteau avec extension",
    image: "traiteau.png",
    price: "7€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Xylophone de quand enfant",
    image: "xylophone.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Matela fin funky",
    image: "matelasfin.png",
    price: "5€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
  {
    title: "Vrai matelas cool",
    image: "matelascool.png",
    price: "10€",
    text: "sms://+33646316609;?&Cher Pablo, ",
  },
];

function shuffle(objects) {
  let currentObjects = objects.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentObjects > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentObjects);
    currentObjects--;

    // And swap it with the current element.
    [objects[currentObjects], objects[randomIndex]] = [
      objects[randomIndex],
      objects[currentObjects],
    ];
  }

  return objects;
}

shuffle(objects);
console.log(objects);

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
  document.getElementById("objectPrice").innerHTML =
    '<a href="https://buy.stripe.com/aEU6sf9gd0F0bVC5km" target="_blank">' +
    currentItem.price +
    "</a>";
  document.getElementById("objectImage").src = "media/" + currentItem.image;
  document.getElementById("index").innerHTML = currentObject + 1;
  document.getElementById("emailButton").setAttribute("href", currentItem.text);
}
window.addEventListener("load", (event) => {
  document.getElementById("indexLenght").innerHTML = objects.length;
  updateObject();
  document.getElementById("objectImage").classList.add("imageMove");
});

// IMAGE RESIZE BY RANGE
const slider = document.getElementById("slider");
const image = document.getElementById("objectImage");

function resizeImage() {
  const newSize = slider.value + "%";
  image.style.height = newSize;
}
slider.addEventListener("input", resizeImage);

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
      "url(" + currentItem + ")";
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
    document.getElementById("changeBg").classList.add("active");
    setTimeout(function () {
      document.getElementById("changeBg").classList.remove("active");
    }, 200);
  } else if (event.code === "ArrowRight") {
    event.preventDefault();
    nextObject();
    document.getElementById("rightArrow").classList.add("active");
    setTimeout(function () {
      document.getElementById("rightArrow").classList.remove("active");
    }, 200);
  } else if (event.code === "ArrowLeft") {
    event.preventDefault();
    previousObject();
    document.getElementById("leftArrow").classList.add("active");
    setTimeout(function () {
      document.getElementById("leftArrow").classList.remove("active");
    }, 200);
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

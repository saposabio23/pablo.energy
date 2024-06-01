// REAR CAMERA PHONE

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

function launchCamera() {
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
        video.style.zIndex = "2";
        video.srcObject = stream;
      })
      .catch(function (error) {
        console.log("Something went wrong");
      });
  }
}

// CHANGE BACKGROUNDS
const myArray = ["bg-sol.JPG", "bg-table.JPG", "bg-air.JPG"];

let objects = [
  {
    title: "Trépied 180cm",
    image: "tripode.png",
    price: "10",
  },
  {
    title: "Machine à yahourt",
    image: "yogurtera.png",
    price: "10",
  },
  {
    title: "Chaise bureau",
    image: "silla.png",
    price: "35",
  },
];

var currentObject = 0;

function nextObject() {
  currentObject++;
  console.log(currentObject);
  loadObject();
}

function previousObject() {
  currentObject--;
  console.log(currentObject);
  loadObject();
}

function loadObject() {
  if (currentObject < objects.length) {
    document.getElementById("objectImage").classList.add("imageGo");
    document.getElementById("objectImage").classList.remove("imageMove");

    setTimeout(function () {
      document.getElementById("objectImage").classList.remove("imageGo");
      const currentItem = objects[currentObject];
      document.getElementById("objectTitle").innerHTML = currentItem.title;
      document.getElementById("objectPrice").innerHTML =
        currentItem.price + "€";
      document.getElementById("objectImage").src = "media/" + currentItem.image;
      document.getElementById("index").innerHTML = currentObject + 1;
      document.getElementById("objectImage").classList.add("hidden");

      setTimeout(function () {
        document.getElementById("objectImage").classList.remove("hidden");
        setTimeout(function () {
          document.getElementById("objectImage").classList.add("imageMove");
        }, 100);
      }, 100);
    }, 100);
  } else {
    currentObject = 0;
    loadObject();
  }
}

window.addEventListener("load", (event) => {
  document.getElementById("indexLenght").innerHTML = objects.length;
  loadObject();
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

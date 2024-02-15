// /* -----------------------------------
// SOUNDS UI
// -------------------------------------- */
// const button = document.querySelectorAll('.hoverShadow');
// button.forEach(function (button) {
//     button.addEventListener('mouseenter', function () {
//         soundhover.play();
//     });
// });

// réglages welcoming

document.getElementById("commencez").addEventListener("click", (event) => {
  document.querySelector(".intro").classList.add("disappear");
  setTimeout(() => {
    document.querySelector(".intro").style.display = "none";
  }, "800");
  setTimeout(() => {
    document.querySelector(".tagList").classList.add("appears");
    document.querySelector(".tagList").style.display = "block";
  }, "800");
});

// montre about ou le chache
let header = document.querySelector("header");
let menu = document.querySelector(".menu");

let about = document.querySelector(".about");
let buttonAbout = document.getElementById("buttonAbout");
let imgAbout = document.getElementById("imgAbout");

function showabout() {
  if (about.classList.contains("hidden")) {
    menu.classList.add("menuOut");

    header.classList.add("headerAfter");

    // imgAbout.src = "assets/img/close.png";

    about.classList.remove("hidden");
    about.classList.add("show");
    buttonAbout.classList.add("checked");

    index.classList.remove("show");
    index.classList.add("hidden");
    buttonIndex.classList.remove("checked");

    history.classList.remove("show");
    history.classList.add("hidden");
    historyButton.classList.remove("checked");
  } else {
    menu.classList.remove("menuOut");

    // imgAbout.src = "assets/img/about.png";

    about.classList.remove("show");
    about.classList.add("hidden");
    buttonAbout.classList.remove("checked");
    header.classList.remove("headerAfter");
  }
}
buttonAbout.addEventListener("click", showabout);

// montre l'index ou le chache
let buttonIndex = document.getElementById("buttonIndex");

function showindex() {
  if (index.classList.contains("hidden")) {
    menu.classList.add("menuOut");

    header.classList.add("headerAfter");

    index.classList.remove("hidden");
    index.classList.add("show");
    buttonIndex.classList.add("checked");

    history.classList.remove("show");
    history.classList.add("hidden");
    historyButton.classList.remove("checked");

    about.classList.remove("show");
    about.classList.add("hidden");
    buttonAbout.classList.remove("checked");
  } else {
    menu.classList.remove("menuOut");

    index.classList.remove("show");
    index.classList.add("hidden");
    buttonIndex.classList.remove("checked");
    header.classList.remove("headerAfter");
  }
}
buttonIndex.addEventListener("click", showindex);

// montre l'historique ou le chache
let history = document.querySelector(".history");
let historyButton = document.getElementById("buttonHistory");

function showHistory() {
  if (history.classList.contains("hidden")) {
    header.classList.add("headerAfter");
    menu.classList.add("menuOut");

    history.classList.remove("hidden");
    history.classList.add("show");
    historyButton.classList.add("checked");

    about.classList.remove("show");
    about.classList.add("hidden");
    buttonAbout.classList.remove("checked");

    index.classList.remove("show");
    index.classList.add("hidden");
    buttonIndex.classList.remove("checked");
  } else {
    menu.classList.remove("menuOut");

    history.classList.remove("show");
    history.classList.add("hidden");
    historyButton.classList.remove("checked");
    header.classList.remove("headerAfter");
  }
}
historyButton.addEventListener("click", showHistory);

// restart tool
let buttonRestart = document.getElementById("buttonRestart");
let blackScreen = document.querySelector(".blackScreen");

function reload() {
  // blackScreen.classList.add('fadeOut')
  blackScreen.classList.remove("hidden");
  blackScreen.classList.add("appearsLong");

  setTimeout(() => {
    location.reload();
  }, "2100");
}
buttonRestart.addEventListener("click", reload);

// zoom slider
var zoomSlider = document.getElementById("bookzoom");

function zoomBooks() {
  var zoom = zoomSlider.value;
  var zoomValue = zoom + "%";
  document.body.style.setProperty("--zoom", zoomValue);
}

zoomSlider.addEventListener("input", zoomBooks);

// email stuff

function sendMail() {
  document.getElementById("buttonToSend").innerHTML =
    "Sending <img src='./assets/img/spinner.gif'></img>";

  var params = {
    email: document.getElementById("email").value,
    message: document.getElementById("message").innerHTML,
  };
  console.log(params.email);
  console.log(params.message);

  const serviceID = "cartography";
  const templateID = "cartography_template";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("message").value = "";
      document.getElementById("message").innerHTML = "";

      console.log(res);

      document.getElementById("buttonToSend").remove();

      let sendAlert = document.createElement("span");
      sendAlert.className = "sendAlert";
      sendAlert.innerHTML = "Sent to <u>" + params.email + "</u> successfully!";
      document.querySelector(".sender > div").appendChild(sendAlert);

      // alert("Your message sent successfully!!")
    })
    .catch((err) => {
      console.log(err);

      document.getElementById("buttonToSend").remove();

      let sendAlert = document.createElement("span");
      sendAlert.className = "sendAlert";
      sendAlert.innerHTML = "Couldn't send it. Try again :(";
      document.querySelector(".sender > div").appendChild(sendAlert);
    });
}

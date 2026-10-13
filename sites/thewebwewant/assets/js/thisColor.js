/* -----------------------------------
CSS COLOOOORS
// -------------------------------------- */
function witchColor() {
  var randomColor = ["forestgreen", "orangered", "mediumslateblue"][
    Math.floor(Math.random() * 3)
  ];

  var newColor = ":root{--thisColor: " + randomColor + ";}";

  var styleSheet = document.createElement("style");
  styleSheet.innerText = newColor;
  document.head.appendChild(styleSheet);

  console.log(
    "%cTHE WEB WE WANT · Pablo MORENO → Mémoire DNSEP → ESAD Amiens 2023/2024. pablomoreno@pm.me",
    "color: white; font-size: 10px; background-color:" + randomColor + ";"
  );

  // link = document.createElement('link');
  // link.rel = 'icon';

  var link = document.querySelector("link[rel~='icon']");

  if (randomColor === "forestgreen") {
    link.href = "assets/icons/icon-green.ico";
  }

  if (randomColor === "orangered") {
    link.href = "assets/icons/icon-red.ico";
  }

  if (randomColor === "mediumslateblue") {
    link.href = "assets/icons/icon-violet.ico";
  }

  document.head.appendChild(link);
}

alert(
  "Pour une expérience complète, visitez ce site web sur un ordinateur à l'aide des navigateurs Chrome ou Firefox. Merci 〠"
);

witchColor();

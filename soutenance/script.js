const iframe = document.querySelector("iframe");

var index = 1;

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    index++;

    console.log(index);
    iframe.setAttribute("src", index + ".html");
  } else if (event.code === "ArrowLeft") {
    index--;
    if (index <= 1) {
      index = 1;
    }
    console.log(index);
    iframe.setAttribute("src", index + ".html");
  } else if (event.code == "Space") {
    iframe.contentWindow.controlador();
  }
});

console.log("hello");

function init() {
  document.title = '1';
  setTimeout(function () {
    document.title = '2';
    setTimeout(function () {
      document.title = '3';
    }, 3000);
  }, 3000);
}

init()
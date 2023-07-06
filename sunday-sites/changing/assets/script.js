console.log("hello");

function init() {
    document.title = '5';
    setTimeout(function () {
      document.title = '4';
      setTimeout(function () {
        document.title = '3';
        setTimeout(function () {
          document.title = '2';
          setTimeout(function () {
            document.title = '1';
            setTimeout(function () {
              document.title = 'okay we can start!';
              setTimeout(function () {
                document.title = 'so i had this idea ';
                setTimeout(function () {
                  document.title = 'of a tab title who ';
                  setTimeout(function () {
                    document.title = 'become the whole and only content';
                    setTimeout(function () {
                      document.title = 'of the website.';
                    }, 1700);
                  }, 1700);
                }, 1700);
              }, 1700);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
}

document.addEventListener("visibilitychange", function() {
  if (document.hidden){
    init()
  } else {
      console.log("Browser tab is visible")
  }
});


var start = function () {
    var video = document.getElementById("video"),
        vendorURL = window.URL || window.webkitURL;

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            }).catch(function (error) {
                console.log("Something went wrong");
            });
    }
}

start()


// function flashFilter() {
//     document.getElementById('video').style.filter = ('saturate(10)');

//     setTimeout(function(){
//         document.getElementById('video').style.filter = ('saturate(0)')
//     }, 1000);

//     setInterval(flashFilter, 1000);
//  }
 
//  setTimeout( flashFilter, 3000);


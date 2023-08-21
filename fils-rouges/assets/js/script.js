/* <video id="video" width="100%" height="100%" autoplay></video> */

// #video {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: calc(var(--vh, 1vh) * 100);
//     width: 100vw;
//     object-fit: cover;
// }

var start = function () {
    var video = document.getElementById('video'),
        vendorUrl = window.URL || window.webkitURL;

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            }).catch(function (error) {
                console.log("Something went wrong!");
            });
    }
}

start();
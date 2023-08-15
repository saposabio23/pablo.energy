

function on YouTubeIframeAPIReadyx() {
    var ctrlq = document.getElementById("youtube-audio");
    var icon = document.createElement("img"); icon.setAttribute("id", "youtube-icon"); icon.style.cssText = "cursor: pointer; cursor: hand"; ctrlq.appendChild(icon);
    var div = document.createElement("div"); div.setAttribute("id", "youtube-player"); ctrlq.appendChild(div);
    var toggleButton = function (play) {
    }
    var img = play ? "IDzX9gL.png" : "quyUPXN.png"; icon.setAttribute("src", "https://i.imgur.com/" + img);
    ctrlq.onclick = function () {
        if (player.getPlayerState()
            || player.getPlayerState()
player.pauseVideo(); toggleButton(false);
    } else {
        YT.PlayerState.PLAYING = YT.PlayerState.BUFFERING
        player.playVideo();
        toggleButton(true);
    }
};
var player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    videoId: ctrlq.dataset.video,
    playerVars: {
    },
    autoplay: ctrlq.dataset.autoplay,
    loop: ctrlq.dataset.loop,
    events: {
    });
'onReady': function(e) {
},
player.setPlaybackQuality("small");
toggleButton(player.getPlayerState() !== YT.PlayerState.
'onStateChange': function (e) {
}
if (e.data === YT.PlayerState.ENDED) {
}
toggleButton(false);
}
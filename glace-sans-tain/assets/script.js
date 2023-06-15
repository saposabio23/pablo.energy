console.log("%cGlace sans tain, par Pablo Moreno. 2021. pablomoreno@pm.me","color: blue; font-family:monospace; font-size: 18px; background-color:white; padding:5px 8px 2px 8px;");

//////////////// FADE IN ///////////////////////
var $fadein= document.querySelector('.fadein');

window.onload = function() {
    $fadein.classList.add("fadeinoff")
}
//////////////// SCROLLBAR ///////////////////////
var $sommaire= document.querySelector('#sommaire');
var $mybar= document.querySelector('.progress-bar');

window.onscroll = function() {
  scrollTitle()
  scrollMenu()
  scrollBar()
  scrollFirm()
};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  $mybar.style.width = scrolled + "%";
}

function scrollTitle() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    $sommaire.style.display = "none";
  } else {
    $sommaire.style.display = "block";
  }
}

//////////////// MENU BUTTON ///////////////////////
var $menubtn= document.querySelector('.menubtn');
var $menuclose= document.querySelector('.menuclose');
var $menu= document.querySelector('.menu');
var $optionsx= document.querySelector('.optionsx');

function scrollMenu() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    $menubtn.classList.add("menuvisible")
    $optionsx.classList.add("menuinvisible")
  } else {
    $menu.classList.remove("menuvisible")
    $menubtn.classList.remove("menuinvisible")
    $menubtn.classList.remove("menuvisible")
    $menuclose.classList.remove("menuclosevisible")
    $optionsx.classList.remove("menuinvisible")
  }
}

function clickShowMenu() {
    $menu.classList.toggle("menuvisible")
    $menubtn.classList.toggle("menuinvisible")
    $menuclose.classList.toggle("menuclosevisible")
}

$menubtn.addEventListener('click', clickShowMenu,);

function clickCloseMenu() {
    $menu.classList.toggle("menuvisible")
    $menubtn.classList.toggle("menuinvisible")
    $menuclose.classList.toggle("menuclosevisible")
}

$menuclose.addEventListener('click', clickCloseMenu,);

//////////////// BOTTOM FIRM ///////////////////////
var $firm= document.querySelector('.lastblocks');

function scrollFirm() {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 40) {
      $firm.classList.add("firmvisible")
  }
}

//////////////// FULLSCREEN BTN ///////////////////////
var $fullscreenbtn= document.querySelector('.fullscreenbtn');
var $fullscreenbtnx= document.querySelector('.fullscreenbtnx');

function toggleFullscreen(elem) {
  elem = elem || document.documentElement;

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

$fullscreenbtn.addEventListener('click', function() {
  toggleFullscreen();
});

function toggleFullscreenx(elem) {
  elem = elem || document.documentElement;

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

$fullscreenbtnx.addEventListener('click', function() {
  toggleFullscreenx();
});

//////////////// NIGHTMODE BUTTON ///////////////////////
var $nightmodebtn= document.querySelector('.nightmodebtn');
var $nightmodebtnx= document.querySelector('.nightmodebtnx');
var $nightcontent= document.querySelector('.content');
var $nightoptions= document.querySelector('.options');
var $nightdeg= document.querySelector('.degtop');
var $nightdeg2= document.querySelector('.degbttom');
var $nightbar= document.querySelector('.progress-bar');
var $nightbody= document.querySelector('body');
var $fullscreenbtn= document.querySelector('.fullscreenbtn');
var $nightmodebtn= document.querySelector('.nightmodebtn');
var $linkbk= document.querySelector('.linkbk');

function toggleNigthmode() {
    $nightcontent.classList.toggle("nightcontent")
    $menu.classList.toggle("nightmenubox")
    $nightoptions.classList.toggle("nightoptions")
    $nightdeg.classList.toggle("nightdeg")
    $nightdeg2.classList.toggle("nightdeg2")
    $menubtn.classList.toggle("nightmenulinks")
    $menuclose.classList.toggle("nightbutton")
    $nightbar.classList.toggle("nightbar")
    $nightbody.classList.toggle("nightbody")
    $fullscreenbtn.classList.toggle("nightfullscreenbtn")
    $nightmodebtn.classList.toggle("nightnightmodebtn")

    var nightbox = document.getElementsByClassName("box");
    for(var i = 0; i < nightbox.length; i++)
    {nightbox[i].classList.toggle("nightbox");}

    var nightmenulinks = document.getElementsByClassName("menulinks");
    for(var i = 0; i < nightmenulinks.length; i++)
    {nightmenulinks[i].classList.toggle("nightmenulinks");}

    var nightannexes = document.getElementsByClassName("annexes");
    for(var i = 0; i < nightannexes.length; i++)
    {nightannexes[i].classList.toggle("nightbox");}

    var nightlinkbk = document.getElementsByClassName("linkbk");
    for(var i = 0; i < nightlinkbk.length; i++)
    {nightlinkbk[i].classList.toggle("nightlinkbk");}

}

$nightmodebtn.addEventListener('click', toggleNigthmode,);
$nightmodebtnx.addEventListener('click', toggleNigthmode,);

//////////////// IMAGE FULLSCREEN ///////////////////////
var $imageValla1= document.querySelector('#imageValla1');
function imageValla1() {
    $imageValla1.classList.toggle("imageValla1")
}

var $imageValla2= document.querySelector('#imageValla2');
function imageValla2() {
    $imageValla2.classList.toggle("imageValla2")
}

var $imageValla3= document.querySelector('#imageValla3');
function imageValla3() {
    $imageValla3.classList.toggle("imageValla3")
}

var $imageChatonsky1= document.querySelector('#imageChatonsky1');
function imageChatonsky1() {
    $imageChatonsky1.classList.toggle("imageChatonsky1")
}

var $imageChatonsky2= document.querySelector('#imageChatonsky2');
function imageChatonsky2() {
    $imageChatonsky2.classList.toggle("imageChatonsky2")
}

var $imageChatonsky3= document.querySelector('#imageChatonsky3');
function imageChatonsky3() {
    $imageChatonsky3.classList.toggle("imageChatonsky3")
}

var $imageGallery0= document.querySelector('#imageGallery0');
function imageGallery0() {
    $imageGallery0.classList.toggle("imageGallery0")
}

var $imageGallery1= document.querySelector('#imageGallery1');
function imageGallery1() {
    $imageGallery1.classList.toggle("imageGallery1")
}

var $imageGallery2= document.querySelector('#imageGallery2');
function imageGallery2() {
    $imageGallery2.classList.toggle("imageGallery2")
}

var $imageGallery3= document.querySelector('#imageGallery3');
function imageGallery3() {
    $imageGallery3.classList.toggle("imageGallery3")
}

var $imageProxy1= document.querySelector('#imageProxy1');
function imageProxy1() {
    $imageProxy1.classList.toggle("imageProxy1")
}

var $imageProxy2= document.querySelector('#imageProxy2');
function imageProxy2() {
    $imageProxy2.classList.toggle("imageProxy2")
}

var $imageAnnexes1= document.querySelector('#imageAnnexes1');
function imageAnnexes1() {
    $imageAnnexes1.classList.toggle("imageAnnexes1")
}

var $imageAnnexes2= document.querySelector('#imageAnnexes2');
function imageAnnexes2() {
    $imageAnnexes2.classList.toggle("imageAnnexes2")
}

var $imageAnnexes3= document.querySelector('#imageAnnexes3');
function imageAnnexes3() {
    $imageAnnexes3.classList.toggle("imageAnnexes3")
}

var $imageAnnexes4= document.querySelector('#imageAnnexes4');
function imageAnnexes4() {
    $imageAnnexes4.classList.toggle("imageAnnexes4")
}

var $imageAnnexes5= document.querySelector('#imageAnnexes5');
function imageAnnexes5() {
    $imageAnnexes5.classList.toggle("imageAnnexes5")
}

var $imageAnnexes6= document.querySelector('#imageAnnexes6');
function imageAnnexes6() {
    $imageAnnexes6.classList.toggle("imageAnnexes6")
}

var $imageAnnexes7= document.querySelector('#imageAnnexes7');
function imageAnnexes7() {
    $imageAnnexes7.classList.toggle("imageAnnexes7")
}
var $imageAnnexes8= document.querySelector('#imageAnnexes8');
function imageAnnexes8() {
    $imageAnnexes8.classList.toggle("imageAnnexes8")
}

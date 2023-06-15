/* --------------PASSW------------- */
var $enter = document.querySelector('.enter');
var $pages = document.querySelector('.pages');
var $hidded = document.querySelector('.hidded');
var $button = document.querySelector('#button');

function password(event) {
    var passw = "sage";
    if (document.form.texte.value.match(passw)) {
        $hidded.classList.add("showed");
    }
    else {
        setTimeout(function () {
            $pages.style.opacity= "0";
        }, 100);
    }
}

$button.addEventListener('click', password)

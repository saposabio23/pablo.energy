/* --------------PASSW------------- */
var $enter = document.querySelector('.enter');
var $hidded = document.querySelector('.hidded');
var $button = document.querySelector('#button');

function password(event) {
    var passw = "sage";
    if (document.form.texte.value.match(passw)) {
        $hidded.classList.add("showed");
    }
    else {
        setTimeout(function () {
            window.loca5tion.reload();
        }, 100);
    }
}

$button.addEventListener('click', password)

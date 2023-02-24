var $top = document.querySelector('#top');
var $bottom = document.querySelector('#bottom');
var $windows = document.querySelector('.windows');

function openLetter() {
    $top.classList.add("paraArriba");
    setTimeout(function(){
        $bottom.classList.add("paraAbajo");
        setTimeout(function(){
            $windows.classList.add("normal");
        }, 300);
    }, 300);

}
$top.addEventListener('click', openLetter);
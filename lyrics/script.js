var $miniBlock = document.querySelector(".mini-block");

function onHover() {
    $miniBlock.classList.add("bkHover")
}

$miniBlock.addEventListener("mouseenter", onHover)

function outHover(){
    $miniBlock.classList.remove("bkHover")

}
$miniBlock.addEventListener("mouseleave", outHover)

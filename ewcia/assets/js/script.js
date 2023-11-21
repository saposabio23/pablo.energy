function putBigPic(event){
    if (event.target.classList.contains('animateBig')) {
        event.target.classList.remove('animateBig')
        event.target.classList.add('animateBigReverse')
    }
    else {
        event.target.classList.remove('animateBigReverse')
        event.target.classList.add('animateBig')
    }

}


// // START ON SCROOLL
// window.onscroll = function () {
//   scrollShowProgram()
// };

// function scrollShowProgram() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     progClose.style.opacity = "1";
//   }
//   else if (programme.classList.contains("on")) {
//     progClose.style.opacity = "1";
//   }
//   else {
//     progClose.style.opacity = "0";
//   }
// }


//   // PROGRAMME ON click

//   document.addEventListener('click', function(e){
//     if(e.target.className=="pro"){
//       console.log(e)
//       programme.classList.remove("on")
//       programme.style.display = "none";
//       progClose.innerHTML = "❡";
//     }
//   })
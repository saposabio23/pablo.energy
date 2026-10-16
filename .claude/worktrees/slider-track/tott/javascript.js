const Util = {};

Util.map = function(a, b, c, d, e) {
	a = this.clamp(a,b,c);
  return (a - b) / (c - b) * (e - d) + d;
};

Util.clamp = function(value,min,max){
	return Math.max(min, Math.min(max, value));
};

function easeOutQuint(t) { return 1+(--t)*t*t*t*t };

mydiv = document.getElementById("showmehideme");

function showhide(d) {
    d.style.display = (d.style.display !== "block") ? "block" : "none";
}

window.onload = function(){
	let imgStart = 1,
			imgEnd = 101;

  for (let i = imgStart; i < imgEnd; i++) {

    let img = document.createElement("img");
    img.src = `images/img${i}.jpeg`;

    img.onload = ()=>{
      let x = Math.random() * (window.innerWidth - img.width),
          y = easeOutQuint(Util.map(i,imgStart,imgEnd,0,1)) * document.body.clientHeight;
      img.style.top = `${y}px`;
      img.style.left = `${x}px`;
      document.body.appendChild(img);
    }


  }
}

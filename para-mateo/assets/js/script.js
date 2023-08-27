var mateo = document.querySelector('#mateo')

function randomImage() {
    var list = [
        "assets/img/heart1.png",
        "assets/img/heart2.png",
        "assets/img/heart3.png"
    ]

    var randomList = list[Math.floor(Math.random() * list.length)];

    console.log(randomList);

    mateo.src = randomList;
}

function animateMateo() {

    var answers = [
        "animate__bounce",
        "animate__rubberBand",
        "animate__swing",
        "animate__tada",
        "animate__jello",
        "animate__heartBeat",
        "animate__flip",
        "animate__flip",
        "rotate-scale-up"
    ]

    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    console.log(randomAnswer);

    mateo.classList.add(randomAnswer)
    randomImage()

    setTimeout(function () {
            mateo.classList.remove(randomAnswer)
    }, 2000)
}

mateo.addEventListener("click", animateMateo)



var HeartsBackground = {
    heartHeight: 40,
    heartWidth: 40,
    hearts: [],
    heartImage: 'https://i.giphy.com/media/1zgO2mNbBDfSQfUEJD/giphy.webp',
    maxHearts: 10,
    minScale: 0.4,
    draw: function() {
      this.setCanvasSize();
      this.ctx.clearRect(0, 0, this.w, this.h);
      for (var i = 0; i < this.hearts.length; i++) {
        var heart = this.hearts[i];
        heart.image = new Image();
        heart.image.style.height = heart.height;
        heart.image.src = this.heartImage;
        this.ctx.globalAlpha = heart.opacity;
        this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
      }
      this.move();
    },
    move: function() {
      for(var b = 0; b < this.hearts.length; b++) {
        var heart = this.hearts[b];
        heart.y += heart.ys;
        if(heart.y > this.h) {
          heart.x = Math.random() * this.w;
          heart.y = -1 * this.heartHeight;
        }
      }
    },
    setCanvasSize: function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.w = this.canvas.width;
      this.h = this.canvas.height;
    },
    initialize: function() {
      this.canvas = $('#canvas')[0];
  
      if(!this.canvas.getContext)
        return;
  
      this.setCanvasSize();
      this.ctx = this.canvas.getContext('2d');
  
      for(var a = 0; a < this.maxHearts; a++) {
        var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
        this.hearts.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          ys: Math.random() + 1,
          height: scale * this.heartHeight,
          width: scale * this.heartWidth,
          opacity: scale
        });
      }
  
      setInterval($.proxy(this.draw, this), 20);
    }
  };
  
  $(document).ready(function(){
    HeartsBackground.initialize();
  });
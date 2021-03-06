function Sprite(name,left,top,width,height){
  this._pixe = document.createElement("img");
  this._pixe.src = name;
  this._pixe.style.position = "absolute";
  document.body.appendChild(this._pixe);

  Object.defineProperty(this,"left",{
    get: function(){
      return this._left;
    },
    set: function(valeur){
      this._left = valeur;
      this._pixe.style.left = valeur + "px";
    }
  });

  Object.defineProperty(this,"top",{
    get: function(){
      return this._top;
    },
    set: function(valeur){
      this._top = valeur;
      this._pixe.style.top = valeur + "px";
    }
  });

  Object.defineProperty(this,"width",{
    get: function(){
      return this._width;
    },
    set: function(valeur){
      this._width = valeur;
      this._pixe.style.width = valeur + "px";
    }
  });

  Object.defineProperty(this,"height",{
    get: function(){
      return this._height;
    },
    set: function(valeur){
      this._height = valeur;
      this._pixe.style.height = valeur + "px";
    }
  });

  Object.defineProperty(this, "display", {
    get: function(){
      return this._pixe.style.display;
    },
    set: function(valeur){
      this._pixe.style.display = valeur;
    }
  });

  this.left = left;
  this.top = top;
  this.width = width;
  this.height = height;
};

Sprite.prototype.startAnimation = function (fct , interval) {
  if (this._clock) window.clearInterval(this._clock);
  var _this = this 
  this._clock = window.setInterval(function(){
    fct(_this);
  }, interval);
  console.log(this._clock);
};

Sprite.prototype.stopAnimation = function() {
  window.clearInterval(this._clock);
}

Sprite.prototype.checkCollision = function ( other ) {
    return ! (
      (this.top + this.height < other.top) || 
       this.top > (other.top + other._pixe.height) ||
       (this.left + this.width < other.left) ||
       this.left > (other.left + other._pixe.width)
    );
}
// Création de nos élements | Vaisseau | Alien | Missile 
var vaisseau = new Sprite("asset/vaisseau.png",765,760,130,130);
var alien1 = new Sprite("asset/aliens.png",60,40,90,70);
var alien2 = new Sprite("asset/aliens.png",260,40,90,70);
var alien3 = new Sprite("asset/aliens.png",60,250,90,70);
var alien4 = new Sprite("asset/aliens.png",260,250,90,70);
var alien5 = new Sprite("asset/aliens.png",160,150,90,70);
var alien6 = new Sprite("asset/aliens.png",1340,40,90,70);
var alien7 = new Sprite("asset/aliens.png",1540,40,90,70);
var alien8 = new Sprite("asset/aliens.png",1340,250,90,70);
var alien9 = new Sprite("asset/aliens.png",1540,250,90,70);
var alien10 = new Sprite("asset/aliens.png",1440,150,90,70);
var missile = new Sprite("asset/missile.png",0,0,50,80);
missile.display = 'none';

// Configuration des touches de jeu | 

document.onkeydown = function(event){
 
  if (event.keyCode == 38) {  //haut
    vaisseau.top -= 100
  }
  if (event.keyCode == 40) { //bas
    vaisseau.top += 100
  }
  if (event.keyCode == 39) { //droite
    vaisseau.left += 100
  }
  if (event.keyCode == 37) { //gauche
    vaisseau.left -= 100
  }
  if (vaisseau.left < 0) {
    vaisseau.left = 0;
  } 
  if (vaisseau.left >= document.body.clientWidth  - vaisseau.width ) {
    vaisseau.left = document.body.clientWidth - vaisseau.width ;
  }
  if (vaisseau.top < 0 ) {
    vaisseau.top = 0;
  }
  if (vaisseau.top > window.innerHeight - vaisseau.height ) {
    vaisseau.top = window.innerHeight - vaisseau.height  ;
  }
  if (event.keyCode == 101 || event.keyCode == 32) {
    if (missile.display == "none") {
        missile.display = "block";
        missile.left = vaisseau.left + (vaisseau.width - missile.width) / 2;
        missile.top = vaisseau.top;
        missile.startAnimation(moveMissile , 20);
    }
  }
};




function moveMissile (missile) {
  
  missile.top -= 10;
  
  if ( missile.top < -80 ) {
    missile.stopAnimation();
    missile.display = "none";
  } 
 
  for (var i=1;i<=15; i++) {
    var alien = window["alien" + i];
    if ( alien.display == "none") continue;
    if (missile.checkCollision(alien)) {
      missile.stopAnimation();
      missile.display = "none";
      alien.stopAnimation();
      alien.display = "none";
    }
  }
}


function moveAlienToLeft (alien , vertical) {
  alien.left -= 200;
  if (alien.left <= 0) {
     alien.top += 50;
     alien.startAnimation(moveAlienToRight , 20)
  }

  if(alien.top > window.innerHeight - alien.height ) {
    alien.top = window.innerHeight - alien.height;
  }
}

function moveAlienToRight (alien ) {
  alien.left += 200;
  if (alien.left > document.body.clientWidth - alien.width) {
     alien.top += 50;
     alien.startAnimation(moveAlienToLeft , 20)
  }
}

for (var i = 1; i <= 10; i++) {
  window["alien"+i].startAnimation(moveAlienToRight , 20)
}












function Move(name,left,top,width,height){
  this.pixe = document.createElement("img");
  this.pixe.src = name;
  this.pixe.style.position = "absolute";
  document.body.appendChild(this.pixe);

  Object.defineProperty(this,"left",{
    get: function(){
      return this._left;
    },
    set: function(valeur){
      this._left = valeur;
      this.pixe.style.left = valeur + "vw";
    }
  });

  Object.defineProperty(this,"top",{
    get: function(){
      return this._top;
    },
    set: function(valeur){
      this._top = valeur;
      this.pixe.style.top = valeur + "vw";
    }
  });

  Object.defineProperty(this,"width",{
    get: function(){
      return this._width;
    },
    set: function(valeur){
      this._width = valeur;
      this.pixe.style.width = valeur + "vw";
    }
  });

  Object.defineProperty(this,"height",{
    get: function(){
      return this._height;
    },
    set: function(valeur){
      this._height = valeur;
      this.pixe.style.height = valeur + "vw";
    }
  });

  Object.defineProperty(this, "display", {
    get: function(){
      return this.pixe.style.display;
    },
    set: function(valeur){
      this.pixe.style.display = valeur;
    }
  });

  this.left = left;
  this.top = top;
  this.width = width;
  this.height = height;
}


var vaisseau = new Move("asset/vaisseau.png",45,40,8,8);
var alien1 = new Move("asset/aliens.png",2,2,4,4);
var alien2 = new Move("asset/aliens.png",7,7,4,4);
var alien2 = new Move("asset/aliens.png",2,12,4,4);
var alien2 = new Move("asset/aliens.png",12,2,4,4);
var alien2 = new Move("asset/aliens.png",12,12,4,4);
var alien2 = new Move("asset/aliens.png",93,2,4,4);
var alien2 = new Move("asset/aliens.png",83,2,4,4);
var alien2 = new Move("asset/aliens.png",88,7,4,4);
var alien2 = new Move("asset/aliens.png",93,12,4,4);
var alien2 = new Move("asset/aliens.png",83,12,4,4);


document.onkeydown = function(event){
  console.log(event.keyCode);
  if (event.keyCode == 38) {  //haut
    vaisseau.top -= 1;
  }
  if (event.keyCode == 40) { //bas
    vaisseau.top += 1
  }
  if (event.keyCode == 39) { //droite
    vaisseau.left += 1
  }
  if (event.keyCode == 37) { //gauche
    vaisseau.left -= 1
  }
  if (vaisseau.left < 0) vaisseau.left = 0;
};



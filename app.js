var canvas = document.getElementById('space-invader');
var context = canvas.getContext("2d");
var y = 0;


function draw(color) {
  context.fillStyle = color;
  context.fillRect(y, 450, 40, 40);
}

document.addEventListener('keydown', function(event) {
  var key = event.keyCode
  console.log(key)
  if ( key === 39 ) {
      draw('black');
      if (y >= canvas.width - 40) { y = canvas.width - 60 ; }
      y = y + 40;
      draw('green');
  } 

  if ( key === 37 ) {
      
    draw('black');
    if (y >= canvas.width - 40) { y = canvas.width - 60 ; }
    y = y - 40;
    draw('green');
} 
  
});



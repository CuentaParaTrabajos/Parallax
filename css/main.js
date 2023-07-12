var Diseño1 = document.getElementById("Diseño2");

document.addEventListener("mousemove", function(event) {
  
  var posX = event.clientX;
  var posY = event.clientY;

  Diseño1.style.left = (posX - 400) + "px";
  Diseño1.style.top = (posY - 400) + "px";
});
var Diseño2 = document.getElementById("Diseño3");

document.addEventListener("mousemove", function(event) {
  
  var posX = event.clientX;
  var posY = event.clientY;

  Diseño2.style.left = (posX-150) + "px";
  Diseño2.style.top = (posY ) + "px";
});

var Diseño3 = document.getElementById("Diseño4");

document.addEventListener("mousemove", function(event) {
  
  var posX = event.clientX;
  var posY = event.clientY;

  Diseño4.style.right = (posX) + "px";
  Diseño4.style.bottom = (posY-50) + "px";
});

var Diseño4 = document.getElementById("Diseño5");

document.addEventListener("mousemove", function(event) {
  
  var posX = event.clientX;
  var posY = event.clientY;

  Diseño4.style.right = (posX - 30) + "px";
  Diseño4.style.top = (posY - 20) + "px";
});

var Diseño5 = document.getElementById("Diseño6");

document.addEventListener("mousemove", function(event) {
  
  var posX = event.clientX;
  var posY = event.clientY;

  Diseño5.style.left = (posX - 400) + "px";
  Diseño5.style.bottom = (posY - 400) + "px";
});
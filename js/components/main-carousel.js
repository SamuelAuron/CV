const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
var pixelsToMove = 0;

btnRight.addEventListener('click', function() {
  pixelsToMove += 50;
  elements.style = `transform: translateX(${pixelsToMove}px)`;
  
});

btnLeft.addEventListener('click', function() {
  pixelsToMove -= 50;
  elements.style = `transform: translateX(${pixelsToMove}px)`;
});
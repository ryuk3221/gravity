const canvas = document.querySelector('#gravityCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



class Ball {
  constructor() {

  }
}

let y = 10;  //в метрах
let gravity = 1; // 
let vy = 0;  //метрах в сек

function draw() {
  ctx.beginPath();
  ctx.arc(100, y, 50, 0, Math.PI * 2, false);
  ctx.fillStyle =  'green';
  ctx.fill();
  ctx.closePath();
}

draw();
// Функция очистки экрана
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
  clearCanvas()
  y += vy;
  vy += gravity;

  if (y > 700) {
    vy *= -0.7;
  }
  
  draw();
}, 20);




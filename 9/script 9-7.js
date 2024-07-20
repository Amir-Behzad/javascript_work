/*
How could you make the circle start out at the left side of the canvas, move to the right, then move back, and so on?
*/

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let x = 0;

function drawCircle(x) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, 10, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

function update() {
  x += 1;
  // if x
  
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawCircle(x, y);
}

setInterval(() => {
  update();
  draw();
}, 100);
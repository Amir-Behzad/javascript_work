let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let x = 0;
let y = 0;

function drawCircle(x, y) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc((x % width), (y % height), 10, 0, Math.PI * 2, false);
  ctx.fill();
}

function update() {
  x += 1;
  y += 1;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawCircle(x, y);
}

setInterval(() => {
  update();
  draw();
}, 5);
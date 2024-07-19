/*
  9-5.  Make a new function called drawSquare that draws a square centered on a point, and call that function from the click handler instead of drawCircle.
*/

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let radius = 10;


function drawCircle(x, y) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}

canvas.addEventListener("click", e => {
    drawCircle(e.offsetX, e.offsetY);
});

document.querySelector("#radius").addEventListener("change", e => {
    radius = e.target.value;
});

document.querySelector("#clear").addEventListener("click", () => {
    ctx.clearRect(0, 0, width, height);
});

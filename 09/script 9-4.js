/*

  9-4.  Add sliders for controlling the R, G, and B components of the color. These will need to range from 0 to 255. You could also add a Radius slider that controls the radius of the circle drawn in the drawCircle function.
*/

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let opacity = 1;
let color_r = 0;
let color_g = 0;
let color_b = 0;
let radius = 10;

function drawCircle(x, y) {
    ctx.fillStyle = `rgba(${color_r}, ${color_g}, ${color_b}, ${opacity})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}

canvas.addEventListener("click", e => {
    drawCircle (e.offsetX, e.offsetY);
});

document.querySelector("#clear").addEventListener("click", () => {
    ctx.clearRect(0, 0, width, height);
});

document.querySelector("#opacity").addEventListener("change", e => {
    opacity = e.target.value;
});

document.querySelector("#color_r").addEventListener("change", e => {
    color_r = e.target.value;
});

document.querySelector("#color_g").addEventListener("change", e => {
    color_g = e.target.value;
});

document.querySelector("#color_b").addEventListener("change", e => {
    color_b = e.target.value;
});

document.querySelector("#radius").addEventListener("change", e => {
    radius = e.target.value;
});


let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
ctx.lineWidth = 10;
ctx.fillStyel = "red";
// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();

document.querySelector('html').addEventListener("mousemove", e => {
    console.log(`mousemove x: ${e.clientX}, y: ${e.clientY}`);
})
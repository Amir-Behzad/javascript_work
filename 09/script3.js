let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(150, 15);
ctx.lineTo(200, 100);
ctx.lineTo(100, 100);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 200, 50, 180, Math.PI * 0.5, false);
// ctx.arc(350, 400, 50, 0, Math.PI, true);
ctx.fill();
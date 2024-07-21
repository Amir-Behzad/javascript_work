let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.strokeRect(10, 10, 200, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(15, 15, 100, 100);
ctx.strokeStyle = "green";
ctx.strokeRect(70, 70, 200, 100);
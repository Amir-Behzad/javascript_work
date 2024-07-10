let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.lineWidth = 3;
ctx.fillStyel = 'yellow';

ctx.fillRect(0, 0, 100, 100);

document.querySelector('html').addEventListener("mousemove", e => {
    console.log(`mousemove x: ${e.clientX}, y: ${e.clientY}`);
})
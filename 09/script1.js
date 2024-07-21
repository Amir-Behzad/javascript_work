let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
ctx.lineWidth = 10;
ctx.fillStyel = "red";

// Wall
/* strokeRect() method has four parameters:
x: The x-coordinate of the rectangle's top-left corner
y: The y-coordinate of the rectangle's top-left corner
width: The rectangle's width in pixels
height: The rectangle's height in pixels
*/
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
// The closePath() method creates a path from the current point back to the starting point. Use the stroke() or fill() method to draw the path.
ctx.closePath();
ctx.stroke();

document.querySelector('html').addEventListener("mousemove", e => {
    console.log(`mousemove x: ${e.clientX}, y: ${e.clientY}`);
})
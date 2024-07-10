let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 3;
ctx.fillStyel = 'blue';

ctx.fillRect(0, 0, 300, 500);

// The rectangle only fills the space inside its border which is the size of the canvas.

// P.S The pain is here. 2:26 AM 2024-07-11
let colors = ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'purple']

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 2;


for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    ctx.strokeStyle = color;
    ctx.strokeRect(10+(4*i)), (10+(4*i)), (200-(8*i), (200-(8*i)));
}

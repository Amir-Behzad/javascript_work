let colors = ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'purple']

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 2;


for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    ctx.strokeStyle = color;
    ctx.strokeRect((0+(10*(i+1))), (0+(10*(i+1))), (200-(20*(i+1))), (200-(20*(i+1))));
}

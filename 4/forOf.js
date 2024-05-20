let colors = ['Red', 'Green', 'Blue'];

// 
// for (let color of colors) {
//     console.log(`${color} is a color.`);
// }


// Usin the index 
// for (let index = 0; index < colors.length; index++) {
//     console.log(`${colors[index]} is a color.`);
// }


// Using the index in the body
for (let [index, value] of colors.entries()) {
    console.log(`${index}: ${value} is a color.`)
}

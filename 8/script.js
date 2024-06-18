let heading = document.querySelector('#main-heading');
let button = document.querySelector('#reset-button');
let i = 1;

heading.addEventListener("click", () => {
    console.log(`You clicked the heading ${i} time!`);
    i++;
})

button.addEventListener("click", () => {
    i = 1
    console.log('counter reset...\ni = 0')
})
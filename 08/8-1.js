let paragraph = document.querySelector('#main-paragraph');
let i = 1;
paragraph.addEventListener('click', () => {
    i += 0.1;
    paragraph.style.fontSize = `${i}em`;
})

let button = document.querySelector('#reset-button');
button.addEventListener('click', () => {
    i = 1;
    paragraph.style.fontSize = `${i}em`;
})
// paragraph.style.fontSize = i;
let heading = document.querySelector('#main-heading');
heading.addEventListener("click", () => {
    console.log("You clicked the heading!");
});

document.querySelector('em').addEventListener("click", () => {
    console.log("You clicked the em element!");
});

document.querySelector("body").addEventListener("click", () => {
    console.log('You clicked the body element');
});
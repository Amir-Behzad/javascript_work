let heading = document.querySelector("#main-heading");
heading.addEventListener("click", () => {
    console.log("You clicked the heading!");
});

// Method chaining: calling a method directly on the return value of another method, instead of saving that return value in a variable. So the return value of a method would be the object for the next method.
document.querySelector("em").addEventListener("click", () => {
    console.log("You clicked the em element!");
});

document.querySelector("body").addEventListener("click", () => {
    console.log("You clicked the body element");
});

// The "Event Bubbling" effect causes the event to be passed from a child element to its ancestors.

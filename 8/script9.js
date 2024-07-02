let box = document.querySelector("#box");

let currentX = 0;
let currentY = 0;

document.querySelector("html").addEventListener("keydown", (e) => {
    if (e.key == "w") {
        currentY -= 5;
    } else if (e.key == "a") {
        currentX -= 5;
    } else if (e.key == "s") {
        currentY -= 5;
    } else if (e.key == "d") {
        currentX += 5;
    }

    box.style.left = currentX + "px";
    box.style.top = currentY + "px";
});

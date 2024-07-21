let box = document.querySelector("#box");

document.querySelector("html").addEventListener("mousemove", (e) => {
    box.style.left = e.clientX * 2 + "px";
    box.style.top = e.clientY - 10 + "px";
});

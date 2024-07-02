let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click", (event) => {
    let word = event.target.textContent;
    sentence.textContent += word;
    sentence.textContent += " ";
});

let box = document.querySelector("#box");

document.querySelector("html").addEventListener("mousemove", (e) => {
    box.style.left = e.clientX - 10 + "px";
    box.style.top = e.clientY - 10 + "px";
});

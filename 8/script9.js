let pText = document.querySelector("#word");
document.querySelector("html").addEventListener("keydown", (e) => {
    let word = e.key;
    pText.textContent += word;
});

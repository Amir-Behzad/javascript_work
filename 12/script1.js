// Listing 12-1

let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
  // Hide this button
  play.style = "display: none";
  playing.style = " ";

  let audioCtx = new AudioContext();
  let oscNode = audioCtx.createOscillator();
  oscNode.frequency.value = 440;

  let gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;

  oscNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscNode.start(audioCtx.currentTime + 0.15);
  oscNode.stop(audioCtx.currentTime + 1);
})

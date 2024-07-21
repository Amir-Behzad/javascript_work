/*
  12-2.  Change the value of the gain node to alter the volume of the tone. For example, setting it to 0.25 will make it half as loud.
*/

let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
  play.style = "display: none";
  playing.style = "";

  let audioCtx = new AudioContext();
  let oscNode = audioCtx.createOscillator();
  oscNode.frequency.value = 440;

  let gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.25;

  oscNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscNode.start(audioCtx.currentTime);
  oscNode.stop(audioCtx.currentTime + 2);
});
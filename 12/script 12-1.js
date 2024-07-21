/*
  12-1.  Change the frequency, or pitch, of the tone by changing oscNode.frequency.value. Halving the frequency will lower the tone’s musical pitch by an octave, and doubling it will raise its pitch by an octave.
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
  gainNode.gain.value = 0.5;

  oscNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscNode.start(audioCtx.currentTime);
  oscNode.stop(audioCtx.currentTime + 2);
});
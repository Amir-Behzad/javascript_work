let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
  // Hide this button
  play.style = "display: none";
  playing.style = "";

  Tone.start();

  let synth = new Tone.Synth({
    oscillator: {type: "sine"},
    envelope: {attack: 0, decay: 0, sustain: 1, release: 0},
    volume: -6 
  }).toDestination();

  synth.triggerAttackRelease("G4", 2, 0);
});
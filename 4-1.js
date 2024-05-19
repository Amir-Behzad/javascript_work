/*
  4-1.  Create a new file called cointoss.html with the usual HTML setup code, then add some JavaScript to simulate a coin toss. Generate a random number between 0 and 1 with Math.random(), and write an if…else statement that will log "heads" if the number is less than 0.5 or "tails" otherwise. Every time you reload this file, you’ll get a new random heads or tails value.
*/

randomNumber = Math.random();

console.log(`random number: ${randomNumber}`)

if (randomNumber < 0.5) {
    console.log('heads')
} else {
    console.log('tails')
}

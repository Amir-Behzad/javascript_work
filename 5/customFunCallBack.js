// The first custom function with callback function as a parameter
/*
function doubler(callback) {
    callback();
    callback();
} 

doubler(() => console.log("Hi there!"));
*/

// Custom function with callBack run multiple times
function callMultipleTimes(times, callback) {
    for (let i = 0; i < times; i++) {
        callback(i);
    }
}



callMultipleTimes(3, time => console.log(`Running count: ${time}`));
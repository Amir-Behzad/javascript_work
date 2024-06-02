
function doubler(callback) {
    callback();
    callback();
} 

doubler(() => console.log("Hi there!"));


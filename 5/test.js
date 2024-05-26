// let cls = function () {console.clear()};

// cls();
// console.log(cls);

// setInterval(() => {
//     console.log("Beep");
//     },
//     1000);



let myColors = (name, ...favoriteColors) => {
    let colorString = favoriteColors.join(", ");
    let message = '';
    if (favoriteColors.length > 1) {
        message = `my favorite colors are: ${colorString}`;
    } else if (favoriteColors.length == 1) {
        message = `my favorite colors is ${colorString}`;
    } else {
        message = 'I have no favorite color';
    };
    console.log(`My name is ${name} and ${message}.`);
};


myColors('Amir', 'blue', 'green');
myColors('Behzad', 'blue');
myColors('Amir Behzad');
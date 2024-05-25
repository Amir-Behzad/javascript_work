// let cls = function () {console.clear()};

// cls();
// console.log(cls);

// setInterval(() => {
//     console.log("Beep");
//     },
//     1000);



let myColors = (name, ...favoriteColors) => {
    let colorString = favoriteColors.join(", ");

    console.log(
        `My name is ${name} and my favorite colors are:
    ${colorString}.`
    );
};


myColors("Nick", "blue", "green", "orange");
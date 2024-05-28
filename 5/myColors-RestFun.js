let restFun = function (name, ...favoriteColors) {
    let favoriteColorsString = favoriteColors.slice(0, -1).join(', ');
    
    if (favoriteColors.length > 1) {
        let lastColor = favoriteColors[favoriteColors.length-1];
        lastColor = lastColor.toString() || '';
        let favoriteColorsStringEdited = favoriteColorsString + ` and ${lastColor}`;
        console.log(`My name is ${name} and my favorite colors are ${favoriteColorsStringEdited}.`);
    } else if (favoriteColors.length === 1) {
        console.log(`My name is ${name} and my favorite color is ${lastColor}.`);
    } else if (favoriteColors.length  === 0) {
        console.log(`My name is ${name}.`);
    };
};

restFun('Amir', 'blue', 'red', 'green');
restFun('Behzad', 'blue', 'green');
restFun('Joe');

// Works like a charm! :D And sums up most of the contents of the book up to here.
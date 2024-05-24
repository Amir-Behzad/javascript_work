/*
  5-2.  You’ve now seen three different ways of creating functions: function declarations, function  expressions, and arrow functions. Write each of the following in all three styles:
*/


/*
    A function that takes a number from 0 to 5 and returns the English word for that number. For example, 1 should return "one". Hint: use an array to define the mapping from numbers to strings.
*/

let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five'
];

// Function declaration
function stringNum(num) {
    console.log(`${num} is ${numbers[num]}`);
}

// Function expression
let stringNumExpression = function (num) {
    console.log(`${num} : ${numbers[num]}`);
};

// Arrow function 
let stringNumArrow = num => console.log(`${num} = ${numbers[num]}`);

//  //Function call to check the result
// stringNum(0);
// stringNumExpression(2);
// stringNumArrow(5);


/*
    A function with no parameters that prints how many times it’s been called. Hint: define a variable outside of the function to keep track of the number of calls, like we did in the “Side Effects” section on page 77.
*/

// function declaration


// function expression


// arrow function 




/*
    A function that prints the current date and time. Hint: you can get the current date and time with new Date().
*/

// function declaration

// function expression

// arrow function 
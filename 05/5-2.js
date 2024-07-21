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

function stringNum(number) {
    return numbers[number];
}


// Function declaration
function convertNumberDecl(num) {
    return stringNum(num);
}

// Function expression
let convertNumberExpression = function (num) {
    return stringNum(num);
};

// Arrow function 
let convertNumberArrow = num => stringNum(num);

//  //Function call to check the result
// console.log(convertNumberDecl(1));
// console.log(convertNumberExpression(2));
// console.log(convertNumberArrow(3));


/*
    A function with no parameters that prints how many times it’s been called. Hint: define a variable outside of the function to keep track of the number of calls, like we did in the “Side Effects” section on page 77.
*/

// function declaration
let countDecl = 0;
function countCallDecl() {
    console.log(`countCallDecl has been called ${++countDecl} times.`);
}

// // function expression
let countExpr = 0;
let countCallExpr = function () {
    console.log(`countCallExpr has been called ${++countExpr} times.`);
};

// arrow function 
countArr = 0;
let countCallArr = () => {
    console.log(`countCallArr has been called ${++countArr} times.`);
};

//  //Function call to check the result
// countCallDecl();
// countCallDecl();
// countCallExpr();
// countCallExpr();
// countCallExpr();
// countCallArr();
// countCallArr();


/*
    A function that prints the current date and time. Hint: you can get the current date and time with new Date().
*/

let now = new Date().toString();

// function declaration
function dateDecl() {
    console.log('dateDecl:', now);
}

// function expression
let dateExpr = function () {
    console.log('dateExpre:', now);
}

// arrow function 
let dateArr = () => console.log('dateArr', now);

// calling functions to see the result:
dateDecl();
dateExpr();
dateArr();
/*
  5-1.  Rewrite the sayHello function so it returns the `Hello, ${name}!` greeting instead of logging it. Then write some code to use the returned greeting. For example, apply the toUpperCase string method to convert the greeting to all caps.
*/

function sayHello(name) {
    return `\nHello, ${name}!\n`;
}

let greeting = sayHello('Amir').toUpperCase();

console.log(greeting)



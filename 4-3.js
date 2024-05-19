/*
4-3.  Use the entries method with a for…of loop to print something like the following based on a string of your name:

N 0
i 1
c 2
k 3

Hint: to use the entries technique, you’ll first have to convert the string to an array. To do that, use the split method: name.split(" ").entries().
*/

let myName = 'Amir Behzad';

for ([index, letter] of myName.split("").entries()) {
    console.log(`${index} ${letter}`);
}

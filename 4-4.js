/*
  4-4.  Rewrite the code from the previous problem using a standard for loop. Which version do you prefer? Think about efficiency and readability.
*/

let myName = 'Amir Behzad';

// for (let [index, letter] of myName.split("").entries()) {
//     console.log(`${index} ${letter}`);
// }

for (let i = 0; i < myName.length; i++) {
    console.log(`${i} ${myName[i]}`);
}

let me = {
    "first name": "Amir",
    "last name": "Behzad",
    "age": 36
};

// for (let key in me) {
// console.log(`My ${key} is ${me[key]}.`);
// };

for (let [key, value] of Object.entries(me)) {
    console.log(`My ${key} is ${value}.s`);
}
// Here Cat is a "constructor function" not a class
// but does the same job alongside a "prototype"
function Cat(name) {
    this.name = name;
}

Cat.prototype.sayHello = function () {
    console.log(`Miao! My name is ${this.name}.`);
};

Cat.prototype.purr = function () {
    console.log(`${this.name} purrs`);
};

Cat.prototype.rol = function () {
    console.log(`${this.name} rols`);
};


Cat.prototype.repeat = function (times, callback) {
    for (let time = 0; time < times; time++) {
        callback();
        console.log(`repeated ${time} time.`)
    }
};


class Dog {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Woof! My name is ${this.name}.`);
    }
}

let sonny = new Dog('Sonny');
let pishi = new Cat('Pishi');
let moona = new Cat("Moona");

moona.sayHello = function () {
    console.log(`HELLO!!! I'M ${this.name.toUpperCase()}!`);
};

moona.sayHello();

pishi.sayHello();
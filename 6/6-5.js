/*
      6-5.  Inspect the moona and yappy instances in the console. You should see that their sayHello methods are defined directly on the instances, whereas the kiki and felix instances have it defined on their respective prototypes.
*/


class Dog {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Woof! My name is ${this.name}.`);
    }
}

function Cat(name) {
    this.name = name;
}

Cat.prototype.sayHello = function () {
    console.log(`Miao! My name is ${this.name}.`);
};


let moona = new Cat('Moona');
let yappy = new Dog('Yappy');
moona.sayHello();
yappy.sayHello();


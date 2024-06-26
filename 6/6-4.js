/*
       6-4.  You can override a method on an instance of a class, just as you can on an instance created through prototype-based inheritance. Try creating a new instance of Dog called yappy, and modify its sayHello method to make it sound more yappy than other Dog instances.
*/

class Dog {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Woof! My name is ${this.name}.`);
    }
}

let yappy = new Dog('Yappy');

yappy.sayHello = function () {
    console.log(`Yup! My name is ${this.name}!`);
};

let sonny = new Dog('Sonny');

yappy.sayHello();
sonny.sayHello();
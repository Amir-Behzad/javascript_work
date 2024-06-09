function Cat(name) {
    this.name = name;
}

// method could not be defined using an arrow function
Cat.prototype.sayHello = function () {
    console.log(`Miaow! My name is ${this.name}.`);
}

let leo = new Cat('Leo');
leo.sayHello();
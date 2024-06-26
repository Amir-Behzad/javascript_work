// Here Cat is a "constructor function" not a class
// but does the same job alongside "prototype"
function Cat(name) {
    this.name = name;
}

Cat.prototype.purr = function () {
    console.log(`${this.name} purrs`);
}

Cat.prototype.rol = function () {
    console.log(`${this.name} rols`);
}


Cat.prototype.repeat = function (times, callback) {
    for (let time = 0; time < times; time++) {
        callback();
        console.log(`repeated ${time} time.`)
    }
}

let pishi = new Cat('Pishi')
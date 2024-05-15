class Person {
    constructor(id, name, salary) {
        this.name = name
        this.id = id
        this.salary = salary
    }
    print() {
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}

class Trainer extends Person {
    constructor(id, name, salary, subject) {
        super(id, name, salary)
        this.subject = subject
    }
    print() {
        return `${super.print()}, ${this.subject}`
    }
}
// Trainer.prototype.sayHi = function () {
//     console.log('hi....')
// }
//console.log(Trainer.prototype)
var anilObject = new Trainer(1, 'anil', 1000, 'JS')
var sunilObject = new Trainer(2, 'sunil', 2000, 'C#')
console.log(anilObject.print())
//anilObject.sayHi();
console.log(anilObject.hasOwnProperty('sayHi'))
//console.log(Trainer.prototype.hasOwnProperty('sayHi'))
//console.log(Object.prototype.hasOwnProperty('sayHi'))

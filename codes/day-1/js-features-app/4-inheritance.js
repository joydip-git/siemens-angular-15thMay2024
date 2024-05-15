function person(id, name, salary) {
    this.name = name
    this.id = id
    this.salary = salary
    //return this
    this.print = function () {
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}
function trainer(id, name, salary, subject) {
    // this.name = name
    // this.id = id
    // this.salary = salary
    person.call(this, id, name, salary)
    this.subject = subject
    this.print = function () {
        return `${this.name}, ${this.id}, ${this.salary}, ${this.subject}`
    }
}

Object.prototype.sayHi = function () {
    console.log('Hi....')
}

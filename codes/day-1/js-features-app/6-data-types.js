var x = 10
var trainer = 'Joydip'
var isTrue = false

console.log(x, typeof x)
console.log(trainer, typeof trainer)
console.log(isTrue, typeof isTrue)

var anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}
console.log(typeof anilObject)
//1. object - literal syntax
var anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}
console.log(anilObject.name)
console.log(anilObject['salary'])
console.log(anilObject.print())
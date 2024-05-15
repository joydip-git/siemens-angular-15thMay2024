//2. constructor function
function person(id, name, salary) {
    this.name = name
    this.id = id
    this.salary = salary
}

var anilObject = new person(1, 'anil', 1000)

console.log(anilObject.name)
console.log(anilObject['salary'])
console.log(anilObject.print())

const { add, subtract } = require('./utility')
console.log(add(12, 3))
console.log(subtract(12, 3))
//console.log(add(12, 2))
//console.log(module)

// import { add, subtract } from "./utility";
// console.log(add(2, 3))
// console.log(subtract(3, 2))

const anilObject = {
    id: 1,
    name: 'anil',
    salary: 1000,
    friends: []
}
//spread operator (...)
// [...toCopyFromArray]
// {...toCopyFromObject}
const friendsArr = ['sunil', 'mahesh']
friendsArr.find((f) => f.includes('m'))
const copy = {
    ...anilObject,
    friends: [...friendsArr]
}

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers, 10, 20]
// const copy = {}
// for (const propName in anilObject) {
//     const propValue = anilObject[propName]
//     copy[propName] = propValue
// }


//object destructuring

// const idValue = anilObject.id
// const nameValue = anilObject.name

const { id: idValue, name: nameValue } = anilObject

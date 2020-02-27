const square = (num) => num * num

// const squareLong = (num) => {
//     return num * num
// }

console.log(square(6))


const people = [{
    name: 'apple',
    age: 25
}, {
    name: 'Jess',
    age: 30
}, {
    name: 'vik',
    age: 20
}]

//filter returns a new array if it return true
// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

//challenge
//1. find the person with age 22
//2. print the person's name

const age20 = people.filter((person) => person.age === 20)

console.log(age20)



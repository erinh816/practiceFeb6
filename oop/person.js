const Person = function (firstName, lastName, age) {
    // console.log(this) //this is the empty person {} object
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Andrew', 'Mead', 27)
me.firstName = 'Jennifer'
console.log(me)
console.log(me.age)

const person2 = new Person('Amy', 'Lang', 30)
console.log(person2)
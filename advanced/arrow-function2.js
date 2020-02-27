const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

//if we switch the function above with arrow function, it fails

const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())

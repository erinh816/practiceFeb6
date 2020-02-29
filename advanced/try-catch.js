//if a function is supposed to take a number argument
//but the user misuses it like input a string
//we want let them know it's supposed to be a number


const getTip = (amount) => {
    // return amount * 0.25
    if (typeof amount === 'number') {
        return amount * 0.25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip(10)
    console.log(result)

} catch (e) {
    console.log(e.message)
}


//another example is grade-calc.js


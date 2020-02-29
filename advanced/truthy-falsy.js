//To check if something exists
const products = [{ name: 'mouse' }]
const product = products[0]

//Truthy - Values that resolve to true in boolean context
//Falsy - Values that resolve to false in boolean context
//**Falsy Values - false, 0, empty string, null, undefined, NaN(ex:1/0 not a number,when you perform a math operation that's not valid)
//**Truthy Value - everything except Falsy Values

//javascript will see if('testing') as true even it's not a boolean

if (product) {
    console.log('product found')
} else {
    console.log('product not found')
}
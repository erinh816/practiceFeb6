const products = []
const product = products[0]

//Truthy - Values the resolve to true in boolean context
//Falsy - Values that resolve to false in boolean context
//**Falsy Values - false, 0, empty string, null, undefined
//**Truthy Value - everything except Falsy Values

//javascript will see if('testing') as true even it's not a boolean

if ({}) {
    console.log('product found')
} else {
    console.log('product not found')
}
//create the current time
// const now = new Date()
// console.log(now)

// console.log(`Year:${now.getFullYear()}`)
// console.log(`Month:${now.getMonth()}`)
// console.log(`Day:${now.getDate()}`)
// console.log(`Hour:${now.getHours()}`)
// console.log(`Minute:${now.getMinutes()}`)
// console.log(`Second:${now.getSeconds()}`)

//create date at a different point of time
// const then = new Date('January 21 2001 6:25:01')
// console.log(then)
// console.log(typeof(then))

//*
//we typically don't do line 83 defining a specific time
//Insdead, we Unix Epoch - January 1st 1970 00:00:00
//time after this +(positive), before this - (negative)
//0 represents this time exactly
//1000 is 1 second after it (unit:millesecond)
//-60000 is a minute before it

const now = new Date()
const timestamp = now.getTime() //big number


const myDate = new Date(timestamp) //Mon Feb 24
console.log(myDate.getFullYear()) //2020

const date1 = new Date('January 14 1995 6:35:01')
const date2 = new Date('March 30 2009 19:20:06')

const timestamp1 = date1.getTime()
const timestamp2 = date2.getTime()



if (timestamp1 < timestamp2) {
    console.log(`${date1} is first`)
} else {
    console.log(`${date2} is first`)
}
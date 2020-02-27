//moment basically a function
const now = moment()
console.log(now.toString())

// now.minute(1)
// console.log(now.minute())

now.add(1, 'year').subtract(20, 'days')
console.log(now.format())

//November 3rd, 2003
console.log(now.format('MMMM Do, YYYY'))

console.log(now.fromNow())

const nowTimestamp = now.valueOf()
console.log(nowTimestamp)

console.log(moment(nowTimestamp).toString())

const newTime = moment()
console.log(newTime)

newTime.year(1990).month(7).date(16)
console.log(newTime.toString())

// newTime.subtract(30, 'year').subtract(9, 'day').add(6, 'month')
// console.log(newTime.toString())

console.log(newTime.format('MMM D, YYYY'))





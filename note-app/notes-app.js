// const notes = [{
//     title: 'my next trip',
//     body: 'I would like to go to Spain'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise, Eating a bit better'
// }, {
//     title: 'Office modification',
//     body: 'Get a new seat'
// }]

const notes = getSavedNotes()

const filters = {
    searchText: '' //filter by this default value
}

//create read update (by set a different value) and delete
//**** local storage only supports string based data

//setItem takes 2 arguments, the key and the value
// localStorage.setItem('location', 'New York')

//getItem takes one argument, the key
// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

// localStorage.clear()//delete everything no matter what the key is
// const user = {
//     name: 'Stuff Curry',
//     age: 24
// }

//JSON = JS Object Notation, covert object into string
//we can't use '' in JSON, it has to be ""
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(user)
// console.log(`${user.name} is ${user.age}`)




//first, we are going to call this new funtion one time right away to make the data shows up
//second, we are going to call the function every time the event listener fires

renderNotes(notes, filters)

//*Query and remove
// const p = document.querySelector('p')
// p.remove()

//*Query all and remove
// const ps = document.querySelectorAll("p");
// //ps.remove() won't work
// ps.forEach(function(p) {
//   p.textContent = "*******";
//   // console.log(p.textContent)
//   // p.remove();
// });


//Add a new element
// const newP = document.createElement("p");
// newP.textContent = "NEW ELEMENT";
// document.querySelector('body').appendChild(newP)



//Event Listener
document.querySelector('#create-note').addEventListener('click', function (event) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    // renderNotes(notes, filters)
    // event.target.textContent = 'CLICKED'
    location.assign(`edit.html#${id}`)
    //after we add this line, we can delete renderNotes(notes, filters) because we don't need to rerender the current page anymore
})

// document.querySelector('#remove-all').addEventListener('click', function (event) {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

document.querySelector('#search-text').addEventListener('input', function (event) {
    // console.log(event.target.value)
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})


//DROPDOWNS
document.querySelector('#filter-by').addEventListener('change', function (event) {
    console.log(event.target.value)
})



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


//1. Create a new moment
//2. Set the month, day, and year to your birthday
//3. Use format to print it in the following way:Jan 6, 1991

const newTime = moment()
console.log(newTime)

newTime.year(1990).month(7).date(16)
console.log(newTime.toString())

// newTime.subtract(30, 'year').subtract(9, 'day').add(6, 'month')
// console.log(newTime.toString())

console.log(newTime.format('MMM D, YYYY'))






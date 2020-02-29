'use strict'

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
    searchText: '', //filter by this default value
    sortBy: 'byEdited'
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
document.querySelector('#create-note').addEventListener('click', (event) => {
    const id = uuidv4()
    const timeStamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
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

document.querySelector('#search-text').addEventListener('input', (event) => {
    // console.log(event.target.value)
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})


//DROPDOWNS
document.querySelector('#filter-by').addEventListener('change', (event) => {
    // console.log(event.target.value)
    filters.sortBy = event.target.value
    renderNotes(notes, filters)
})

//sync homepage as well
window.addEventListener('storage', (event) => {
    if (event.key === 'notes') {
        //parse the new data and update notes
        //rerender the notes
        notes = JSON.parse(event.newValue)
        //my understanding:update notes with newValue typed
        renderNotes(notes, filters)
        //my understanding:rerender
    }
})


//1.add createdAt and updatedAt to the new notes (store timestamp)
//step 1 is created in this file
//2.update updatedAt when someone edits a title or body
//when someone edits means we need to go to notes-edit.js
//3.delete all old notes before testing



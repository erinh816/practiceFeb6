const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: '' //filter by this default value
}
//first, we are going to call this new funtion one time right away to make the data shows up
//second, we are going to call the function every time the event listener fires
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // console.log(filteredNotes)
    document.querySelector('#notes').innerHTML = ''
    //set the new html value
    //this wipe everything and forEach below add new stuff in

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

//DOM - Document Object Model

//document is an object provided to us by the browser
//we can use document to perform all the DOM manipulations

//step 1: query it (querySelector matches the first match it finds)
//step 2: action
//step 3

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

//Summary: document is an object which models our html document
//if we want to read, write or update the html from JavaScript
//the DOM is the way to get it done
//And we have different DOM methods

//Add a new element
const newP = document.createElement("p");
newP.textContent = "NEW ELEMENT";
document.querySelector('body').appendChild(newP)



//Event Listener

document.querySelector('#create-note').addEventListener('click', function (event) {
    console.log('did this work')
    console.log(event)
    event.target.textContent = 'CLICKED'
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


//***lesson 56 going to set up a filter object under the array above */


//'submit' is the only event
document.querySelector('#name-form').addEventListener('submit', function (event) {
    event.preventDefault() //default of refreshing the page
    //so we can do something meaningfull downbelow
    console.log(event.target.elements.firstName.value)
    event.target.elements.firstName.value = ''

})
console.log(uuidv4())


//read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Remove a note from the list
const removeNote = function (id) {
    //findIndex this function gets called for each item in an array
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
        //return true
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

//Save the notes to localSorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}


//Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')

    //Setup the remove note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function (event) {
        console.log(note)
        //we need to delete the element from the array and save note
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else { textElement.textContent = 'unnamed note' }

    textElement.setAttribute('href','edit.html#${note.id}')


    noteElement.appendChild(textElement)


    return noteElement
}


//Render application notes

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // console.log(filteredNotes)
    document.querySelector('#notes').innerHTML = ''
    //set the new html value
    //this wipe everything and forEach below add new stuff in

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}





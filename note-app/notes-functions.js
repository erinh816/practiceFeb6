//read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    return notesJSON ? JSON.parse(notesJSON) : []
    // if (notesJSON !== null) {
    //     return JSON.parse(notesJSON)
    // } else {
    //     return []
    // }
}

//Remove a note from the list
const removeNote = (id) => {
    //findIndex this function gets called for each item in an array
    const noteIndex = notes.findIndex((note) => note.id === id)
    //return true
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

//Save the notes to localSorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}


//Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')

    //Setup the remove note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', (event) => {
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

    textElement.setAttribute('href', `edit.html#${note.id}`)


    noteElement.appendChild(textElement)


    return noteElement
}

//******************************* 
//we are not going to add sorBy's function into renderNotes below, it'll make this function 
//too big. Instead, we are going to create another function and have renderNotes call it

//sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}


//Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    // console.log(filteredNotes)
    document.querySelector('#notes').innerHTML = ''
    //set the new html value
    //this wipe everything and forEach below add new stuff in

    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

//Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}





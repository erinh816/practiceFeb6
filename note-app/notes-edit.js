const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

const noteId = location.hash.substring(1) //from first index to the end

let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('index.html')
}


titleElement.value = note.title
bodyElement.value = note.body

//1. setup input event for title
//2. Update note object and save notes list
//3. Repeat steps 1-2 for body
//4. Setup a remove button that removes notes and sends user back to home page

titleElement.addEventListener('change', function (event) {
    note.title = event.target.value
    saveNotes(notes)
})


bodyElement.addEventListener('change', function (event) {
    note.body = event.target.value
    saveNotes(notes)
})


removeElement.addEventListener('click', function (event) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue)
        note = notes.find(function (note) {
            return note.id === mpteOd
        })
        if (note === undefined) {
            location.assign('index.html')
        }
        titleElement.value = note.title
        bodyElement.value = note.body
    }

})

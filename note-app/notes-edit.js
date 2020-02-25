const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

const noteId = location.hash.substring(1); //from first index to the end

let notes = getSavedNotes();

let note = notes.find(function(note) {
	return note.id === noteId;
});

if (note === undefined) {
	location.assign('index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

//1. setup input event for title
//2. Update note object and save notes list
//3. Repeat steps 1-2 for body
//4. Setup a remove button that removes notes and sends user back to home page

titleElement.addEventListener('input', function(event) {
	note.title = event.target.value;
	saveNotes(notes);
});

bodyElement.addEventListener('input', function(event) {
	note.body = event.target.value;
	saveNotes(notes);
});

removeElement.addEventListener('click', function(event) {
	removeNote(note.id);
	saveNotes(notes);
	location.assign('index.html');
});

window.addEventListener('storage', function(event) {
	if (event.key === 'notes') {
		JSON.parse(event.newValue);

		note = notes.find(function(note) {
			return note.id === noteId;
		});

		if (note === undefined) {
			location.assign('index.html');
		}

		titleElement.value = note.title;
		bodyElement.value = note.body;
	}
});

//sync homepage as well
window.addEventListener('storage',function(event){
    if(event.key === 'notes'){
        //parse the new data and update notes
        //rerender the notes
        notes = JSON.parse(event.newValue)
        //my understanding:update notes with newValue typed
        renderNotes(notes, filters)
        //my understanding:rerender
    }
})


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



if(timestamp1<timestamp2){
    console.log(`${date1} is first`)
}else{
    console.log(`${date2} is first`)
}
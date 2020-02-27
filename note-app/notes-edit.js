//1. add a DOM element between the title and body inputs (empty span)
//2. Set text value: last edited 4 hours ago
//3. Update value of title/body/storage change

const titleElement = document.querySelector('#note-title');
const timeElement = document.querySelector('#last-edited');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

const noteId = location.hash.substring(1); //from first index to the end

let notes = getSavedNotes();

let note = notes.find(function (note) {
	return note.id === noteId;
});

if (note === undefined) {
	location.assign('index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
// timeElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
timeElement.textContent = generateLastEdited(note.updatedAt)

//1. setup input event for title
//2. Update note object and save notes list
//3. Repeat steps 1-2 for body
//4. Setup a remove button that removes notes and sends user back to home page

titleElement.addEventListener('input', function (event) {
	note.title = event.target.value;
	note.updatedAt = moment().valueOf();
	timeElement.textContent = generateLastEdited(note.updatedAt);
	saveNotes(notes);
});

bodyElement.addEventListener('input', function (event) {
	note.body = event.target.value;
	note.updatedAt = moment().valueOf();
	timeElement.textContent = generateLastEdited(note.updatedAt);
	saveNotes(notes);
});

removeElement.addEventListener('click', function (event) {
	removeNote(note.id);
	saveNotes(notes);
	location.assign('index.html');
});

window.addEventListener('storage', function (event) {
	if (event.key === 'notes') {
		JSON.parse(event.newValue);

		note = notes.find(function (note) {
			return note.id === noteId;
		});

		if (note === undefined) {
			location.assign('index.html');
		}

		titleElement.value = note.title;
		bodyElement.value = note.body;
		timeElement.textContent = generateLastEdited(note.updatedAt);
	}
});




//Prototypal Inheritance

const Person = function(firstName, lastName, age, likes = []) {
	// console.log(this) //this is the empty person {} object
	// set the default likes to an empty array
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.likes = likes;
};

Person.prototype.getBio = function() {
	let bio = `${this.firstName} is ${this.age}`;
	this.likes.forEach((like) => {
		bio = bio + `${this.firstName} likes ${like}`;
	});
	return bio;
};

Person.prototype.setName = function(fullName) {
	const names = fullName.split(' ');
	this.firstName = names[0];
	this.lastName = names[1];
};

const me = new Person('Andrew', 'Mead', 27, [ 'Teaching', 'Biking' ]);
me.firstName = 'Jennifer';
me.setName('Alexis Ren');
console.log(me);
console.log(me.age);
console.log(me.getBio());

const person2 = new Person('Amy', 'Lang', 30);
console.log(person2);
console.log(person2.getBio());

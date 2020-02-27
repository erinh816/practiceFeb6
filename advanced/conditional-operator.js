// const myAge = 16;
// let message = myAge >= 18 ? 'You can vote' : 'You can not vote';

// // if(myAge>=18){
// //     message = 'You can vote'
// // }else{
// //     message='You can not vote'
// // }

// // message = myAge >= 18 ? 'You can vote' : 'You can not vote';

// console.log(message);

//***conditional operator for functions
const myAge = 12;

const showPage = () => {
	return 'showing the page';
};

const showErrorPage = () => {
	return 'showing the error page';
};

const message = myAge >= 21 ? showPage() : showErrorPage();

console.log(message);

//challenge

const team = [ 'Tyler', 'Porter','Nate','Rebecca','Cameron' ];
//Print "team size:3" if less than or equal to 4
//print "too many peopele on your team" otherwise

// if (team.length <= 4) {
// 	console.log('Team size alright');
// } else {
// 	console.log('Too many people');
// }

const checkTeamSize = team.length <= 4 ? `team size ${team.length}` : 'too many people';

console.log(checkTeamSize);

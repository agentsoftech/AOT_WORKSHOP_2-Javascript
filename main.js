// 1. Functions
// 2. Conditional Logic Statements
// 3. Arrays, Objects
// 4. Document.getElementById
// 5. Practical Applications of Javascript in the Industry

// Logging
alert('Good evening!');
console.log('Bonjour!');
console.error('Error: Request fail');
console.warn('Warning: Battery level low');

// Variables
var name = 'Jason';
const gender = 'Male';

// Data Types
var message = 'Hello'; // String
var age = 17; // Number(integer)
var height = 176.5; // Number(floating number)
var isTalking = true; // Boolean
var universeSize = null; // Null means no value
var newYearResolution = undefined; // Undefined means havent been assigned yet

var GPA; // Same with undefined

// Arrays
var values = [1, 2, 3, 4, 5];
var basket = ['apples', 'oranges', 'pears', 'grapes', 'watermelon'];

console.log(values);

// Get 1 value
console.log(basket[0]);

// Assign a value to array index
basket[5] = 'durians';

// Add value to end of array
basket.push('mangos');

// Add to beginning of array
basket.unshift('pineapples');

// Remove the last value from the array
basket.pop();

// Check index
console.log(basket.indexOf('durians'));

// OBJECT LITERALS
const person = {
	firstName: 'Jason Beh',
	age: 17,
	hobbies: ['dota 2', 'movies', 'eating'],
	education: {
		programme: 'A-Levels',
		intake: 'January 2019',
		university: "Taylor's University"
	}
};

// Get single value
console.log(person.name);

// Get array value
console.log(person.hobbies[2]);

// Get embedded object
console.log(person.education.intake);

// Add property
person.email = 'behjieshen@gmail.com';

// Array of objects
const subjects = [
	{
		id: 1,
		subject: 'Further Mathematics',
		isPass: true
	},
	{
		id: 2,
		text: 'Mathematics',
		isPass: true
	},
	{
		id: 3,
		text: 'Physics',
		isPass: true
	},
	{
		id: 4,
		subject: 'Economics',
		isPass: true
	}
];

// Conditionals

// Simple If/Else Statement
const cashAmount = 100;

if (cashAmount === 100) {
	console.log('You have RM100.');
} else if (cashAmount > 10) {
	console.log('You have more than RM10.');
} else {
	console.log('I dont know how much you have.');
}

// Switch
color = 'blue';

switch (color) {
	case 'red':
		console.log('color is red');
	case 'blue':
		console.log('color is blue');
	default:
		console.log('color is not red or blue');
}

// Ternary operator / Shorthand if
const z = color === 'red' ? 10 : 20;

// Functions
function congratulate(name) {
	if (name) {
		console.log('Congratulations, ' + name + '!');
	} else {
		console.log('Who should I congratulate?');
	}
}

congratulate('Mike');

// Loops

// For Loop
for (let i = 0; i <= 10; i++) {
	console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i <= 50) {
	console.log(`While Loop Number: ${i}`);
	i++;
}

// Loop Through Arrays
// For Loop
var students = ['John', 'Jane', 'Stephanie', 'Susan'];
for (let i = 0; i < students.length; i++) {
	console.log(`Student ${i + 1}: ${students[i]}`);
}

// Assignment 1
// Prompt user and ask what phone OS do they like
// Write your own reaction message based on their input

var phoneOS = prompt('Do you like Android or Apple?').toLowerCase();

if (phoneOS == 'apple') {
	console.warn('Apple fan boy ALERT');
} else if (phoneOS == 'android') {
	console.warn('Android hardcore fan ALERT');
}

// Assignment 2
// Countdown from 10 seconds
// Log 'Happy New Year' when it is 0

var counter = 10;

var test = setInterval(function() {
	if (counter == 0) {
		console.log('Happy New Year!');
		return clearInterval(test);
	}
	console.log('Countdown: ' + counter);
	return (counter -= 1);
}, 1000);

// Assignment 3
// Prompt user to type 5 person names in this room
// Add them to an array and display

var person1 = prompt('1. May I know your name?');
var person2 = prompt('2. May I know your name?');
var person3 = prompt('3. May I know your name?');
var person4 = prompt('4. May I know your name?');
var person5 = prompt('5. May I know your name?');

var personList = [person1, person2, person3, person4, person5];
console.log(personList);

// Assignment 4
// Create a function named getDetails that prompts user for name, age and favourite food.
// Create a function named convertToArray that stores the data into an array and print it.
// Create a function named convertToObject that stores the data into an object and print it.
// Call the other 2 functions in getDetails.

function convertToObject(name, age, favouriteFood) {
	var newArray = {
		name: name,
		age: age,
		favouriteFood: favouriteFood
	};
	console.log(newArray);
}

function convertToArray(name, age, favouriteFood) {
	var newArray = [name, age, favouriteFood];
	console.log(newArray);
}

function getDetails() {
	var name = prompt('What is your name?');
	var age = prompt('How old are you?');
	var favouriteFood = prompt('What is your favourite food?');

	convertToArray(name, age, favouriteFood);
	convertToObject(name, age, favouriteFood);
}

getDetails();

// Assignment 1
// Prompt user and ask what phone OS do they like
// Write your own reaction message based on their input

// Assignment 2
// Countdown from 10 seconds
// Log 'Happy New Year' when it is 0

// Assignment 3
// Prompt user to type 5 person names in this room
// Add them to an array and display

// Assignment 4
// Create a function named getDetails that prompts user for name, age and favourite food.
// Create a function named convertToArray that stores the data into an array and print it.
// Create a function named convertToObject that stores the data into an object and print it.
// Call the other 2 functions in getDetails.

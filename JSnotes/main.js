/* Multi
Line
Comment */

// String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;

// Concatenation
// console.log('My name is ' + name + ' and I am ' + age);

// Template Strings, use grave accents ` not single ' or double " quotes 
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = 'Hello World!';

// Makes the string all Upper Case
console.log(s.toUpperCase());
// Makes the string all Lower Case
console.log(s.toLowerCase());
// Starts the string at the 0th character and ends at the 5th character
console.log(s.substring(0,5));
// Combines the effects of two methods
console.log(s.substring(0,5).toUpperCase());
// Creates an array where each character is a value
console.log(s.split(''));

// Creates an array where each word is a value
const t = 'technology, computers, it, code';
// The ', ' is used as a sperator
console.log(t.split(', '));

// Arrays - variables that hold multiiple values
// REMINDER: Arrays use brackets ( eg. {}, [] )

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 10, true]

console.log(numbers);
console.log(fruits);

// Checks if something is an array
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray('hello')); // false

// Finds the index "position" of an item in an array
console.log(fruits.indexOf('oranges')); // 2, becuase strawberries was .unshifted

// Adds 'grapes' to the array
fruits[3] = 'grapes';

// Adds 'mangos' to the end of the array
fruits.push('mangos');

// Adds '' to the begining of the array
fruits.unshift('strawberries');

// Removes the last item from the array
fruits.pop();

/* Arrays start at 0 so putting 1 in outputs 'oranges' 
even though it's 2nd in the array. Arrays are ALWAYS 0 Based */
console.log(fruits[1]);

// Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// console.log(person); Displays all the info
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// Destructering, creating varaibles
// Pulls firstName & 'lastName out of the person object
/* Even though city is an embedded object is can still be pulled
    PAY ATTENTION TO SYNTAX */
const {firstName, lastName, address: {city} } = person;
console.log(firstName);
console.log(city);

// Adds a property to the object
person.email = 'john@gmail.com';
console.log(person.email);

// PAY ATTENTION TO SYNTAX [{…}, {…}, {…}]
const todos = [
    {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
    },
    {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
    },
    {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// JSON Format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Loops

// For  Variable, Condition, Incriment
for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while(i < 10)
    {
    console.log(`While Loop Number: ${i}`);
    i++
}

// Loop Arrays
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//For of Loop
for(let todo of todos) {
    console.log(todo.isCompleted);
}

// forEach, executes a provided function once for each array element
todos.forEach(function(todo) {
    console.log(todo.text);
});

/* map, creates a new array populated with the results
of calling a provided function on every element in the calling array */
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

/* filter, creates a new array with all elements that 
pass the test implemented by the provided function */
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
});
console.log(todoCompleted);
















/* Multi
Line
Comment */

// Some Definitions
// Operator, performs some operation on single or multiple operands (data value) and produces a result.
// Operand, is the object or quantity that is being opterated on
    // example: 1 + 2, where the + sign is an operator and 1 and 2 are the operands.  
// Function, are similar to procedures. For a procedure to quality as a function it should take some input and return an output where there is some obvious relationship between the input and output.
// Block, are abtract layers. Think inception.
// Scope, refers to the current context of the code, which determines the accessiblity of variables to JavaScript. Scope has two types, local and global. Global vaviables are thise declared outside of the block. Local variables are those declared inside of a block.

// Declarations
// "var", "let", and "const"
// var declares a varaible that is globally scoped. Don't use it unless you need to.
// let declares a varaible that is limited to the scope of a block statement.
// const declares a read-only named constant.

// String, Numbers, Boolean, null, undefined

// String example
const name = 'John';
// Number example
const age = 30;
const rating = 4.5;
// Boolean example
const isCool = true;
// null example
const x = null;
// Undefined example
const y = undefined;
let z;
// this 
//console.log(typeof x);
//this

// Concatenation
//console.log('My name is ' + name + ' and I am ' + age);
// Using template strings is normally easier than concatenating

// Template Strings, use grave accents ` not single ' or double " quotes 
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

// Properties and Methods
// Properties don't have ()s
// 
// Methods have ()s
// A method is a function that is associated with an oject

const s = 'Hello World!';

// Outputs the length property of the string object
console.log(s.length);
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

// While Loop
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

// For of Loop
// Preforms a loop for each object or value in the array. So instead of spitting out the entire array all at once the for of loop will spit out each value one by one.
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
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);

// == Only checks to see if the value matches. === Also checks for matching data types.
const p = 6;
const l = 6;
// Pay Attention to the syntax of "if", "else if", and "else" statements.
// || means or, && means and
if(p > 5 && l > 5) {
    console.log('p and l are greater than 5');
} else if(p > 5) {
    console.log('p is greater than 5 but l is less than or equal to 5');
} else if(l > 5) {
    console.log('l is greater than 5 but p is less than or equal to 5');  
} else {
    console.log('p and l are less than or equal to 5');   
}

// Conditional (ternary) Operator
// ? means then, : means else
const v = 11;
const color = v > 10 ? 'red' : 'blue';

// A switch statement evalutes an experssion, matching the experssion's value to a case clause, and executes statements associated with that case.
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// Note that "function" is only creating the a new function (in this case I've named it "addNums")
function addNums(num1, num2) {
    console.log(num1 + num2);
}
// Calling the function that was just made.
addNums(4,5);
/* I Commented this out since the class I created below does the same exact thing.

// Constructor Funtion
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    // This is a simply way to do it
    this.fullName1 = function() {
        return firstName + ' ' + lastName;
    }
    // This uses object literals but does the same thing
    this.fullName2 = function() {
        return `${this.firstName} ${this.lastName}`;
    }   
}
*/


// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);     
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


// Instantiate Object
const person1 = new Person('John', 'Doe', '4-18-1980');

// There are a lot of methods for "Date" objects.
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
// How to test html-> js connection
// console.log("Welcome to ITC. Great to have you here!");

// Example of let --> the second print works!
// let welcomeMessage = "Welcome to First Steps.";
// console.log(welcomeMessage);

// welcomeMessage = "What'd you say?";
// console.log(welcomeMessage);

// Example of const --> the second print DOES NOT WORK!
// const goodbyeMessage = "Goodbye!";
// console.log(goodbyeMessage);
// goodbyeMessage = "Still can't hear you!";
// console.log(goodbyeMessage);

// Example of getting an element from HTML file
// const title = document.getElementById("title");
// console.log(title);
// console.log("id", title.id);
// console.log("class", title.classList);
// console.log("text", title.textContent);

const numberSeven = "Seven";

// Examples of string data type methods
console.log(numberSeven.length);
console.log(numberSeven.toUpperCase()); // -> SEVEN
console.log(numberSeven.toLowerCase()); // -> seven

// Example of string data type concat method
const text1 = "Hello";
const text2 = "World";
const text3 = text1.concat(" ", text2);
console.log(text3); // -> "Hello World"

// Example of string data type concatenation without built-in method
const text4 = "Hello";
const text5 = "World";
const text6 = text4 + " " + text5;
console.log(text6); // -> "Hello World"

// Examples of working with numbers
// console.log(3 + 9);
// console.log(3 - 9);
// console.log(3 * 9.1);
// console.log(3 / 9);

// Examples of concatenation vs addition
const textSeven = "7";
const textNine = "9";
const numberSix = 6;
const numberNine = 9;

// This is concatenation
const textResult = textSeven + textNine;
console.log(textResult); // -> "79"

// This is addition
const additionResult = numberSix + numberNine;
console.log(additionResult); // -> 15

// What is this?!
const mysteryResult = textSeven + numberSix;
console.log("mystery", mysteryResult);

// Example of converting string to number
const otherAdditionResult = parseInt(textSeven) + numberSix;
console.log("other addition", otherAdditionResult);

// Booleans
true;
false;

// Examples of thinking about data types
("9876");
9876;
9876.5;
false;
("false");
("4");
true;

// Arrays
// An array is a collection of values
const exampleArray = ["this is a string", 8, true, [true, false, 9]];
const emptyArray = [];
const exampleSingleItemArray = ["One"];
const carsArray = ["Saab", "Volvo", "BMW"];
const exampleString = "This is a strong";

// console.log(carsArray);
// console.log("index 0", carsArray[0].toLowerCase());
// console.log("index 1", carsArray[1]);
// console.log("index 2", carsArray[2]);
// console.log(carsArray.length);

console.log("T", exampleString[0]);
console.log("o", exampleString[13]);

const letterT = exampleString[0];
const letterO = exampleString[13];
const wordTo = letterT + letterO;
console.log("wordTo", wordTo);

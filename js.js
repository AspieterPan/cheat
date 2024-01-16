// Variables
var oldVariable = "old"; // Older, function-scoped
let newVariable = "new"; // Block-scoped, can be reassigned
const constantVariable = "constant"; // Block-scoped, cannot be reassigned

// Data Types
let string = "Hello, world!"; // String
let number = 42; // Number (integer or float)
let boolean = true; // Boolean
let nullValue = null; // Null
let undefinedValue; // Undefined
let object = { key: "value" }; // Object

// Arrays
let array = [1, 2, 3, 4, 5];

// Functions
function functionName(param1, param2) {
  return param1 + param2;
}
let sum = functionName(1, 2);

// Arrow Functions
const arrowFunction = (param1, param2) => param1 + param2;

// Conditional Statements
if (boolean) {
  // code if true
} else {
  // code if false
}

// Ternary Operator
let result = boolean ? "True" : "False";

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do-While Loop
do {
  console.log(i);
  i++;
} while (i < 5);

// For...of (ES6)
for (const element of array) {
  console.log(element);
}

// For...in (for objects)
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}

// Object Literal
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// Accessing Properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Arrays
let fruits = ["apple", "banana", "cherry"];

// Accessing Array Elements
console.log(fruits[0]); // apple

// Array Methods
fruits.push("date"); // Add to end
fruits.pop(); // Remove from end
fruits.unshift("elderberry"); // Add to start
fruits.shift(); // Remove from start
fruits.forEach((fruit) => console.log(fruit)); // Iterate over elements

// Higher-order Array Functions
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map((x) => x * x); // [1, 4, 9, 16, 25]
let evens = numbers.filter((x) => x % 2 === 0); // [2, 4]
sum = numbers.reduce((acc, x) => acc + x, 0); // 15

// Callbacks
function fetchData(callback) {
  setTimeout(() => callback("Data"), 1000);
}
fetchData((data) => console.log(data));

// Promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});
promise.then((data) => console.log(data));

// Async/Await (ES8)
async function asyncFunction() {
  let data = await promise;
  console.log(data);
}
asyncFunction();

// Error Handling in Async/Await
async function asyncFunctionWithErrorHandling() {
  try {
    let data = await promise;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Selecting Elements
let elementById = document.getElementById("elementId");
let elementsByClassName = document.getElementsByClassName("className");
let elementsByTagName = document.getElementsByTagName("tagName");

// Modifying Elements
elementById.textContent = "New Text"; // Change text
elementById.style.color = "red"; // Change style

// Creating Elements
let newElement = document.createElement("div");
newElement.textContent = "I am new";

// Adding/Removing Elements
document.body.appendChild(newElement); // Add to DOM
document.body.removeChild(newElement); // Remove from DOM

// Adding Event Listener
elementById.addEventListener("click", function () {
  console.log("Element clicked!");
});

// Removing Event Listener
elementById.removeEventListener("click", function () {
  // Function to remove
});

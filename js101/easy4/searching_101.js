// input - 6 numbers, which the user enters
// output - a string indicating whether the 6th number was included in the previous 5

// explicit requirements: prompt for user input
//                       ask for 6 numbers total
//                       return console log indicating whether last number is among the previous 5, and list those 5 numbers
// implicit requirements: accept integers only

// data structures - array. slot the numbers the user enters into an array where each number is an element

// define function?
// create empty array to hold numbers
// start loop where:
// while the length of the array is less than 5
//   prompt the user to enter the number
//   slot the number into the array

// then, prompt user for last number and check to see if the array includes that number
// if it does, return that it does
// if not, return that it does not

const readline = require('readline-sync');
let numberArray = [];
const numberSuffixes = ['st', 'nd', 'rd', 'th', 'th',];

for (let count = 1; count < 6; count += 1) {
  let number = readline.question(`Enter the ${count + numberSuffixes[count - 1]} number: `);
  numberArray.push(number);
}

let lastNumber = readline.question(`Enter the last number: `);

numberArray.includes(lastNumber) ? console.log(`The number ${lastNumber} appears in ${numberArray.join(", ")}.`) : console.log(`The number ${lastNumber} does not appear in ${numberArray.join(", ")}.`);

// console.log(numberArray);
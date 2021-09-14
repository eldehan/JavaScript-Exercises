const readline = require('readline-sync');

// Prompt user for integer greater than 0
let userInteger = parseInt(readline.question('Please enter a number greater than 0. \n'), 10);

// Check if it's a valid integer; if not, repeat prompt.
function invalidNumber(number) {
  return Number.isNaN(number) ||
        !(number > 0) ||
        !(Number.isInteger(number));
}

while (invalidNumber(userInteger)) {
  userInteger = parseInt(readline.question('Please enter a number greater than 0. \n'), 10);
}

// Ask user to enter either s for sum or p for product
let operation = readline.question(`To determine the sum of all numbers between 1 and ${userInteger}, enter 's'.
To determine the product of all numbers between 1 and ${userInteger}, enter 'p' \n`);

while (!['s', 'p'].includes(operation)) {
  operation = readline.question("Please enter 's' or 'p'.\n");
}

// Recursive function for computing sum
function computeSum(number) {
  if (number === 1) {
    return 1;
  } else {
    return number + computeSum(number - 1);
  }
}

// Recursive function for computing product
function computeProduct(number) {
  if (number === 1) {
    return 1;
  } else {
    return number * computeProduct(number - 1);
  }
}

// Calculate value, display to the user
let output;
if (operation === 's') {
  output = computeSum(userInteger);
  console.log(`The sum of the integers between 1 and ${userInteger} is ${output}.`);
} else {
  output = computeProduct(userInteger);
  console.log(`The product of the integers between 1 and ${userInteger} is ${output}.`);
}
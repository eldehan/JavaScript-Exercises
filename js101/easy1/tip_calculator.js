// Prompt the user for the bill amount -> save into bill variable
// Prompt the user for the tip percentage -> save into tip variable
// Calculate bill * tip percentage to get tip amount
// Display tip amount
// Display total (bill + tip amount)

const readline = require('readline-sync');

let bill = parseFloat(readline.question('What is the bill? '));

let tipPercent = parseFloat(readline.question('What is the tip percentage? ')) / 100;

let tip = bill * tipPercent;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}.`);
console.log(`The total is $${total.toFixed(2)}.`);
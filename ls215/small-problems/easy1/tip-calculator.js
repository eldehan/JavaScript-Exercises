const readline = require('readline-sync');

let bill = parseFloat(readline.question('What is the bill? '));
let tipPercentage = parseFloat(readline.question('What is the tip percentage? ')) / 100;

let tipAmount = (bill * tipPercentage);
let totalBill = (bill + tipAmount);

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);
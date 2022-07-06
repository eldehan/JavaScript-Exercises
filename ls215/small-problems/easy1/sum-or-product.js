const readline = require('readline-sync');

let integer = parseInt(readline.question('Please enter an integer greater than 0: '));
let integerArray = [];
for (let count = 1; count <= integer; count += 1) {
  integerArray.push(count);
}

let answer;
while (true) {
  answer = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  if (/^[sp]$/i.test(answer)) break;
}

let result;
if (answer === 's') {
  result = integerArray.reduce((acc, number) => acc + number, 0);
  console.log(`The sum of the integers between 1 and ${integer} is ${result}.`);
} else if (answer === 'p') {
  result = integerArray.reduce((acc, number) => acc * number, 1);
  console.log(`The product of the integers between 1 and ${integer} is ${result}.`);
}
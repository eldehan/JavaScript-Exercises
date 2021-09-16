const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

let num1 = Number(readline.question(prompt('Enter the first number:')));

let num2 = Number(readline.question(prompt('Enter the second number:')));

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${num1 / num2}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${BigInt(num1) ** BigInt(num2)}`);
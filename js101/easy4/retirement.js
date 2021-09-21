const readline = require('readline-sync');

let currentAge = Number(readline.question('What is your age?\n'));
let retirementAge = Number(
  readline.question('At what age would you like to retire?\n')
);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);
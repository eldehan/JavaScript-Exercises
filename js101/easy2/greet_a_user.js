const readline = require('readline-sync');

let userName = readline.question('What is your name? \n');

if (userName.endsWith('!') || userName === userName.toUpperCase()) {
  console.log(`HELLO ${userName.toUpperCase().slice(0, userName.indexOf('!'))}. WHY ARE WE SHOUTING?`);
} else {
  console.log(`Hello ${userName}.`);
}

/*
Another solution from launch school:

if (name[name.length - 1]) === '!') {
  ...code
}


*/
// input - string
// output - string rendered to console inside box
// box has 1 empty line between string and box borders above and below
// box has 1 space to either side of string

function logInBox(string) {
  let stringLength = string.length;
  let boxLength = stringLength + 2;

  console.log(`+${'-'.repeat(boxLength)}+`);
  console.log(`|${' '.repeat(boxLength)}|`);
  console.log(`| ${string} |`);
  console.log(`|${' '.repeat(boxLength)}|`);
  console.log(`+${'-'.repeat(boxLength)}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
// input = string
// output = string of the original string plus a box around it

// explicit requirements: output the same string, and console.log it with a box around it
// implicit requirements: box will be 1 space larger than the line on the left and right, box will have 1 line of white space above and below. Box will have + for corners, - for horizontal lines, and | for vertical lines.

// Define function logInBox
// height will be 5 lines
// length will be string.length + 4

// maybe 3 separate functions
// - 1 for top of box and bottom of box
// - 1 for white space above and below box
// - 1 for line where the text is itself.
// - while loops checking for string.length
// - use string.repeat

function logInBox(string) {
  buildBox(string, "+", "-");
  buildBox(string, "|", " ");
  boxedString(string, "|");
  buildBox(string, "|", " ");
  buildBox(string, "+", "-");
}

function buildBox(string, edgeChar, fillChar) {
  console.log(`${edgeChar}${fillChar.repeat(string.length + 2)}${edgeChar}`);
}

function boxedString(string, edgeChar) {
  console.log(`${edgeChar} ${string} ${edgeChar}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
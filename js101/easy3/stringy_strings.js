// input = integer
// output = string with length of the integer

// explicit requirements = output string must be alternating 1s and 0s.
//                         Length of output string should match given integer
//                         The string should always start with a 1.

// define function
// create a string with a 1 in it
// while length of the string is lower than the integer argument:
  // if previous char is a 1, concat a 0 into it
  // else concat a 1 into it
// return string

function stringy(num) {
  let string = "1";
  for (let index = 0; index < num - 1; index += 1) {
    string[index] === "1" ? string += "0" : string += "1";
  }
  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
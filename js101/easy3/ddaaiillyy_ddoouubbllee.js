// Input - string
// Output - string

// Explicit requirements: take a string any return a string with all duplicate characters collapsed into a single character
// Implicit requirements: empty string returns an empty string, single character returns single charater. No limit to how many characters will be collapsed into a single one

// create function crunch
// create variable to handle collapsed string
// iterate over the string until the end of the string is reached
// check for duplicate characters
// remove duplicate characters

// turn string into array, probably

// CREATE function crunch
// split input string into array of chars
// iterate over string
// while the value of the current index is equal to the value of current index +1, splice current index +1
// join the results of the string array and assign it to the collapsedString variable
// return the collapsed string variable

function crunch(string) {
  let charArray = string.split("");
  for (let index = 0; index < charArray.length; index += 1 ) {
    while (charArray[index] === charArray[index + 1]) {
      charArray.splice(index + 1, 1);
    }
  }
  let collapsedString = charArray.join("");
  return collapsedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
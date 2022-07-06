// input - integer
// output - string of alternating 1s and 0s of length INPUT

// output string always starts with a 1

// initialize result string
// initialize counting loop up to input limit
// alternate output based on count
// if count is odd, add a 1, otherwise add a 0
  // add to result string
// return result string

function stringy(limit) {
  let result = '';
  for (let count = 1; count <= limit; count += 1) {
    if (count % 2 === 1) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(0));    // ""
console.log(stringy(1));    // "1"
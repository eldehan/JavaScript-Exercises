// function
// input - 2 strings
// output - string (2 input strings concatenated as shorter-longer-shorter)

// can assume strings are of different lengths

// determine which is longer string
// determine which is shorter string
  // separate function
// concatenate and return answer

// determining length
  // put 2 strings in array
  // sort array by length
  // extract from appropriate spot from array

function shortLongShort(string1, string2) {
  let [longerString, shorterString] = sortStringLength(string1, string2);
  
  return (`${shorterString}${longerString}${shorterString}`);
}

function sortStringLength(string1, string2) {
  return [string1, string2].sort((a, b) => b.length - a.length);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
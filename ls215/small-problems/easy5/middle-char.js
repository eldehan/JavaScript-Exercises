// returns middle char of string
// if char is even length, returns middle 2 chars

function centerOf(string) {
  let midpoint = string.length / 2
  
  if (isEven(string.length)) {
    return string.slice(midpoint - 1, midpoint + 1)
  } else {
    return string.slice(midpoint, midpoint + 1)
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

function isEven(value) {
  return value % 2 === 0;
}
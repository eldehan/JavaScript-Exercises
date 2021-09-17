const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

// function stringToInteger(string) {
//   let digitArray = [];
//   let multiplier = 1;
//   for (let index = string.length - 1; index >= 0; index -= 1) {
//     digitArray.push(DIGITS[string[index]] * multiplier);
//     multiplier *= 10;
//   }
//   let integer = digitArray.reduce((sum, digit) => sum + digit, 0);
//   return integer;
// }

function stringToInteger(string) {
  let multiplier = 1;
  let number = 0;
  for (let index = string.length -1; index >= 0; index -= 1) {
    number += (DIGITS[string[index]] * multiplier);
    multiplier *= 10;
  }
  return number;
}

// Streamlined program. Don't need to push into an array then reduce; can just
// perform that calculation and add it directly to a number variable.

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
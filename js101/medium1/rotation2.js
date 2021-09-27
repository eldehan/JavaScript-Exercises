// input - a number, and a count
// - number is the string of digits to be worked on
// - count is the place of digit to shift to the end, counting from the left
// output - the number, with the digit rotated
// - after digit is shifted to the end, the remaining digits shift to the left

// turn number to a string, then split into an array
// declare a variable and initialize it with the digit being moved, via splice
//   - that digit is determined by count
//   - will refer to index of array.length - COUNT
// use the moving digit variable to push that value back onto the end of the array
// join the array back into a string, then into a number, then return it

function rotateRightmostDigits(number, count) {
  let digitArray = String(number).split("");
  let movingDigit = digitArray.splice(digitArray.length - count, 1);
  digitArray.push(movingDigit);
  return Number(digitArray.join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
const CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let digit = 0;
  let charArray = [];
  do {
    digit = number % 10;
    charArray.unshift(CHARS[digit]);
    number = Math.floor(number / 10);
  }
  while (number > 0);
  return charArray.join("");
}

// Alternative way from launch school solution:
// (Bypass using an array, just add the charaters directly to the front of the new string)
// function integerToString2(number) {
//   let newString = "";
//   let digit = 0;
//   do {
//     digit = number % 10;
//     newString = digit + newString;
//     number = Math.floor(number / 10);
//   }
//   while (number > 0);
//   return newString;
// }

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"


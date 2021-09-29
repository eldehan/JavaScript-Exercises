/*

featured numbers
  - odd number
  - multiple of 7
  - all digits of # occur exactly once each
  - the largest possible featured number is 9876543201

input - integer
output - next featured number greater than the integer
        - if no next largest featured number, issue an error message

if # is >= largest featured number, issue error message
else
return featured number
  - search for number that is:
    - multiple of 7 AND is odd (% 2 = 1) AND each digit occurs once
    - do this by incrementing thru numbers above given number

each digit occuring once:
  - convert to string
  - iterate through string, and for each number, add to an object
    - if the # already appears, add 1 to its value, otherwise, initialize its key to the value of 1
  - return if NOT object.values(thatobject).filter(count => count > 1).length > 0

*/

// function featured(integer) {
//   if (noValidNumbers(integer)) return 'There is no possible number that fulfills these requirements.';

//   for (let number = integer + 1; number <= 9876543201; number += 1) {
//     if ((number % 2 === 1) && (number % 7 === 0) && (everyDigitOccursOnce(number))) {
//       return number;
//     }
//   }
// }

// function noValidNumbers(integer) {
//   return (integer >= 9876543201);
// }

function everyDigitOccursOnce(num) {
  let countObject = {};
  String(num).split("").forEach(number => {
    countObject[number] ? countObject[number] += 1 : countObject[number] = 1;
  });
  return Object.values(countObject).every(count => count === 1);
}

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (everyDigitOccursOnce(featuredNum)) {
      return featuredNum;
    }
    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills these requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

/*
Trying a 'seen' object.


function allUnique(number) {
  let digits = String(number).split("");
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }
    seen[digits[idx]] = true;
  }

  return true;
}
*/

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
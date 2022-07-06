// featured number:
  // odd #
  // multiple of 7
  // all its digits occur exactly once each
  // largest featured # is 9876543201

// function
  // takes integer as arg, returns next featured number > than input
  // issue error message if no next featured #

// input - number
// output - number

// start at starting #
// increment by 1 until next # is a multiple of 7
// then, increment by 7 until odd and all digits occur exactly once

// determine if all digits occur exactly once
  // convert to string
  // have a seen obj
  // iterate thru string, when each digit is encountered, check obj
  // if it has been seen before, return false

function featured(startingNumber) {
  const MAX_POSSIBLE = 9876543201;
  let count = nextOddMultipleOf7(startingNumber);

  do {
    if (allDigitsUnique(count)) {
      return count;
    } 
    
    count += 14;
  } while (count <= MAX_POSSIBLE);

  return 'There is no possible number that fulfills those requirements.'
}

function nextOddMultipleOf7(number) {
  do {
    number += 1
  } while (number % 7 !== 0 || number % 2 === 0);

  return number;
}

function allDigitsUnique(number) {
  let numberString = String(number);
  let seen = {};

  for (let index = 0; index < numberString.length; index += 1) {
    if (seen[numberString[index]]) {
      return false;
    } else {
      seen[numberString[index]] = true;
    }
  }

  return true;
}

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
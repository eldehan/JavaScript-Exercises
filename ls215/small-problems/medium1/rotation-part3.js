function rotateRightmostDigits(number, place) {
  let numberArray = String(number).split('');
  let indexToSplice = numberArray.length - place;
  let splicedNumber = numberArray.splice(indexToSplice, 1)[0];

  numberArray.push(splicedNumber);

  return parseInt(numberArray.join(''));
}

function maxRotation(number) {
  let numLength = String(number).length;
  for (let count = numLength; count > 0; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
function rotateRightmostDigits(number, count) {
  let digitArray = String(number).split("");
  let movingDigit = digitArray.splice(digitArray.length - count, 1);
  digitArray.push(movingDigit);
  return Number(digitArray.join(""));
}

function maxRotation(number) {
  let newNumber = number;
  for (let count = String(number).length; count >= 2; count -= 1) {
    newNumber = rotateRightmostDigits(newNumber, count);

  }
  return newNumber;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
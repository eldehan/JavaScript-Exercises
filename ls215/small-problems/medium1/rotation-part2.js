function rotateRightmostDigits(number, place) {
  let numberArray = String(number).split('');
  let indexToSplice = numberArray.length - place;
  let splicedNumber = numberArray.splice(indexToSplice, 1)[0];

  numberArray.push(splicedNumber);

  return parseInt(numberArray.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
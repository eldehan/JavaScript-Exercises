// double number - even-length # whose left side digits are exactly the same as its right side digits

// function that returns the number provided as arg * 2, unless arg is a double #, then return double # as is

// input - number
// output - number (either doubled or untouched)

// determining if something is a double #
  // convert # to string
  // check if the first half of the string is = to the second half
    // string.slice(0, (string.length / 2)) === string.slice(string.length / 2)

function twice(number) {
  return isDouble(number) ? number : number * 2;
}

function isDouble(number) {
  let stringedNumber = String(number);
  let halfwayPoint = stringedNumber.length / 2;

  return stringedNumber.slice(0, (halfwayPoint)) === stringedNumber.slice(halfwayPoint);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
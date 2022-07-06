// calculate fibonacci numbers
// have a counter incrementing along with every fibonacci number
  // counter starts at 1
// at each step when a new fibonacci number is calculated, convert it to a string and save the length of it
// the condition of the loop is to stop when the # of digits is = to the length of the number

// calculating fibonacci #
  // 1st num is 1
  // 2nd num is 1
  // next num is 1st num + 2nd num
  // then, 2nd num = next num and 1st num = 2nd num

function findFibonacciIndexByLength(numberOfDigits) {
  let firstNum = 1n;
  let secondNum = 1n;
  let fibonacci = firstNum + secondNum;
  let numberIndex = 2n;

  while (true) {
    fibonacci = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = fibonacci;
    numberIndex += 1n;

    if (String(fibonacci).length == numberOfDigits) {
      break;
    }
  }

  return numberIndex;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
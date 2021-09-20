function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let fibonacci;
  let count = 2n;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  }
  while (fibonacci.toString().length < length)
  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
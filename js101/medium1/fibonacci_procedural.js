// first num -> 1
// second num -> 1
// SUM AND THIRD NUM - 2
// now, first num is second 1
// second num is SUM

// SUM (4th num) is 3
// first num is now 2
// second num is now SUM

function fibonacci(nth) {
  let firstNum = 1;
  let secondNum = 1;
  let fibonacciSum;

  for (let counter = 2; counter < nth; counter += 1) {
    fibonacciSum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = fibonacciSum;
  }
  return fibonacciSum;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
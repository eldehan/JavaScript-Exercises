// compute nth fibonacci # without recursion

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  
  let firstNum = 1;
  let secondNum = 1;
  let count = 2;
  let fibonacci;

  do {
    fibonacci = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = fibonacci;

    count += 1;
  } while (count < nth);

  return fibonacci;
}

function fibonacciAlternate(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
  }

  return previousTwo[1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
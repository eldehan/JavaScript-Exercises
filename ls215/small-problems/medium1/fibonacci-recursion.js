// function
// computes the nth fibonacci #, where nth is the argument passed to the function
// MUST BE RECURSIVE

// have to call same function with argument of n - 1
// if n === 1 OR n === 2; then return 1
// otherwise, return fibonacci(n - 1) + fibonacci (n - 2)

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

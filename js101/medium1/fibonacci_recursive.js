function fibonacci(nth) {
  //base case
  if (nth < 3) return 1;

  // part where we tell it to do a thing that's recursive
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}


// fibonacci 55th -> 55th fibonacci number
// F(n) = F(n - 1) + F(n - 2) where n > 2
// F(55) = F(55 - 1) + F(55 - 2) where n > 2

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
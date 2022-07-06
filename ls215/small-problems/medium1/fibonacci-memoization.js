// calculate fibonacci using memoization
// refactor recursive to use memoization

let fibonacci = (function() {
  let seen = {};

  return function(n) {
    if (n === 1 || n === 2) {
      return 1;
    } else {
      if (seen[n]) {
        return seen[n];
      } else {
        seen[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return seen[n];
      }
    }
  }
})();

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
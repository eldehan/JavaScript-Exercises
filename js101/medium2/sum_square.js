/*
sumsSquared = push into an array every number between 1 and the max, then reduce that array to return a sum, then square that sum
squaresSummed = push into an array every number between 1 and the max, then map that array to square each #, then reduce that mapped array to return a sum

subtract the second from the first, and return the result
*/

// function sumSquareDifference(number) {
//   return sumsSquared(number) - squaresSummed(number);
// }

// function sumsSquared(number) {
//   let numberArray = [];
//   for (let count = 1; count <= number; count += 1) {
//     numberArray.push(count);
//   }
//   let sum = numberArray.reduce((total, number) => total + number, 0);
//   return sum ** 2;
// }

// function squaresSummed(number) {
//   let numberArray = [];
//   for (let count = 1; count <= number; count += 1) {
//     numberArray.push(count ** 2);
//   }
//   let sum = numberArray.reduce((total, number) => total + number, 0);
//   return sum;
// }

// This was an extremely imperative approach, and kind of redundant. Their solution is much more concise, does away with duplicate iterating loops with barely any difference.

// function sumSquareDifference(count) {
//   let sum = 0;
//   let sumOfSquares = 0;

//   for (let number = 1; number <= count; number += 1) {
//     sum += number;
//     sumOfSquares += Math.pow(number, 2);
//   }
//   return Math.pow(sum, 2) - sumOfSquares;
// }

// another possible solution, adapted a student solution:

function sumSquareDifference(num) {
  let squareOfSum = [...Array(num)].map((_, index) => index + 1)
                                   .reduce((sum, num) => sum + num, 0) ** 2;
  let sumOfSquares = [...Array(num)].map((_, index) => (index + 1) ** 2)
                                    .reduce((sum, num) => sum + num, 0);
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
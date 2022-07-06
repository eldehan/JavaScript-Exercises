// function
  // computes difference between square of sum of first n integers
  // vs sum of the squares of the first n integers
// square of sums - (1 + 2 + 3)^2
// sum of squares - (1^2 + 2^2 + 3^2)
// so, squaresums - sumsquares

function sumSquareDifference(limit) {
  let numberList = [];
  for (let count = 1; count <= limit; count += 1) {
    numberList.push(count);
  }
  
  let squareOfSums = numberList.reduce((sum, number) => sum + number, 0)**2;
  let sumOfSquares = numberList.map(num => num**2).reduce((sum, number) => sum + number, 0);

  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
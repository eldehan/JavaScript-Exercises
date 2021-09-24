/*
input - array
output - one number (sum of each leading subsequence)

iterate through array
use reduce inside iteration
have iteration correspond to endpoint of reduce
*/

// function sumOfSums(numArray) {
//   let sum = 0;
//   for (let limit = 0; limit < numArray.length; limit += 1) {
//     for (let num = 0; num <= limit; num += 1) {
//       sum += numArray[num];
//     }
//   }
//   return sum;
// }

function sumOfSums(numArray) {
  return numArray.map((_, index) => numArray.slice(0, index + 1))
                 .flat()
                 .reduce((sum, number) => sum + number);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
/*
Input - array
Output - transformed array

requirements: output array has same # of elements, but each element is the running total from the original array

data structures - well, arrays


*/

function runningTotal(array) {
  let sum = 0;
  let totalArray = [];
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    totalArray[i] = sum;
  }
  return totalArray;
}

function runningTotalTwo(array) {
  let sum = 0;
  let totalArray = array.map((element) => {
    return sum += element;
  });
  return totalArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

console.log(runningTotalTwo([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalTwo([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalTwo([3]));                    // [3]
console.log(runningTotalTwo([]));                     // []
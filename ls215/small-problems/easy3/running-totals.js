// function
// takes an array of #s and returns an array with same # of elements, but with each element's
// value being the running total from the original array

// map old array
// for each value, slice array from first spot to index spot
// sum all index spots and return this value

function runningTotal(numberArray) {
  return numberArray.map((number, index, array) => {
    return array.slice(0, index + 1)
                .reduce((sum, value) => sum + value, 0)
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
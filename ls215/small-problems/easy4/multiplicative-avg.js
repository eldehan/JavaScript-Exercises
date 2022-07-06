// function
// takes array of integers and multiplies all integers together, divides result by # of entries in array, then
// returns result as a string rounded to 3 decimal places

// use reduce on array, divide result by array length, use toFixed(3) for rounding

function showMultiplicativeAverage(array) {
  let product = array.reduce((product, number) => number * product, 1);
  let average = product / array.length;

  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
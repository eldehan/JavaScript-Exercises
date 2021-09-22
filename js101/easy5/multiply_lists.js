/*

input - 2 arrays
output - one array with the values of the 2 arrays multiplied together

assume arguments contain same number of elements

data structure - array

*/

function multiplyList(arr1, arr2) {
  return arr1.map((_, idx) =>  arr1[idx] * arr2[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

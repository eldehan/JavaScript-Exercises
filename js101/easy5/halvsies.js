/*

input - array
output - array of arrays; basically the array split in half

explicit requirements:
    return is an array with 2 elements
    each element of return array is itself an array
    first half of original array elements go in 1st element, second half in second
    if the array contains an odd number of elements, place the middle element in the first half array
implicit requirements:
    an array with only 1 item returns an array of 2 arrays; 2nd array will be empty
    array with 0 items will return an array with 2 elements, both of which are empty


Probably want to create array of arrays
iterate through original array
  while indexed spot is 50% of length or less, push those items into array1
  while indexed spot is 50% or greater, push those items into array2

Define variable midpoint, which:
  if array length is odd, is = to Math.floor(array.length / 2)
  if array length is even, is = to Math.floor(array.length / 2) - 1

Use this to define the splitting boundaries

use for each, enclosing if statements

*/

function halvsies(array) {
  let resultArray = [[], []];
  let midpoint = Math.ceil(array.length / 2);

  array.forEach((element, index) => {
    if (index < midpoint) {
      resultArray[0].push(element);
    } else {
      resultArray[1].push(element);
    }
  });
  return resultArray;
}

console.log(halvsies([1, 2, 3]));
console.log(halvsies([1, 2, 3, 4, 5, 6]));

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
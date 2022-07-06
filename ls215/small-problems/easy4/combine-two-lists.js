// function
  // combines 2 arrays passed as arguments
  // returns new array with all elements from both input arrays
  // each element is taken in alternation from each of the arrays
    // i.e. array1element1, array2element1, array1element2, array2element2
  // can assume both input arrays are non-empty and have same # of elements

// input - 2 arrays
// output - 1 array

// initialize result array
// loop for the length of an array, and for each index of the original arrays, push those elements into the new array

// function interleave(array1, array2) {
//   let results = [];

//   for (let index = 0; index < array1.length; index += 1) {
//     results.push(array1[index]);
//     results.push(array2[index]);

//     // push can take more than 1 arg per iteration, so this also works:
//     // results.push(array1[index], array2[index]);
//   }

//   return results;
// }

// or

function interleave(array1, array2) {
  return array1.flatMap((item, index) => [item, array2[index]]);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave([true, true, true], [false, false, false]));
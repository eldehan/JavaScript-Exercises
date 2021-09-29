/*
input - array
output - array sorted

requirements - bubble sort
             - sorting should be done in-place (should mutate the array)
             - can assume array contains at least 2 elements

swap
  uses 3rd temp variable
  set temp to b
  set b to a
  set a to temp (b)
  return a and b

set to repeat while true
  set swapped to false
  iterate through array from indexes 0 to n - 2
    if the pair (index and index + 1) is out of order, call function swap to swap their places
      set swap to true
  if swapped is false at the end, break;
*/

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        // let temp = array[index + 1];
        // array[index + 1] = array[index];
        // array[index] = temp;
        // alternatively:
        [array[index], array[index + 1]] = [array[index + 1], array[index]]; // this uses array destructuring to achieve the same thing as lines 29-31
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
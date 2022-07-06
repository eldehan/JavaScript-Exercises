// bubble sort
// start a loop
  // set a swap toggle to determine if any swaps have been made
  // loop through every element in the array, comparing it to the next element
    // order accordingly 
  // if end of list is reached and swap is true, continue sorting
  // if end is reached and swap is false (no swaps were made) return the sorted array
  

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swapped = true;
      }
    }
  } while (swapped === true);

  return array;
}


const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
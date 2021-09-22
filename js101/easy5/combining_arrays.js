/*

input - 2 arrays
output - 1 array

explicit requirements:
    No duplication of values in the returned array
      Even if there are duplicates in the original arrays
    Can assume both arguments will always be arrays

Data structure:
    Array

Method 1:
Concatenate the two arrays into a new array
Then, two loops:
  One loop which sits on an index
  Another which loops through the rest of the values
  If another value is deemed to be = to the outer loop's index, then the newly found one is spliced
Return the new array


Method 2:
Initialize new empty array
Set value of arrayunion to array 1
Then, loop through array 2, and if array1 does not include that value, push it into union array
Then, sort the union array
*/

////////////////////////////////////////////////

function union(array1, array2) {
  let arrayUnion = array1.concat(array2);
  for (let mainIndex = 0; mainIndex < arrayUnion.length; mainIndex += 1) {
    for (let comparisonIndex = mainIndex + 1; comparisonIndex < arrayUnion.length; comparisonIndex += 1) {
      while (arrayUnion[mainIndex] === arrayUnion[comparisonIndex]) {
        arrayUnion.splice(comparisonIndex, 1);
      }
    }
  }
  return arrayUnion;
}

////////////////////////////////////////////////
// would still need a way to get rid of dupes inside of a single array
function union2(array1, array2) {
  let arrayUnion = [].concat(array1);
  for (let index = 0; index < array2.length; index += 1) {
    if (!(arrayUnion.includes(array2[index]))) {
      arrayUnion.push(array2[index]);
    }
  }
  return arrayUnion.sort((a, b) => a - b);
}

////////////////////////////////////////////////

function copyNonDupesTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union3(...args) {
  let newArray = [];
  args.forEach(value => copyNonDupesTo(newArray, value));
  return newArray;
}

////////////////////////////////////////////////

function union4(arr1, arr2) {
  let resultArray = [];
  let values = [...arr1, ...arr2];
  values.forEach(item => {
    if (!resultArray.includes(item)) resultArray.push(item);
  });
  return resultArray;
}

////////////////////////////////////////////////

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 3], [3, 6, 1]));

console.log(union2([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union2([1, 3, 3], [3, 6, 1]));

console.log(union3([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union3([1, 3, 3], [3, 6, 1]));

console.log(union4([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union4([1, 3, 3], [3, 6, 1]));
/*
input - array
output - return array 'rotated' (1st element moved to end of array)
       - if not an array, return undefined
       - if empty array, return an empty array

slice the array to make a copy of it
unshift first element of array, save it in a variable
push that value via that variable onto the end of the array

we'll see what happens when undefined or empty
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let rotatingArray = array.slice();
  let rotatingElement = rotatingArray.shift();
  rotatingArray.push(rotatingElement);
  return rotatingArray;
}

//or, more concisely

function rotateArray2(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  
  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

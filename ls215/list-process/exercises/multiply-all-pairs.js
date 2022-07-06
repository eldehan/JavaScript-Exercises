/*

*/

function multiplyAllPairs(array1, array2) {
  let resultArray = [];

  array1.forEach(number => {
    array2.forEach(otherNumber => {
      resultArray.push(number * otherNumber);
    });
  });

  return resultArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
// join 2 arrays together; there should be no duplicated values in the joined array, even if the original arrays had duplicates

// initialize results array
// concat 2 original arrays and iterate thru
  // for each element, check whether the results array contains that element
    // if it doesn't, add it to the results array
// return results array

// function union(array1, array2) {
//   let results = [];
//   let arrays = array1.concat(array2);

//   for (let index = 0; index < arrays.length; index += 1) {
//     if (!results.includes(arrays[index])) {
//       results.push(arrays[index]);
//     }
//   }

//   return results;
// }

//or

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
// function sequence(limit) {
//   let results = [];
//   for (let count = 1; count <= limit; count += 1) {
//     results.push(count);
//   }

//   return results;
// }

function sequence(limit) {
  return Array(limit).fill().map((_, index) => index + 1);
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
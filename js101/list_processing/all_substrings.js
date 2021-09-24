// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let index = 1; index <= string.length; index += 1) {
//     substrings.push(string.slice(0, index));
//   }
//   return substrings;
// }

function allSubstrings(string) {
  let substrings = [];
  for (let start = 0; start < string.length; start += 1) {
    for (let index = start + 1; index <= string.length; index += 1) {
      substrings.push(string.slice(start, index));
  }
 }
 return substrings;
}

console.log(allSubstrings('abcde'));
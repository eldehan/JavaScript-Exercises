// initialize empty result array
// for each first array digit (number1
    // for each second array digit (number2)
    // push first array digit * second array digit
// sort result array a - b

function multiplyAllPairs(nums1, nums2) {
  let results = [];
  nums1.forEach(number1 => {
    nums2.forEach(number2 => {
      results.push(number1 * number2);
    });
  });
  return results.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
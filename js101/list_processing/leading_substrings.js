function leadingSubstrings(string) {
  let substrings = [];
  for (let index = 1; index <= string.length; index += 1) {
    substrings.push(string.slice(0, index));
  }
  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
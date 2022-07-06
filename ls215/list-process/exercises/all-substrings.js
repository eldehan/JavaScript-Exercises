function leadingSubstrings(string) {
  return [].map.call(string, (_, idx) => string.slice(0, idx + 1));
}

function substrings(string) {
  return [].map.call(string, (_, idx) => {
    return leadingSubstrings(string.slice(idx))
  }).flat();
}

console.log(substrings('abcde'));
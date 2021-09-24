function palindromes(string) {
  let substrings = [];
  for (let start = 0; start < string.length; start += 1) {
    for (let index = start + 1; index <= string.length; index += 1) {
      let substringCandidate = string.slice(start, index)
      if (isPalindrome(substringCandidate) && substringCandidate.length > 1) {
        substrings.push(substringCandidate);
      }
  }
 }
 return substrings;
}

function isPalindrome(substring) {
  return (substring === substring.split("").reverse().join(""));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
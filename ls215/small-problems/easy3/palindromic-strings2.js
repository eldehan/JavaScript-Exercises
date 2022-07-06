// function returns true if string arg is palindrome, false if otherwise
// this time, case-insensitive and ignore all non-alphanumeric chars

function isPalindrome(text) {
  return text.split('').reverse().join('') === text;
}

function cleanText(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isRealPalindrome(text) {
  let cleanedText = cleanText(text);
  return isPalindrome(cleanedText);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
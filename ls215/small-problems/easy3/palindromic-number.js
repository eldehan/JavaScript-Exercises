'use strict'

function isPalindromicNumber(number) {
  console.log(String(number));
  return isPalindrome(String(number));
}

function isPalindrome(text) {
  return text.split('').reverse().join('') === text;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(0220));           // true
console.log(isPalindromicNumber(5));            // true
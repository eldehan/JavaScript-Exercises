// function that returns true if string passed as arg is palindrome, false if otherwise
// palindrome reads same forwards and backwards
// case matters, all chars matter (i.e. Lol is NOT a palindrome, while LOL is)
// input - string
// output - boolean (whether string passes palindrome test)

// work with string as array of chars
  // allows us to use methods like reverse() to easily reverse the word and check for equality with non-reversed form

function isPalindrome(text) {
  return text.split('').reverse().join('') === text;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
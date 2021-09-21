/*
Input - string
Output - boolean

Explicit requirements: Function takes in a string
                       Output says true if string is a palindrome, false if not
                       Case matters, characters matter

Data structures: String. No need to convert into anything else

Define function
return true if string.reverse = string, otherwise, return false
*/

// function isPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }

let isPalindrome = string => string === string.split("").reverse().join("");

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
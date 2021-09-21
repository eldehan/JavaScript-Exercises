// const alphabetNumbers = "abcdefghijklmnopqrstuvwxyz1234567890";

// let isPalindrome = string => string === string.split("").reverse().join("");

// function isRealPalindrome(string) {
//   let lowerCaseString = string.toLowerCase();
//   let cleanedString = "";
//   for (let i = 0; i < lowerCaseString.length; i += 1) {
//     if (alphabetNumbers.includes(lowerCaseString[i])) {
//       cleanedString += lowerCaseString[i];
//     }
//   }
//   return isPalindrome(cleanedString);
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
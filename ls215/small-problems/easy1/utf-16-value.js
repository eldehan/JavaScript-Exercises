/*
return utf16 value of string
  sum of utf-16 values of every char in string
    can use charCodeAt() to get utf-16 value of a character

split string into array
map through array turning each char into its char code value
sum all values
    */



function utf16Value(string) {
  return string.split('')
               .map((_, index) => string.charCodeAt(index))
               .reduce((sum, charCode) => charCode + sum, 0);
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
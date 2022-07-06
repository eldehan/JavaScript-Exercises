// function
  // should swap first and last chars of every word in a string
    // words are separated by spaces
    // can assume every word contains at least 1 letter
    // can assume input string will always contain at least one word
    // can assume string contains nothing but words and spaces
    // can assume there will be no leading, trailing, or repeated spaces
      // WHICH IS TO SAY, no need to validate any input at all
  // remaining letters in each word (letters that are not first/last) remain unchanged

// input - string
// output - string (with first and last letters of each word swapped)

// data structure
  // arrays

// split string into array of words with ' ' separator
// map array of words
  // for each word, split it into array of chars
    // swap first and last chars
    // rejoin into word

// function swap(string) {
//   return string.split(' ')
//                .map(swapFirstAndLast)
//                .join(' ');
// }

function swapFirstAndLast(word) {
  let charArray = word.split('');
  [charArray[0], charArray[charArray.length - 1]] = [charArray[charArray.length - 1], charArray[0]]

  return charArray.join('');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap(string) {
  return string.split(' ').map(word => {
    return word.split('').reverse().join('')
  }).join(' ')
}
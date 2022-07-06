// same as before but it should not double vowels, digits, punctuation, or whitespace

function doubleConsonants(string) {
  return string.replace(/[bcdfghjklmnpqrstvwxyz]/gi, (match) => match + match);
}

// function doubleConsonants(string) {
//   return string.replace(/([bcdfghjklmnpqrstvwxyz])/gi, '$1$1');
// }

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
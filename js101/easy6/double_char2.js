// function doubleConsonants(string) {
//   let doubledString = '';
//   for (let index = 0; index < string.length; index += 1) {
//     if (isConsonant(string[index])) {
//       doubledString += string[index].repeat(2);
//     } else {
//       doubledString += string[index];
//     }
//   }
//   return doubledString;
// }

let doubleConsonants = string => [...string].map(char => {
  if (isConsonant(char)) {
    return char + char;
  } else {
    return char;
  }
}).join('');

function isConsonant(char) {
  let consonants = "BCDFGHJKLMNPQRSTVWXYZ";
  return (consonants.includes(char.toUpperCase()));
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
/*
input: word
output: boolean

data structure: array and objects

can have an array of objects where each object has 3 properties (letter1, letter2, available)
for each char of the word, iterate thru array of objects
  - check each element to see if letter1 or letter2 matches the indexed char
  - if it does, and the block is available, set available to false
    - then, break the array iteration loop and continue through the word loop
  - if it does and the block isn't available, return false to the whole program
*/

function isBlockWord(word) {
  let blocks = [
    { letter1: 'B', letter2: 'O', available: 'yes' },
    { letter1: 'X', letter2: 'K', available: 'yes' },
    { letter1: 'D', letter2: 'Q', available: 'yes' },
    { letter1: 'C', letter2: 'P', available: 'yes' },
    { letter1: 'N', letter2: 'A', available: 'yes' },
    { letter1: 'G', letter2: 'T', available: 'yes' },
    { letter1: 'R', letter2: 'E', available: 'yes' },
    { letter1: 'F', letter2: 'S', available: 'yes' },
    { letter1: 'J', letter2: 'W', available: 'yes' },
    { letter1: 'H', letter2: 'U', available: 'yes' },
    { letter1: 'V', letter2: 'I', available: 'yes' },
    { letter1: 'L', letter2: 'Y', available: 'yes' },
    { letter1: 'Z', letter2: 'M', available: 'yes' },
  ];
  for (let char = 0; char < word.length; char += 1) {
    let match = false;
    for (let blockIndex = 0; blockIndex < blocks.length; blockIndex += 1) {
      if ((word[char].toUpperCase() === blocks[blockIndex]['letter1'] ||
          word[char].toUpperCase() === blocks[blockIndex]['letter2']) &&
          blocks[blockIndex]['available'] === 'yes') {
            blocks[blockIndex]['available'] = 'no';
            match = true;
            break;
      }
    }
    if (!match) return false;
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
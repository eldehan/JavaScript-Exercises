/*
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
*/

// function
// returns whether or not word can be spelled w/ blocks
// each block can only be used once

// data structure - array

// organize array of blocks, with each element having the 2 letters
// for each letter of the word, iterate thru the array and check to see if any element of the array includes that letter
  // if it does, delete that element from the array (remove the block)
  // if none do, then the word cannot be spelled with the blocks and it should return false

// checking to see if any element of the array includes the letter
  // regex!

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  for (let wordIndex = 0; wordIndex < word.length; wordIndex += 1) {
    let noBlock = true;
    let letter = word[wordIndex];
    let letterRegex = new RegExp(letter, 'i');

    for (let blockIndex = 0; blockIndex < blocks.length; blockIndex += 1) {
      let block = blocks[blockIndex];
      
      if (letterRegex.test(block)) {
        blocks.splice(blockIndex, 1);
        noBlock = false;
        break;
      }
    }

    if (noBlock) return false;
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
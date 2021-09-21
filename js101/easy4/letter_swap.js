function swap(string) {
  let wordArray = string.split(" ");

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    wordArray[idx] = swapFirstAndLast(wordArray[idx]);
  }

  return wordArray.join(" ");
}

function swapFirstAndLast(word) {
  if (word.length === 1) {
    return word;
  }
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}



console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
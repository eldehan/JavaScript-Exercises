function wordSizes(string) {
  let count = {};
  let wordArray = string.split(" ");

  for (let index = 0; index < wordArray.length; index += 1) {
    let cleanWordSize = cleanThoseWords(wordArray[index].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }
  return count;
}

function cleanThoseWords(word) {
  let cleanedWord = "";

  for (let index = 0; index < word.length; index += 1) {
    if (isLetter(word[index])) {
      cleanedWord += word[index];
    }
  }
  return cleanedWord;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

























console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
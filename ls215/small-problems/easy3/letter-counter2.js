function wordSizes(string) {
  return string.split(' ').reduce((obj, word) => {
    word = filterNonAlphabetic(word);
    let wordLength = word.length;

    if (wordLength === 0) {
      return obj;
    }

    obj[wordLength] = obj[wordLength] ? obj[wordLength] + 1 : 1;
    return obj;
  }, {})
}

function filterNonAlphabetic(word) {
  return word.replace(/[^a-z]/gi, '');
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
// function
  // takes a string consisting of one or more words separated by spaces
  // returns an object showing the # of words of different sizes
  // words consist of any sequence of non-space characters
  // the 'size' of the word is the length of the word
  // an empty string returns an empty object
  // 'empty' words (words that are just spaces) do not count towards length
    // i.e. no 0 length words in the resulting object

// input - string of one or more words
// output - object
  // keys are the lengths of the words in the string
  // values are the #s of words of that length in the string

// break string into array of words
// reduce word array into object with count of the lengths

function wordSizes(string) {
  return string.split(' ').reduce((obj, word) => {
    let wordLength = word.length;

    if (wordLength === 0) {
      return obj;
    }

    obj[wordLength] = obj[wordLength] ? obj[wordLength] + 1 : 1;
    return obj;
  }, {})
}

console.log(wordSizes('Four score   and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
/*

input - string
output - object

requirements: turn string consisting of 0 or more space separated words into an obj that shows how many words of different sizes there are
 - keys are word lengths
  - values are how many words there are of that length

data structures - arrays! and output into an object

- split string into words by spaces
- create empty object
- iterate through array and for the length of each word, that length as a number key += 1
???

*/

function wordSizes(string) {
  let wordArray = string.split(" ");
  let count = {};

  if (string.length === 0) return count;

  for (let i = 0; i < wordArray.length; i += 1) {
    count[wordArray[i].length] = 0;
  }
  for (let i = 0; i < wordArray.length; i += 1) {
    count[wordArray[i].length] += 1;
  }
  return count;
}

// function wordSizes(words) {
//   let wordsArray = words.split(" ");
//   let count = {};

//   for (let index = 0; index < wordsArray.length; index += 1) {
//     let wordSize = wordsArray[index].length;
//     if (wordSize === 0) {
//       continue;
//     }
//     if (!count[wordSize]) {
//       count[wordSize] = 0;
//     }
//     count[wordSize] += 1;
//   }

//   return count;
// }


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
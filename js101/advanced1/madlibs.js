/*

data structure for replacements:
an object where each key is 'noun' or 'verb', etc, and each value is an array listing the words as separate values

access random replacements by generating a random number that correlates to the index of the array of the appropriate object key

write a function to randomly access one of the words, using the key
function (key argument)
  - generate random number between 0 and # of words in each array piece, inclusive
  - set word to object['key'][randomNum]
  - return word
*/

let replacements = {
  '{adjective}': ['springy', 'smart', 'whimsical', 'dim-witted', 'ravenous', 'goofy'],
  '{noun}': ['fox', 'robot', 'kitten', 'asteroid', 'apple'],
  '{verb}': ['jumps', 'falls', 'slurps', 'bites'],
  '{adverb}': ['angrily', 'hungrily', 'sleepily', 'hilariously'],
};

function madlibs(template) {
  let newStringArray = [];
  let replaceWord = (key) => replacements[key][generateIndex(key)];
  let generateIndex = (key) => Math.floor(Math.random() * (replacements[key].length));

  template.split(" ").forEach(word => {
    if (replacements[word]) {
      newStringArray.push(replaceWord(word));
    } else {
      newStringArray.push(word);
    }
  });
  return newStringArray.join(" ");
}

console.log(madlibs('The {adjective} {noun} {verb} {adverb}'));
function wordToDigit(string) {
  let newStringArray = [];
  string.split(" ").forEach(word => {
    switch (word) {
      case 'zero':
        newStringArray.push('0');
        break;
      case 'one':
        newStringArray.push('1');
        break;
      case 'two':
        newStringArray.push('2');
        break;
      case 'three':
        newStringArray.push('3');
        break;
      case 'four':
        newStringArray.push('4');
        break;
      case 'five':
        newStringArray.push('5');
        break;
      case 'six':
        newStringArray.push('6');
        break;
      case 'seven':
        newStringArray.push('7');
        break;
      case 'eight':
        newStringArray.push('8');
        break;
      case 'nine':
        newStringArray.push('9');
        break;
      default:
        newStringArray.push(word);
    }
  });
  return newStringArray.join(" ");
}

// or

const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit2(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });
  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
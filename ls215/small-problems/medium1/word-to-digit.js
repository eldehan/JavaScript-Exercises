// function
// takes sentence as argument, returns string with every occurrence of a 'number word' (i.e. zero, one, etc.) converted to its corresponding digit character
// input - string
// output - string w/ 'number words' converted to digit equivalents
// implied: only implement for numbers from 0 to 9

// data structure can string - can use regex and replacement function to replace number words and return the changed string.
// in replacement function:
  // can use switch case to cover possible matches

function numberWordReplacer(match) {
  switch (match) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    case 'zero':
      return '0';
  }
}

function wordToDigit(string) {
  let numberWordsRegex = new RegExp(/\b(one|two|three|four|five|six|seven|eight|nine|zero)\b/, 'gi');
  return string.replace(numberWordsRegex, numberWordReplacer);
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
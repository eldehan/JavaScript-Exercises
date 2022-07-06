/*
input - array of integers between 0 and 19
output - NEW array of integers sorted based on english word for each number

iterate thru input array, use input #s as indexes to retrieve appropriate
word from words array.
build new array, where each spot is a combo of the number and the word
sort based on the word half of each pair
map into new array of just the digits
*/

function alphabeticNumberSort(integerArray) {
  const WORDS = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

  return integerArray.map(digit => {
    return [digit, WORDS[digit]];
  }).sort((number1, number2) => {
    if (number1[1] < number2[1]) {
      return -1;
    } else if (number1[1] > number2[1]) {
      return 1;
    } else {
      return 0;
    }
  }).map(numberWordPair => numberWordPair[0]);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));


// Alternatively:

// function wordSort(num1, num2) {
//   const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
//                         'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                         'twelve', 'thirteen', 'fourteen', 'fifteen',
//                         'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(array) {
//   return [...array].sort(wordSort);
// }
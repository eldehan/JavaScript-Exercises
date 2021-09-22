/*

input - a number (considered a list of digits, but actually an unbroken integer)
output - an array, which is a list of each of the digits from the integer

explicit requirements:
    The function takes 1 argument, which is the positive integer
    The function returns an array
      Each element of the array is a digit from the positive integer

data structure:
    Numbers, strings, arrays

define function
    function takes integer argument
    save integer argument into a variable as a string
    split the string by every character
    map the resulting array so that each stringy number becomes an actual number
    return array
*/

function digitList(integer) {
  return String(integer).split("").map(char => Number(char));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
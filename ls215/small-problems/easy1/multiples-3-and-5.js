/*

function that computes sum of all #s between 1 and other #, inclusive,
that are multiples of 3 or 5

input - number (the upper limit of the range of numbers)
output - number (sum of the multiples between those 2 numbers)

multiple range is inclusive between 2 numbers
multiples of 3 or 5
each number should be included only once
  i.e. 15 is a multiple of 3 and 5, but should only be included once
can assume any # passed in is an integer greater than 1
  no need to validate input

data structure:
array - able to form the list of numbers, able to perform a method
like reduce on it to sum the #s

algo:
initialize empty array to hold multiples
iterate through numbers from 1 up to upper limit
  // at each step, check if the # is a multiple of 3 or 5
  // if it is, push it into the multiples array

once loop is done and array of multiples is built, sum all the #s up
return the result of the summing

*/

function multisum(limit) {
  let multiples = getMultiples(limit, 5, 3);

  return multiples.reduce((sum, number) => number + sum, 0);
}

function getMultiples(limit, number1, number2) {
  let results = [];
  for (let count = 1; count <= limit; count += 1) {
    if (count % number1 === 0 || count % number2 === 0) {
      results.push(count);
    }
  }

  return results;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

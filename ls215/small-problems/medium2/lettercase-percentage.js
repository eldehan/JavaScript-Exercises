// function
// takes a string and returns an obj containing 3 properties:
  // percent of chars in input string that are lowercase
  // percent of chars in input string that are uppercase
  // percent of chars in input string that are neither

// input - string
// output - object
// can assume input string will always contain at least 1 char

// get # of chars of each type by filtering string-turned-array based on appropriate conditions, and then find length of results
// divide string total length by length of each category, then multiply by 100, to get %
// return an object with properties for each of the categories

function letterPercentages(string) {
  let lowercase = string.replace(/[^a-z]/g, '').length;
  let uppercase =  string.replace(/[^A-Z]/g, '').length;
  let neither = string.replace(/[a-zA-Z]/g, '').length;

  return {
    lowercase: ((lowercase / string.length) * 100).toFixed(2),
    uppercase: ((uppercase / string.length) * 100).toFixed(2),
    neither: ((neither / string.length) * 100).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
/*
input - string
output - obj with 3 properties:
  - percent of chars that are lowercase
  - percent of chars that are uppercase
  - perecnt of chars that are neither
implicit requirements:
  - round percentages to 2 decimal points, always.

create function for determining if a char is lowercase

create a function for determining if a char is uppercase

neither is everything else

use the length of the string to compare the # of other parts against
*/

function letterPercentages(string) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;
  string.split("").forEach(char => {
    if (isLowercase(char)) {
      lowercaseCount += 1;
    } else if (isUppercase(char)) {
      uppercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  });

  let percentObject = {
    lowercase: ((lowercaseCount / string.length) * 100).toFixed(2),
    uppercase: ((uppercaseCount / string.length) * 100).toFixed(2),
    neither: ((neitherCount / string.length) * 100).toFixed(2)
  };

  return percentObject;
}

function isLowercase(char) {
  return ((char >= 'a') && (char <= 'z'));
}

function isUppercase(char) {
  return ((char >= 'A') && (char <= 'Z'));
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
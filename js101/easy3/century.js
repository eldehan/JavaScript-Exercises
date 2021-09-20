/*
input - integer (year)
output - string (what century it is)

define function century

define function findSuffix
 - check with modulus 10 what the final integer is of the number
 - assign proper string to suffix variable

*/

function century(year) {
  let century = Math.floor((year / 100) + 1);
  let suffix = "";
  if (year % 100 === 0) {
    century -= 1;
  }
  if (century % 100 === 11) {
    suffix = "th";
  } else if (century % 10 === 1) {
    suffix = "st";
  } else if (century % 100 === 12) {
    suffix = "th";
  } else if (century % 10 === 2) {
    suffix = "nd";
  } else if (century % 100 === 13) {
    suffix = "th";
  }  else if (century % 10 === 3) {
    suffix = "rd";
  } else  {
    suffix = "th";
  }
  return (String(century) + suffix);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
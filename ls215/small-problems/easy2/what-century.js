// function
// input - number (a year)
// output - string that begins with the century # and ends with 'st', 'nd', etc. as appropriate

// new centuries begin with years that end in 01 (so, 00 is the last century)

function getSuffix(str) {
  if (str.endsWith('1') && !str.endsWith('11')) {
    return 'st';
  } else if (str.endsWith('2') && !str.endsWith('12')) {
    return 'nd';
  } else if (str.endsWith('3') && !str.endsWith('13')) {
    return 'rd';
  } else {
    return 'th';
  }
}

function century(year) {
  let century = String(Math.ceil(year / 100));

  return century + getSuffix(century);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1899));
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
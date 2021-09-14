// define function with year argument

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
}

function isLeapYear2(year) {
  if (year >= 1752) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  } else {
    return (year % 4 === 0);
  }
}

console.log(isLeapYear2(2016));      // true
console.log(isLeapYear2(2015));      // false
console.log(isLeapYear2(2100));      // false
console.log(isLeapYear2(2400));      // true
console.log(isLeapYear2(240000));    // true
console.log(isLeapYear2(240001));    // false
console.log(isLeapYear2(2000));      // true
console.log(isLeapYear2(1900));      // false
console.log(isLeapYear2(1752));      // true
console.log(isLeapYear2(1700));      // false
console.log(isLeapYear2(1));         // false
console.log(isLeapYear2(100));       // false
console.log(isLeapYear2(400));       // true
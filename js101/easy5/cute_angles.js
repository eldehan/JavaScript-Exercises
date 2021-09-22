/*
Input - floating point number
output - string representing that angle in degrees, minutes, and seconds

define variable formula for each degree/minute/second
concatenate all 3 for final answer
*/

function dms(number) {
  let degrees = Math.floor(number);
  let minutes = Math.floor((number % 1) * 60);
  let seconds = Math.floor((((number % 1) * 60) % 1) * 60);
  return `${String(degrees)}°${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ( '0' + numString) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
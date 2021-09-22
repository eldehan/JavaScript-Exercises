/*

input - string representing time in 24 hour format
output - integer of # of minutes before/after midnight

requirements - 2 functions
                1 before midnight, 1 after midnight
              functions should return integer in the range of 0...1439

split string by :
assign first element to variable hours and turn to number
assign second element to variable minutes and turn to number
add two values together to get minutes total

for after midnight, answer is just that total
for before midnight, answer is 1440 - minutes?

*/

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

function afterMidnight(time) {
  let minutesTotal = calculateMinutes(time);
  return minutesTotal % MINUTES_PER_DAY;
}

function beforeMidnight(time) {
  let minutesTotal = calculateMinutes(time);
  return (MINUTES_PER_DAY - minutesTotal) % MINUTES_PER_DAY;
}

function calculateMinutes(timeString) {
  let [hours, minutes] = timeString.split(":").map(num => parseInt(num, 10));
  return (hours * MINUTES_PER_HOUR) + minutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
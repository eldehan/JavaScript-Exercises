/*
input - integer representing minutes
output - string representing time of day in 24 hour format

explicit requirements: take # of minutes before or after midnight, display as 24h time
                       (hh:mm) format
                       should work with any integer input
                       cannot use javascript date class methods
                       disregard daylight savings and other complications

define function
if absolute value of number is greater than 1440, divide it by 1440
                                                  then take % 1 of result
                                                  then multiply result by 24
                                                  then multiply result by 60
you now have the # of minutes within 1 day of change
if number is -, subtract minutes
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let timeHours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let timeMinutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(timeHours, timeMinutes);
}

function padZeroes(string) {
  while (string.length < 2) {
    string = "0" + string;
  }
  return string;
}

function formatTime(hours, minutes) {
  return `${padZeroes(String(hours))}:${padZeroes(String(minutes))}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(-600) === "14:00");
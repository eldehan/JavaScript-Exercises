// program asks user to enter length and width of a room in meters
// then logs area of room to console in both sq meters and feet
// dont worry about validating input

// ask for length and width of room, in meters
// save these to variables

// calculate to sq meters, save to variable, then use that amount
// to calculate sq ft and save to its own variable
// output line to console with calculated answers

const readline = require('readline-sync');

let lengthInMeters = readline.question('Enter the length of the room in meters.\n');
lengthInMeters = parseInt(lengthInMeters, 10);
let widthInMeters = readline.question('Enter the width of the room in meters.\n');
widthInMeters = parseInt(widthInMeters, 10);


let areaInMeters = (lengthInMeters * widthInMeters).toFixed(2);
let areaInFeet = (areaInMeters * 10.7639).toFixed(2);

console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`)
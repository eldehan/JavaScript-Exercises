const readline = require('readline-sync');

// Get length of room in meters
// Get width of room in meters
// Save both length and width into feet in their own variables
// Calculate size of room using both meters and feet, then return both answers

const SQMETERS_TO_SQFEET = 10.7639;

let length = readline.question('Enter the length of the room in meters: ');
length = parseInt(length, 10);

let width = readline.question('Enter the width of the room in meters: ');
width = parseInt(width, 10);

let areaInMeters = (length * width);

let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);
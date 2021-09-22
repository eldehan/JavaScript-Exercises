/*
input: array of vehicles
output: console output logging how many of each item

explicit requirements: log elements to the console, format doesn't explicitly matter
                       words are case sensitive (suv !== SUV)

data structures: array, object

define function
initialize empty object
loop through array
  for every item, if it is not already in the array, create a spot for it in the array w/
  the value of 1
  if it is in the array already, increment its value by 1

output the keys and their values
*/

function countOccurrences(array) {
  let occurences = {};
  array.forEach(item => {
    if (!occurences[item]) {
      occurences[item] = 1;
    }
    else {
      occurences[item] += 1;
    }
  });
  logOccurences(occurences);
}

function logOccurences(occurences) {
  Object.entries(occurences).forEach(pair => {
    let [item, number] = pair;
    console.log(`${item} => ${number}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

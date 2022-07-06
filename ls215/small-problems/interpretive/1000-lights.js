// input - integer (represents both # of lights and # of repetitions)
// output - array (which lights are still on after n repetitions)

// bank of switches numbered from 1 to n (n is the argument of the function)
// Make n number of loops through the switches
//   - Every loop you toggle the nth switch
//     - i.e. 1st pass, you toggle every light, 2nd pass is 2, 4, 6, 3rd is 3, 6, 9, etc.
// ALL switches are initially OFF (so, first pass turns them ON)

// data structure - array of booleans to represent the toggle state of the switches

// build array of size n, filled with the value 'false'
// loop through rounds 1 to n, and for each round:
//   - for current round i, toggle lights whose indices + 1 are multiples of i

// map array, and for any spot that is ON, turn it into the index + 1 of that spot
//   - filter this array, excluding any item with a value of FALSE

function lightsOn(n) {
  let lightsArray = new Array(n).fill(false);
  
  for (let round = 1; round <= n; round += 1) {
    for (let index = 0; index < n; index += 1) {
      if ((index + 1) % round === 0) {
        lightsArray[index] = !lightsArray[index];
      }
    }
  }

  return lightsArray.map((light, index) => {
    if (light) return index + 1;
  }).filter(light => light !== undefined);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(3)); // all on -> 2 is now off, 1 and 3 are on, 1 is on, 2 and 3 are now off => [1]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
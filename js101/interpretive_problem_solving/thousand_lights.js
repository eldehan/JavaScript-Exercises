/*
input - integer representing # of switches AND # of passes
output - an array of the lights that are on after the final pass

all lights are initially turned off
start from beginning of 'row' of switches every pass
start by flipping on every light
then, flip every 3rd
every 4th
every 5th

basically, the # of switches = the number of passes you make, and the interval between
switches you hit is the # of pass you are on
  - so on the 3rd pass you are toggling every 3rd switch (3, 6, 9)
  - 4th pass would be 4, 8, 12

  data structure: array of SWITCHES  # of elements
    - value of every element in the array could be a 0 for off, 1 for on
    - the "switch" function changes the element from 0 to 1, or 1 to 0
      - or, boolean values like LS suggests
    - return an array that is the # of elements that are "on"

main function
create array

lights loop (pass #, toggle lights function)

to return a value, can loop through and if (lights[idx] at a particular point...)

initialize array of lights
make new array of length count and fill it with 'false'
return the array

toggle lights function
can use map to assign the lights at the proper indexes by checking if their (index + 1) value
is a multiple of the pass #
because we're using boolean, can just check if !light, then light

*/

// very clumsy first attempt; redo
// function lightsOn(switches) {
//   let lightsArray = new Array(switches + 1).fill(false, 1);

//   for (let passNumber = 1; passNumber <= switches + 1; passNumber += 1) {
//     for (let switchIndex = passNumber; switchIndex <= switches; switchIndex += passNumber) {
//       if (switchIndex % passNumber === 0)
//       if (!lightsArray[switchIndex]) {
//         lightsArray[switchIndex] = true;
//       } else {
//         lightsArray[switchIndex] = false;
//       }
//     }
//   }
//   let resultArray = lightsArray.map((element, index) => {
//     if (element === true) {
//       return index;
//     }
//   }).filter(element => (typeof element === 'number'));
//   console.log(resultArray);
//   return resultArray;
// }

function lightsOn(count) {
  let lights = Array(count).fill(false);

  for (let passNum = 1; passNum <= count; passNum += 1) {
    lights = toggleLights(lights, passNum);
  }

  let results = [];
  for (let idx = 0; idx < count; idx += 1) {
    if (lights[idx]) {
      results.push(idx + 1);
    }
  }
  return results;
}

function toggleLights(lights, count) {
  return lights.map((light, index) => {
    return (index + 1) % count === 0 ? !light : light;
  });
}


console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
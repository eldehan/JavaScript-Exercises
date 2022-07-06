// log all odd #s from 1 to 99 inclusive to the console
// with each # on a separate line
// input - nothing
// output - console logged odd #s from 1 to 99, inclusive
// algo:
// initialize a counter and loop
// start counter at one
// at each step of the counter, log the value of the counter
// to the console
// increment counter by 2 at each step
// set limit for counter to 99

// step further:
// function that counts odd #s with limit of the argument of the function
// same as above, but input is an integer, and it is the limit of loop

function countOdds(limit) {
  for (let counter = 1; counter <= limit; counter += 2) {
    console.log(counter);
  }
}

countOdds(3) // 1, 3
countOdds(0) // nothing
countOdds(-5) // nothing
countOdds(99) // 1, 3, 5... 99
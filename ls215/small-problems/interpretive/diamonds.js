// input - integer (both width and # of rows of diamond)
// output - diamond shape, printed with asterisks
// can assume input will always be an odd number

// spaces at any point are equal to ((width - # of stars in row) / 2)
// # of stars in a row always starts at 1, increments by 2 every time
// # of stars: 1, 3, 5, 7, 9, 7, 5, 3, 1
// # of space: 4, 3, 2, 1, 0, 1, 2, 3, 4

// so essentially, increment stars by 2, spaces by 1, until stars = width
// when stars = width, begin incrementing in opposite direction until stars = 1

// have # of stars start out at 1
// start # of spaces out at width - 1 / 2
// have a loop; each time, decrease # of spaces by 1, increase # of stars by 2
// direction variable - if DECREASING, then it's swapped (and set decreasing to toggle to TRUE when # of stars hits max)
// and then have a conditional to check for if stars < 0 to break the loop before it prints anything

function diamond(width) {
  let numberOfSpaces = ((width - 1) / 2);
  let numberOfStars = 1;
  let directionSign = 1;


  while (true) {
    if (numberOfStars < 0) break;
    if (numberOfStars === width) {
      directionSign = -1;
    }

    console.log(' '.repeat(numberOfSpaces) + '*'.repeat(numberOfStars));

    numberOfSpaces -= 1*directionSign;
    numberOfStars += 2*directionSign
  }
}

diamond(1);
// logs
// *


diamond(3);
// logs
//  *
// ***
//  *


 diamond(9);
 // logs
//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *
// function
// takes sides of triangle as args
// returns what kind of triangle it is
  // equilateral - all 3 sides are equal
  // isosceles - 2 sides same, 3rd different
  // scalene - all 3 sides different

// input - 3 numbers representing the 3 sides of the triangle
// output - string, representing kind of triangle

// data structure - array

// sort triangle sides from smallest to biggest
// if all 3 sides are the same, return equilateral
// otherwise if sides 1 and 2 or 2 and 3 are the same, return isosceles
// else return scalene

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  
  if (sides[0] <= 0 || sides[0] + sides[1] <= sides[2]) return 'invalid';

  if (sides[0] === sides[1] && sides[1] === sides[2]) return 'equilateral';
  else if (sides[0] === sides[1] || sides[1] === sides[2]) return 'isosceles';
  else return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
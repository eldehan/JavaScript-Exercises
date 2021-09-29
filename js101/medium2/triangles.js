/*

first check for if it even builds a valid triangle
- if a side is 0, its invalid
- if the sum of the 2 shortest sides isn't greater than the longest side, it's invalid
  - how to determine this...
    - sort side lengths in an array; sort based on length
      - compare sum of indexes 0 and 1 vs index 2; it has to be greater
- if it's a valid triangle, then compare side lengths:
  - go thru triangle sides and add a key-value pair to an object
    - key = to the size; if it doesn't exist yet, add it and initialize it to one, otherwise its value += 1
  after, check the object's values list to see if it includes 3 - if it does, it's equilateral. otherwise, look for 2 - isoceles; otherwise, scalene

*/

function triangle(side1, side2, side3) {
  let sidesArray = [side1, side2, side3].sort((a, b) => a - b);

  if (sidesArray.includes(0)) return 'invalid';
  if (!(sidesArray[0] + sidesArray[1] > sidesArray[2])) return 'invalid';

  let sideCount = { };
  sidesArray.forEach(side => {
    sideCount[side] ? sideCount[side] += 1 : sideCount[side] = 1;
  });

  if (Object.values(sideCount).includes(3)) return 'equilateral';
  else if (Object.values(sideCount).includes(2)) return 'isoceles';
  else return 'scalene';

}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
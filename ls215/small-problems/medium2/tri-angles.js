// determine whether given triangle is acute, right, obtuse, or invalid
// input - 3 numbers (angles of the triangle)
// output - string (what type of triangle)

// right - 1 angle is right angle (90)
// acute - all angles less than 90
// obtuse - 1 angle greater than 90
// invalid - if sum of angles is not 180, or if any angle less than 0

// put angles into array and sort them from smallest to biggest
// invalid
  // if smallest angle <= 0, or if angles dont sum to 180
// right angle
  // if biggest angle is 90
// obtuse
  // if biggest angle is > 90
// acute
  // everything else

function triangle(...angles) {
  let [angle1, angle2, angle3] = [...angles].sort((a, b) => a - b);
  
  if (angle1 <= 0 || (angle1 + angle2 + angle3) != 180) return 'invalid';
  else if (angle3 === 90) return 'right';
  else if (angle3 > 90) return 'obtuse';
  else return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

/*

Launch School solution, for reference:
(good use of built-in methods/appropriately named helper functions)
(it is the declarative route, whereas mine is imperative)

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

*/
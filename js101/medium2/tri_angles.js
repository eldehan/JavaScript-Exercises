// function triangle(angle1, angle2, angle3) {
//   if (!validTriangle(angle1, angle2, angle3)) return 'invalid';

//   let biggestAngle = Math.max(angle1, angle2, angle3);

//   if (biggestAngle > 90) return 'obtuse';
//   else if (biggestAngle === 90) return 'right';
//   else return 'acute';
// }

// function validTriangle(angle1, angle2, angle3) {
//   return ((angle1 > 0 & angle2 > 0 & angle3 > 0) & (angle1 + angle2 + angle3 === 180));
// }

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle, 0);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

// function getTriangleType(angles) {
//   if (angles.some(testRightTriangle)) {
//     return 'right';
//   } else if (angles.some(testObtuseTriangle)) {
//     return 'obtuse';
//   } else {
//     return 'acute';
//   }
// }

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return 'right';
  } else if (angles.every(testAcuteTriangle)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

// function testObtuseTriangle(angle) {
//   return angle > 90;
// }

function testAcuteTriangle(angle) {
  return angle < 90;
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
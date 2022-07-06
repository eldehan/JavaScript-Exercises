
// take avg of input grades and return letter grade associated w/ it
// take avg, save to variable
// return appropriate letter grade

function getGrade(score1, score2, score3) {
  let avgGrade = (score1 + score2 + score3) / 3;

  if (avgGrade >= 90) {
    return 'A';
  } else if (avgGrade >= 80) {
    return 'B';
  } else if (avgGrade >= 70) {
    return 'C';
  } else if (avgGrade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
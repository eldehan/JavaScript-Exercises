/*
input - 3 integers representing grade scores
output - letter grade of the 3 scores averaged (so, a string)

requirements: average 3 scores
              no need to validate values
*/

function getGrade(score1, score2, score3) {
  let gradeAverage = (score1 + score2 + score3) / 3;

  if (gradeAverage >= 90 && gradeAverage <= 100) {
    console.log("A");
  } else if (gradeAverage >= 80 && gradeAverage < 90) {
    console.log("B");
  } else if (gradeAverage >= 70 && gradeAverage < 80) {
    console.log("C");
  } else if (gradeAverage >= 60 && gradeAverage < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
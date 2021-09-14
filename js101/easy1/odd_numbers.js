// function oddNumbers(lowerLimit, upperLimit) {
//   for (number = lowerLimit; number <= upperLimit; number += 1) {
//     if (number % 2 !== 0) {
//       console.log(number);
//     }
//   }
// }

// oddNumbers(50, 119);

// or

let oddNumbers = (lowerLimit, upperLimit) => {
  for (let number = lowerLimit; number <= upperLimit; number += 1) {
    (number % 2 !== 0) ? console.log(number) : null;
  }
}

oddNumbers(50, 119);
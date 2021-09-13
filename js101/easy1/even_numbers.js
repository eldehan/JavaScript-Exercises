function evenNumbers(lowerLimit, upperLimit) {
  for (number = lowerLimit; number <= upperLimit; number += 1) {
    (number % 2 === 0) ? console.log(number) : null;
  }
}

evenNumbers(1, 99);

// or

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }
  console.log(number);
}
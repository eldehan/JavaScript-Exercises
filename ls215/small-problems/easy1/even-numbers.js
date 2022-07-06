// log all even #s, from 1 to 99 inclusive, to the console

// function
// input - integer (upper limit of count)
// output - even count, to the console

// initialize counting loop
// at each step, check whether # % 2 === 0 (separate function)
  // if so, log it to the console
// repeat up to limit

function countEvens(limit) {
  for (let count = 1; count <= limit; count += 1) {
    if (isEven(count)) {
      console.log(count);
    }
  }
}

function isEven(number) {
  return number % 2 === 0;
}

countEvens(5) // 2, 4
countEvens(10) // 2, 4, 6, 8, 10
countEvens(99) // 2, 4, 6... 98
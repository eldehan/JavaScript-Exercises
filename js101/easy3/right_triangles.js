// input - integer
// output - rows of strings of stars

// requirements:
// - function will take n as argument and triangle will have n stars on each side
// - triangle will be a right triangle
// - the hypotenuse should have 1 start at one end and the other at the upper right
// - it should look like this:
//     *
//   **
//   ***
// ****
// *****
// number of spaces and stars is inversely proportional
// first line, spaces are n - 1 followed by 1 star
// second line, spaces are n - 2, followed by 2 stars
// third line, spaces are n - 3, followed by 3 stars
// seems like we should have an iterator that = row line, n - iterator for spaces, and iterator stars

function triangle(number) {
  for (let row = 1; row <= number; row += 1) {
    console.log(`${" ".repeat(number - row)}${"*".repeat(row)}`);
  }
}

triangle(1);
triangle(2);
triangle(3);
triangle(4);
triangle(5);

triangle(9);
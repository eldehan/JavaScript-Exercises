// input - integer n
// output - right triangle whose base and height are input n

//  rows 1 2 3 4 5 6 7 8 9
// space 8 7 6 5 4 3 2 1 0
// stars 1 2 3 4 5 6 7 8 9

// spaces in a row = n - row #
// stars in a row = row #

function triangle(n) {
  let padding;
  let stars;

  for (let row = 1; row <= n; row += 1) {
    padding = ' '.repeat(n - row);
    stars = '*'.repeat(row);

    console.log(`${padding}${stars}`);
  }
}

triangle(5);
triangle(9);
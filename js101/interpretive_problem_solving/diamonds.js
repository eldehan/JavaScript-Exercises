function diamond(rows) {
  for (let count = 1; count <= rows; count += 2) {
    console.log(`${' '.repeat((rows - count) / 2)}${'*'.repeat(count)}`);
  }
  for (let count = rows - 2; count >= 1; count -= 2) {
    console.log(`${' '.repeat((rows - count) / 2)}${'*'.repeat(count)}`);
  }
}

diamond(5);

diamond(9);
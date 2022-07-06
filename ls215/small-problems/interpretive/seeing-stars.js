function repeat(char, times) {
  let repeated = '';

  for (let i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}

function buildStarRow(spacesBetween, spacesPadding) {
  const asterisks = ['*', '*', '*'];
  const starRow = asterisks.join(repeat(' ', spacesBetween));
  return repeat(' ', spacesPadding) + starRow;
}

function star(n) {
  const middleIdx = Math.floor(n / 2);

  for (let i = 0; i < middleIdx; i += 1) {
    let spacesBetween = ((n - 3) / 2) - i;
    let spacesPadding = i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }

  console.log(repeat('*', n));

  for (let i = 0; i < middleIdx; i += 1) {
    let spacesBetween = i;
    let spacesPadding = ((n - 3) / 2) - i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }
}
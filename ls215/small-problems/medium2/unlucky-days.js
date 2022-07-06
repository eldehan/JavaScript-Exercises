// function
// takes year as arg, returns # of 'friday the 13ths' in that year
// can assume year is greater than 1752

// iterate over all months of given year
// for each month, get the day that falls on the 13th
// count the 13ths that fall on a friday
// return the count

function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    let monthToCheck = new Date(year, month, 13);

    if (monthToCheck.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
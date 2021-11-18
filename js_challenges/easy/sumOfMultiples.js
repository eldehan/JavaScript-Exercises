/*

Count through numbers until the limit is reached

initialize a multiples array
For each count, iterate through numbers array and check to see if it is a multiple of the given number
  - if it is, and if the multiples array does not yet include it, push it into the array

- After this, sum all the multiples together to get the result #

*/

class SumOfMultiples {
  constructor(...numberList) {
    this.numberList = (numberList.length > 0) ? numberList : [3, 5];
  }

  static to(limit) {
    return new SumOfMultiples().to(limit);
  }

  to(limit) {
    let multiplesArray = [];

    for (let count = 1; count < limit; count += 1) {
      this.numberList.forEach(number => {
        if ((count % number === 0) && (!multiplesArray.includes(count))) {
          multiplesArray.push(count);
        }
      });
    }

    let multiplesSum = multiplesArray.reduce((sum, multiple) => sum + multiple, 0);
    return multiplesSum;
  }
}

module.exports = SumOfMultiples
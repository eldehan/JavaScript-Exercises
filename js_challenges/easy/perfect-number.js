/*

Check input (throw exception if input original # is negative)

Establish list of divisors:
- count up from 1 to original number
- at each stage, test if the originalNumber % testNumber === 0
  - If it is, then it is a divisor, and can be added to a list of divisors
  - If it is not, then move on.

Once list is complete, sum it and compare it to original #
  - If it's = to, then number is perfect
  - if it's less than, number is deficient
  - if it is greater, number is abundant

*/

class PerfectNumber {
  static classify(number) {
    if (number <= 0) throw new Error("Number must be greater than zero.")

    let divisorSum = 0;

    for (let count = 1; count < number; count += 1) {
      if (number % count === 0) {
        divisorSum += count;
      }
    }

    if (divisorSum > number) {
      return "abundant";
    } else if (divisorSum < number) {
      return "deficient";
    } else {
      return "perfect";
    }
  }
}

module.exports = PerfectNumber;
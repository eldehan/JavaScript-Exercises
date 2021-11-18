/*

Given string.

Initialize result number
Flip direction of string
For each character (octal number) in string, convert it to a number, then multiply it by 8^(index)
Add that result to the result number
Output the result number

*/

let Octal = (() => {

  return class Octal {
    constructor(octalString) {
      this.octalString = octalString;
  }

  toDecimal() {
    if (this.invalidOctal(this.octalString)) return 0;

    let reversedOctal = this.octalString.split('').reverse();

    let decimalResult = 0;
    for (let digit = 0; digit < reversedOctal.length; digit += 1) {
      let convertedDigit = Number(reversedOctal[digit]) * 8**digit;

      decimalResult += convertedDigit;
    }

    return decimalResult;
  }

  invalidOctal(octalString) {
    return (octalString.match(/[^01234567]/g));
  }
}
})();

module.exports = Octal;
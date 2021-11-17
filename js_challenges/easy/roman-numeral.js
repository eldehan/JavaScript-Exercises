/*

Express numbers in roman numerals
M - 1000
D - 500
C - 100
L - 50
X - 10
V - 5
I - 1

class RomanNumeral
- Method -> toRoman()

900 - CM
800 - DCCC
700 - DCC
600 - DC
500 - C
400 - CD
300 - CCC
200 - CC
100 - C

90 - XC
80 - LXXX
70 - LXX
60 - LX
50 - L
40 - XL
30 - XXX
20 - XX
10 - X

9 - IX
8 - VIII
7 - VII
6 - VI
5 - V
4 - IV
3 - III
2 - II
1 - I


Algorithm:
Initialize a variable with an empty string to save the finished Roman conversion.
Iterate over the Roman Numerals collection:
  If the numeric value of the current Roman numeral is less than the value of the input number, 
  add the Roman numerals to the string as many times as its value can fit. For instance, 
  if the current Roman numeral is C (which has a value of 100) and the input number is 367, 
  then 3 C's are needed: CCC.

  Subtract the numeric value of the added Roman numerals from the current input value, and 
  use the new input value in subsequent iterations. For instance, since we added CCC to the 
  string above, we must subtract 300 from 367, leaving us with a new input number of 67.
  Return the result string.

*/

// class RomanNumeral {
//   static ROMAN_NUMERALS = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   }

//   constructor(number) {
//     this.number = number;
//   }

//   toRoman() {
//     let resultString = "";
//     let workingNumber = this.number;

//     for (let numeral in RomanNumeral.ROMAN_NUMERALS) {
//       let numeralValue = RomanNumeral.ROMAN_NUMERALS[numeral];

//       while (numeralValue <= workingNumber) {
//         resultString += numeral;
//         workingNumber -= numeralValue;
//       }
//     }

//     return resultString;
//   }
// }

/*
alternately...
*/

class RomanNumeral {
  static NUMERALS = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']
  ];

  constructor(number) {
    this.number = number
  }

  toRoman() {
    let numString = String(this.number);
    let resultString = "";

    let tens = 0;
    for (let index = numString.length - 1; index >= 0; index -= 1) {
      let digit = numString[index];
      let numeral = RomanNumeral.NUMERALS[tens][digit];

      resultString = numeral + resultString;
      tens += 1;
    }

    return resultString;
  }
}

module.exports = RomanNumeral;
/*

input - integer
output - integer

explicit requirements: reverse digits of number and return (so, backwards number)
                       leading zeroes get dropped in returned number (so 12000 -> 21)

convert # to string
convert string to array
reverse array
join array
trim the beginning of the result
convert string result back to integer and return

*/

let reverseNumber = number => Number(String(number).split('').reverse().join('').trimStart());

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1
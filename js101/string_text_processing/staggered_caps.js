/*
write a loop where:
it iterates through the end of the string, and
if the character is a letter, it gets its case assigned, starting with the first letter, which gets uppercase
    when case gets assigned, an indicator gets swapped between 0 and 1
    indicator assigned to 0 initially
        if it's 0, then assign case of indexed char to uppercase, then change indicator to 1
        if it's 1, assign case to lowercase, then change indicator to 0
*/

function staggeredCase(string) {
  let indicator = 0;
  return string.split("")
               .map(char => {
                 if (indicator === 0) {
                   indicator += 1;
                   return char.toUpperCase();
                 } else {
                   indicator -= 1;
                   return char.toLowerCase();
                 }
               })
               .join("");
}

// ...more reasonable solution, perhaps:

function staggeredCase2(string) {
  return string
    .split('')
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
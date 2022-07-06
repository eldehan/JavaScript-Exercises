// function that takes string and re turns new string
// which contains value of original string with all consecutive
// duplicate characters collapsed into a single character

// input - string
// output - string with consecutive duplicates collapsed into 1

// split string into array of chars
// filter array of chars
  // if next index position is the same as current position, don't
  // include current char
// rejoin and return


function crunch(string) {
  return string.split('')
               .filter((char, index) => char !== string[index + 1])
               .join('');
}



console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
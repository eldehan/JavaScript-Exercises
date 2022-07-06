// input - string
// output - string with all non-alphabetic characters replaced by spaces
  // if one or more non-alphabetic characters occurs in a row, the result should only have 1 space

// step 1: replace non-alphabetic chars with spaces
// step 2: collapse consecutive spaces down to single spaces

function cleanUp(string) {
  let cleanedString = string.replace(/[^a-z]/gi, ' ');
  return cleanedString.split('')
                      .filter((char, index) => {
                        return !(char === ' ' && cleanedString[index + 1] === ' ');
                    }).join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
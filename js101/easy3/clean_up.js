/*
Input - string
Output - string

Requirements: Replace non-alphabetic characters in string with spaces
              Only 1 space at a time regardless of how many characters replaced (no consecutive spaces)

define function with string as parameter
split string into char array
iterate over array

*/

function cleanUp(string) {
  let charArray = string.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let index = 0; index < charArray.length; index += 1) {
    if (!(alphabet.includes(charArray[index]))) {
      charArray.splice(index, 1, " ");
    }
  }
  for (let index = 0; index < charArray.length; index += 1) {
    while ((charArray[index] === " ") && charArray[index + 1] === " ") {
      charArray.splice(index + 1, 1);
    }
  }
  return charArray.join("");
}

// or

// function cleanUp(text) {
//   let cleanText = "";
//   let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   for (let idx = 0; idx < text.length; idx += 1) {
//     if (alphabet.includes(text[idx])) {
//       cleanText += text[idx];
//     } else if (cleanText[cleanText.length - 1] !== " ") {
//       cleanText += " ";
//     }
//   }
//   return cleanText;
// }

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
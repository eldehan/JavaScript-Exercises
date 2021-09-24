function removeVowels(stringArray) {
  let vowels = "aeiouAEIOU"
  return stringArray.map(string => {
    let newString = "";
    for (let index = 0; index < string.length; index += 1) {
      if (!(vowels.includes(string[index]))) {
        newString += string[index];
      }
    }
    return newString;
  });
}

function removeVowels2(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
/*
a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet.
For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'.
This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

Function
  2 arguments:
    text to be encrypted
    letter shift amount (a number)
  The shift amount determines how we translate the letters in the text to new letters
     i.e. an amount of 1 would mean every letter in the next is shifted 1 to the right, so A becomes B, B becomes C, Z becomes A, etc.
       on that note, shifts will wrap around the alphabet to the beginning
        so, for instance, Z will become A
        or, a shift value of 40 will have A go all the way through the alphabet (26 spots), then keep going 14 more spots to find out what letter it should be

  only encrypts letters (upper and lower case)
    other characters are unaffected

every letter of the alphabet has an index position (0 to 25)
the shift amount determines what you add to that index position to get the appropriate letter
  if the overall shift amount is greater than 25, it means it will wrap around (26 would mean A becomes A again)
    thus, if it is greater than 25, subtract 26 from it until it is NOT greater than 25
      a shift of 26 - 26 would be a shift of 0 (A becomes A), a shift of 27 translates to a shift of 1, A becomes B
  then, the shifting per letter
    add the shift amount to the letter's index to get the index of the letter it should be
      if the letter's index + the shift amount is greater than 25 (the end of the 0 indexed alphabet), subtract 26 from the result to get the letter it should be
        so, Z is index spot 25. 25 + 4 = 29. 29 - 26 = 3, or the letter in index spot 3, which would be D.
    once you find the appropriate letter by shifting, add it to the result string

preserving case
  check at end of letter shift if letter is uppercase; if it is, the letter added to the result string should be uppercase
*/

function caesarEncrypt(text, shiftAmount) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const ALPHABET_SIZE = 26;

  while (shiftAmount >= ALPHABET_SIZE) {
    shiftAmount -= ALPHABET_SIZE;
  }

  return text.replace(/[a-z]/gi, (letter) => {
    let isUpper = /[A-Z]/.test(letter);
    let letterIndex = ALPHABET.indexOf(letter.toLowerCase());

    let shiftedLetterIndex = letterIndex + shiftAmount;
    if (shiftedLetterIndex >= ALPHABET_SIZE) {
      shiftedLetterIndex -= ALPHABET_SIZE;
    }

    let newLetter = ALPHABET[shiftedLetterIndex];
    return isUpper ? newLetter.toUpperCase() : newLetter;
  });
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
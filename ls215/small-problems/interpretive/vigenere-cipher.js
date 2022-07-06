/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. 
It uses a series of Caesar Ciphers based on the letters of a keyword. 
Each letter of the keyword is treated as a shift value. 
For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. 
In other words, the shift value used for a letter is equal to its index value in the alphabet. 
This means that the letters 'a'-'z' are equivalent to the numbers 0-25. 
The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. 
To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pineapples don't go on pizzas!
shift     : meatmeatme atm e at me atmeat
ciphertext: Bmnxmtpeqw dhz'x gh ar pbldal!

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. 
Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

key applied sequentially to the text, letter for letter, repeating as long as there are further letters in the text
  it is NOT applied for chars that are not letters (skip non alphabetic chars)  

iterate thru text
loop thru keyword for each letter, as long as there are more letters in the text
  if the char not a letter, ignore it (add it to results or skip if using replace method or whatever)
  if it IS a letter, advance to the next letter of the keyword to use it as the shiftAmount
    so, shift amount is = to the index of the letter in the alphabet
  replace letter with appropriate shifted letter
  continue on

can use original caesarcipher function, but text being tested at every step is simply 1 letter, and shift amount is derived from the index of the letter in keyword

update: refactored solution to a simpler form using map rather than a for loop and a results variable.
*/

function vigenereCipher(text, keyword) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let keywordIndex = 0;

  let nextKeywordLetter = () => {
    let keywordLetter = keyword[keywordIndex].toLowerCase();

    keywordIndex += 1;
    if (keywordIndex >= keyword.length) {
      keywordIndex -= keyword.length;
    }

    return keywordLetter;
  }

  return text.split('').map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    }

    let keywordLetter = nextKeywordLetter();
    let shiftAmount = ALPHABET.indexOf(keywordLetter);
    let newLetter = caesarEncrypt(char, shiftAmount);

    return newLetter;
  }).join('');

}

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

console.log(vigenereCipher(`Pineapples don't go on pizzas!`, 'A'));
// Pineapples don't go on pizzas!

console.log(vigenereCipher(`Pineapples don't go on pizzas!`, 'Aa'));
// Pineapples don't go on pizzas!

console.log(vigenereCipher(`Pineapples don't go on pizzas!`, 'cab'));
// Riogaqrlfu dpp't hq oo riabat!

console.log(vigenereCipher(`Pineapples don't go on pizzas!`, 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereCipher(`Dog`, 'Rabbit'));
// Uoh
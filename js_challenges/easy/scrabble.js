/*

[A, E, I, O, U, L, N, R, S, T]	1
[D, G]	2
[B, C, M, P]	3
[F, H, V, W, Y]	4
[K]	5
[J, X]	8
[Q, Z]	10

Array of letter arrays, where the appropriate point value is that subarray's index
in the larger array.

Initialize empty score variable
For each letter in the word:
- Iterate through letter scores array, and check if each item includes that letter
- if it does, add its index value to the score variable


*/

class Scrabble {
  static LETTER_POINTS = [
    [],
    ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    ['D', 'G'],
    ['B', 'C', 'M', 'P'],
    ['F', 'H', 'V', 'W', 'Y'],
    ['K'],
    [],
    [],
    ['J', 'X'],
    [],
    ['Q', 'Z']
  ]
  
  constructor(word) {
    this.word = word ? word : '';
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    let letters = this.word.toUpperCase().replace(/[^A-Z]/g, '');
    let points = 0;

    [].forEach.call(letters, letter => {
      Scrabble.LETTER_POINTS.forEach((letterArray, index) => {
        if (letterArray.includes(letter)) {
          points += index;
        }
      });
    });
    
    return points;
  }
}

module.exports = Scrabble;
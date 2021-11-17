/*

break input word into array of chars and sort it, turn back into string

for each word we are comparing against:
- convert both words into all lower case
- if the word is exactly the same word already, return false (not a match)
- break them each into an array of chars as well, and then turn back into strings

check if the sorted strings are equal to each other
- if they are, it is an anagram
- if it is not, they are not anagrams

*/

class Anagram {
  constructor(patternWord) {
    this.patternWord = patternWord.toLowerCase();
  }

  match(possibleMatches) {
    let lowerCasePatternWord = this.patternWord.toLowerCase();
    let sortedPatternWord = lowerCasePatternWord.split('').sort().join('');

    return possibleMatches.filter(possibleMatch => {
      let lowerCasePossibleMatch = possibleMatch.toLowerCase();
      if (lowerCasePossibleMatch === lowerCasePatternWord) return false;

      let sortedPossibleMatch = lowerCasePossibleMatch.split('').sort().join('');

      return (sortedPatternWord === sortedPossibleMatch);
    });
  }
}

module.exports = Anagram;
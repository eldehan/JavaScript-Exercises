/*

each letter will always have the same width
  - A is always first, and has width of 1
  - B is always second, has width of 3 (in diamond: B, space, B)
  - C is always 3rd, has width of 5 (C, space, space, space, C)

Overall width of diamond depends on widest letter
  - If it's E, E has width of 9
  - every 'lesser' letter has increasing # of spaces before it first appears
    - D goes (space, D, space, space, space, space, space, D)
    - C goes (space, space, C, space, space, space, C)
    - B goes (space, space, space, B, space, B)
    - A goes (space, space, space, space, A)

    A - 0th letter, 0 spaces (width 1) n+1
    B - 1st letter, 1 spaces (width 3) n+2
    C - 2nd letter, 3 spaces (width 5) n+3
    D - 3rd letter, 5 spaces (width 7) n+4
    E - 4th letter, 7 spaces (width 9) n+5
    F - 5th letter, 9 spaces (width 11) n+6

Input letter determines max width (max width = property saved w letter?)
lower letters get padding to make diamond
  - find difference b/t max width and width of a row
    - padding in front of normal start of row is that difference / 2

build row function (takes letter index)

make widest row
make decreasing rows

make increasing rows function
start at 0 letterIndex
build first row
while rowLetterIndex < maxWidthLetterIndex - 1
  - call build row function with letterIndex + 1

make widest row function
  - call build row w/ widest letter index

make decreasing rows function
start at max width index
while rowLetterIndex > 0
  - call build row function w/ letterIndex - 1
*/

let Diamond = (() => {
  const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  let getLetterIndex = (letter) => {
    let letterIndex = LETTERS.indexOf(letter);
    
    return letterIndex;
  }
  
  let getRowWidth = (letterIndex) => {
    let width = letterIndex + (letterIndex + 1);

    return width;
  }

  let getLetter = (letterIndex) => {
    return LETTERS[letterIndex];
  }

  let buildRow = function(letterIndex, maxWidth) {
    let letter = getLetter(letterIndex);
    let rowWidth = getRowWidth(letterIndex);
    let rowPadding = (maxWidth - rowWidth) / 2;
    let rowSpacing = (rowWidth - 2);

    if (letter === 'A') {
      return `${' '.repeat(rowPadding)}${letter}${' '.repeat(rowPadding)}\n`;      
    } else {
      return `${' '.repeat(rowPadding)}${letter}${' '.repeat(rowSpacing)}${letter}${' '.repeat(rowPadding)}\n`;
    }
  }
  
  return class Diamond {
    static makeDiamond(maxWidthLetter) {
      let maxIndex = getLetterIndex(maxWidthLetter);
      let maxWidth = getRowWidth(maxIndex);
      
      let rowsArray = [];

      let currentLetterIndex = 0;
      while (currentLetterIndex < maxIndex) {
        rowsArray.push(buildRow(currentLetterIndex, maxWidth));
        currentLetterIndex += 1;
      };
      while (currentLetterIndex >= 0) {
        rowsArray.push(buildRow(currentLetterIndex, maxWidth));
        currentLetterIndex -= 1;
      };

      return rowsArray.join('');
    }
  }
})();

module.exports = Diamond;
/*

Problem:
Count # of differences between two homologous DNA strands.
If 2 strands are different lengths, use the shorter's length to compare.
Return the Hamming distance (# of point mutations, or, number of differences)

Algorithm:
- DNA class
- Method on DNA class of "hammingDistance", which takes a string as an argument
  - The string argument is the strand to compare to
  - Initialize point mutation counter, assign value of 0.
  - Loop through length of new string
    - At each index point, compare the character from one string to that of the other
    - If the original sequence is undefined at the index point, break the loop (other sequence is longer);
    - If they are different, increment the counter by 1

  - Return the hamming distance

*/

class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(comparisonSequence) {
    let [ shorterSequence, longerSequence ] = this.findSequenceLengths(this.sequence, comparisonSequence);
    let trimmedSequence = this.trimSequence(shorterSequence, longerSequence);

    let hammingDistanceCount = 0;

    for (let index = 0; index < trimmedSequence.length; index += 1) {
      if (shorterSequence[index] !== trimmedSequence[index]) {
        hammingDistanceCount += 1;
      }
    }

    // for (let index = 0; index < comparisonSequence.length; index += 1) {
    //   if (this.sequence[index] === undefined) {
    //     break;
    //   } else if (this.sequence[index] !== comparisonSequence[index]) {
    //     hammingDistanceCount += 1;
    //   }
    // }

    return hammingDistanceCount;
  };

  findSequenceLengths(sequence1, sequence2) {
    return (sequence1.length > sequence2.length ? [ sequence2, sequence1 ] : [ sequence1, sequence2 ]);
  };

  trimSequence(shorterSequence, longerSequence) {
    let trimLength = shorterSequence.length;
    let trimmedSequence = longerSequence.slice(0, trimLength);

    return trimmedSequence;
  };
  
}

module.exports = DNA;
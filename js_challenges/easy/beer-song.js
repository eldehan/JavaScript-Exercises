/*
    Method: verse
        Each line of the verse (there are two) should be separated by a newline
        All mentions of the number of bottles should be replaced with the method's argument.
        Return the verse string

    Method: verses
        The second argument should be less than the first, but greater than or equal to zero.
        The first argument should be less than 100.
        We can start with an empty string or array to hold our results
        Count down from the first argument to the second (inclusive)
        Handle verses that need either the singular bottle or no more bottles.
        The verse when one bottle remains starts out as "Take it down" instead of "Take one down".
        Add the string verse for each of these numbers to our result
        Return result as a string

    Method: lyrics
        Build up a string containing all 100 verses of the song.
        The verses should count down from 99 to "no more".
        Each line of the verse should be separated by a newline.
        Each unique verse should be separated by a blank line (2 newlines).
        Return the string containing full lyrics.
*/

class BeerSong {
  static verse(bottleCount) {
    if (bottleCount === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.\n`
      +  `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
    } else if (bottleCount === 1) {
      return `${bottleCount} bottle of beer on the wall, ${bottleCount} bottle of beer.\n`
      +  `Take it down and pass it around, no more bottles of beer on the wall.\n`
    } else if (bottleCount === 2) {
      return `${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.\n`
      +  `Take one down and pass it around, ${bottleCount - 1} bottle of beer on the wall.\n`
    } else {
      return `${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.\n`
      +  `Take one down and pass it around, ${bottleCount - 1} bottles of beer on the wall.\n`
    }
  }

  static verses(startBottle, endBottle) {
    let versesArray = [];

    for (let bottleCount = startBottle; bottleCount >= endBottle; bottleCount -= 1) {
      versesArray.push(this.verse(bottleCount));
    }

    return versesArray.join('\n');
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
// iterate through string
// for every ( encountered, add 1 to a counter
// for every ) encountered, subtract 1 from the counter
// return true if counter is 0, otherwise return false

function isBalanced(string) {
  let counter = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '(') {
      counter += 1;
    }
    if (string[index] === ')' && counter > 0) {
      counter -= 1;
    } else if (string[index] === ')' && !(counter > 0)) {
      return false;
    }
  }
  return (counter === 0);
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
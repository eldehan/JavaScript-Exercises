// function penultimate(string) {
//   return string.split(" ").slice(-2, -1).toString();
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

function middle(string) {
  let words = string.split(" ");
  if (words.length % 2 === 0) {
    return words[(words.length / 2) - 1] + " " + words[(words.length / 2)];
  } else {
    return words[Math.floor(words.length / 2)];
  }
}

console.log(middle("this is four words"));
console.log(middle("this is now five words"));
console.log(middle("this"));
console.log(middle(""));
function centerOf(string) {
  let middle = Math.floor(string.length / 2);
  return (string.length % 2 === 1) ? string.slice(middle, middle + 1) : string.slice(middle - 1, middle + 1);
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
function repeater(string) {
  let doubledString = '';
  for (let index = 0; index < string.length; index += 1) {
    doubledString += string[index].repeat(2);
  }
  return doubledString;
}

// let repeater2 = str => [...str].map(char => char + char).join('');

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));

// console.log(repeater2('Hello'));
// console.log(repeater2('Good job!'));
// console.log(repeater2(''));
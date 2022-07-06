// function swapName(fullName) {
//   return fullName.split(' ').reverse().join(', ');
// }

function swapName(name) {
  return name.replace(/(\w+)(\s)(\w+)/gi, '$3,$2$1');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('John Robert Allen'));
function reverseWords(string) {
  return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
}

/*
function reverseWordss(str) {
  return str.replace(/\b\w{5,}\b/g, (word) => word.split('').reverse().join(''));
};
*/

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
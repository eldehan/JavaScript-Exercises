const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

// original
// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach(reserved => {
//     if (name === reserved) {
//       return true;
//     }
//   });

//   return false;
// }

function isReserved(name) {
  for (let index = 0; index < RESERVED_KEYWORDS.length; index += 1) {
    if (name === RESERVED_KEYWORDS[index]) {
      return true;
    }
  }

  return false;
}

// or, even simpler:
// function isReserved(name) {
//   return RESERVED_KEYWORDS.includes(name);
// }

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

// as is, the return true statement exists in a forEach loop. forEach always returns undefined and ignores any explicit return values, so the overall function will always return
// false.
// To fix, the forEach loop can be changed to a for loop
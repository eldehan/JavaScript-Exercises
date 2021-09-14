function shortLongShort(string1, string2) {
  if (string2.length > string1.length) {
    return string1 + string2 + string1;
  } else {
  } return string2 + string1 + string2;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
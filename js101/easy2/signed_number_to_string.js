const CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let digit = 0;
  let charArray = [];
  do {
    digit = number % 10;
    charArray.unshift(CHARS[digit]);
    number = Math.floor(number / 10);
  }
  while (number > 0);
  return charArray.join("");
}

function signedIntegerToString(number) {
  switch(Math.sign(number)) {
    case (1):
      return "+" + integerToString(number);
    case (-1):
      return "-" + integerToString(-number);
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
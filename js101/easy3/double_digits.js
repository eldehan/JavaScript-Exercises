function twice(number) {
  let stringyNum = String(number);
  let stringHalfOne = stringyNum.slice(0, stringyNum.length / 2);
  let stringHalfTwo = stringyNum.slice(stringyNum.length / 2, stringyNum.length);
  if ((stringyNum.length % 2 === 0) && (stringHalfOne === stringHalfTwo)) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
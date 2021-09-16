function oddities(array) {
  return array.reduce((oddArray, element) => {
    if (array.indexOf(element) % 2 === 0) {
      oddArray.push(element);
    }
    return oddArray;
  }, []);
}

function oddities2(array) {
  let oddElements = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    oddElements.push(array[idx]);
  }
  return oddElements;
}

function oddities3(array) {
  return array.filter((ele, idx) => idx % 2 === 0);
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(oddities2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities2(["abc", "def"])); // logs ['abc']
console.log(oddities2([123])); // logs [123]
console.log(oddities2([])); // logs []

console.log(oddities3([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities3([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities3(["abc", "def"])); // logs ['abc']
console.log(oddities3([123])); // logs [123]
console.log(oddities3([])); // logs []
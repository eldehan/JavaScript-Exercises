const multiply = (num1, num2) => num1 * num2;

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

function power(num, exp) {
  if (exp === 1) {
    return multiply(num, exp);
  }
  return num * power(num, exp - 1);
}

console.log(power(5, 2));
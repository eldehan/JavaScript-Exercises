const readline = require('readline-sync');

// Prompt user for integer greater than 0
// Ask user to enter either s for sum or p for product
// split now into if statement
  // if input is neither s nor p, prompt for input again
  // if input is s, calculate sum of numbers between 1 and entered integer
  // if input is p, calculate product of numbers between 1 and entered integer
// return calculated value and display it to the user

// write separate functions for sum and product, then call them in appropriate steps above to compute result
// Sum (own function)
  // recursively; if number is 1, return, otherwise return number + (sum function(number - 1))

// Product (own function)
  // recursively; if number is 1, return, otherwise return number * (product function(number - 1))
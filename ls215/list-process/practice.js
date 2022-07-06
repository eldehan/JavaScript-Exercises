// // ITERATION
// // iterate thru array
//   // for loop
//     // use length of array - 1
// // for each element of array, invoke callback
// // no explicit return value of myForEach

// function myForEach(array, func) {
//   for (let index = 0; index < array.length; index += 1) {
//     func(array[index], index, array);
//   }
// }

// let min = Infinity;
// let max = -Infinity;

// let getMinMax = function (value) {
//   if (value >= max) {
//     max = value;
//   }

//   if (value <= min) {
//     min = value;
//   }
// };

// [4, 5, 12, 23, 3].forEach(getMinMax);

// console.log(min, max);           // 3 23

// // FILTERING/SELECTION
// // initialize new empty array
// // iterate thru array and for each item run it through the compareFunc
//   // if return value of compare func is truthy, push that value to the new array
// // return new array

// function myFilter(array, compareFunc) {
//   let filteredArray = [];
  
//   for (let index = 0; index < array.length; index += 1) {
//     if (compareFunc(array[index], index, array)) {
//       filteredArray.push(array[index])
//     }
//   }

//   return filteredArray;
// }

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// // console.log(myFilter([{ a: 3, b: 4,  c: 5 },
// //           { a: 5, b: 12, c: 13 },
// //           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// // returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// function multiplesOfThreeOrFive(values) {
//   return myFilter(values, isMultipleOfThreeOrFive);
// }

// function isMultipleOfThreeOrFive(value) {
//   return value % 5 === 0 || value % 3 === 0;
// }

// console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));

// // TRANSFORMATION

// function myMap(array, callback) {
//   let mappedArray = [];

//   array.forEach(value => {
//     mappedArray.push(callback(value));
//   });

//   return mappedArray;
// }

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));

// function getBooksTitle(books) {
//   console.log(myMap(books, getTitle));
// }


// let books = [
//   {
//     title: 'JavaScript and JQuery: Interactive Front-End Web Development',
//     author: 'Jon Ducket',
//     edition: '1st',
//   },
//   {
//     title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//     author: 'Haverbeke',
//     edition: '2nd',
//   },
//   {
//     title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
//     author: 'Jennifer Niederst Robbins',
//     edition: '4th',
//   },
// ];

// function getTitle(book) {
//   return book['title'];
// }

// getBooksTitle(books);

// // REDUCING

// function myReduce(array, func, initial) {
//   let accumulator;
//   let startingIndex;
  
//   if (initial === undefined) {
//     accumulator = array[0];
//     startingIndex = 1;
//   } else {
//     accumulator = initial;
//     startingIndex = 0;
//   }

//   for (let index = startingIndex; index < array.length; index += 1) {
//     let currentValue = array[index];
//     accumulator = func(accumulator, currentValue, index, array);
//   }

//   return accumulator;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

// // INTEROGATION

// function myOwnEvery(array, func) {
//   let result = true;
  
//   for (let index = 0; index < array.length; index += 1) {
//     if (!func(array[index], index, array)) {
//       result = false;
//       break;
//     }
//   }

//   return result;
// }

// let isAString = value => typeof value === 'string';
// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

// SORT


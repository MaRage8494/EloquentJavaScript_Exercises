"use strict";

//!1 task
// const minimum = (a, b) => (a > b ? b : a);

//!2 task
// const isEven = function (number) {
//   if (number === 0) {
//     return true;
//   } else if (number === 1) {
//     return false;
//   } else if (number < 0) {
//     return isEven(-number);
//   } else {
//     return isEven(number - 2);
//   }
// };
// console.log(isEven(-2));

//!3 task
// const countsBs = function (string) {
//   let result = 0;
//   [...string].forEach((element) => {
//     if (element === "B") result++;
//   });
//   return result;
// };

// const countsChar = function (string, char) {
//   let result = 0;
//   [...string].forEach((element) => {
//     if (element === char) result++;
//   });
//   return result;
// };

// console.log(countsBs("BBbbbBBB"));
// console.log(countsChar("BBbcbBBB", "c"));
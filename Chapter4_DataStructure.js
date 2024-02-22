"use strict";
//!1 task

// const range = function (start, end, step = start > end ? -1 : 1) {
//   let result = [];
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) result.push(i);
//   } else if (step < 0) {
//     for (let i = start; i >= end; i += step) result.push(i);
//   } else result = start;
//   return result;
// };

// const sum = (numbers) => numbers.reduce((acc, num) => acc + num);

// console.log(sum(range(1, 10)));
// console.log(sum([1, 2]));
// console.log(range(5, 2, -1));

//!2 task

// const reverseArray = function (array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.unshift(array[i]);
//   }
//   return result;
// };

// const reverseArrayInPlace = function (array) {
//   const array_temp = array.slice(0);
//   for (let i = 0; i < array_temp.length; i++) {
//     array.unshift(array_temp[i]);
//     array.pop();
//   }
//   return array;
// };
// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//       let old = array[i];
//       array[i] = array[array.length - 1 - i];
//       array[array.length - 1 - i] = old;
//     }
//     return array;
//   }

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

//!3 task
// // const arrayToList = function (elements) {
// //   let list = null;
// //   for (let i = elements.length - 1; i >= 0; i--) {
// //     list = { value: elements[i], rest: list };
// //   }
// //   return list;
// // };

// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = {value: array[i], rest: list};
//     }
//     return list;
//   }

// // const listToArray = function (list) {
// //   let array = [];
// //   while (list.rest !== null) {
// //     array.push(list.value);
// //     list = list.rest;
// //   }
// //   return array;
// // };

// function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//       array.push(node.value);
//     }
//     return array;
//   }

// // const prepend = function (value, rest) {
// //   return { value: value, rest: rest };
// // };

// function prepend(value, list) {
//     return {value, rest: list};
//   }
// // const nth = function (list, num, count = 0) {
// //   if (count === num) {
// //     return list.value;
// //   } else {
// //     count += 1;
// //     if (list.rest === null) {
// //       return undefined;
// //     } else return nth(list.rest, num, count);
// //   }
// // };

// function nth(list, n) {
//     if (!list) return undefined;
//     else if (n == 0) return list.value;
//     else return nth(list.rest, n - 1);
//   }

// console.log(arrayToList([10, 20, 30]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30, 40])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 0));
// // → 20

//!4 task
// const deepEqual = function (obj1, obj2) {
//   let flag = false;
//   for (let [key, value] of Object.entries(obj1)) {
//     if (value !== null && typeof value === "object"){
//         if (Object.values(obj2).includes(value)){
//             deepEqual(value, obj2[`${value}`])
//         }
//     }
//     if (Object.keys(obj2) !== undefined && Object.keys(obj2).includes(key)) {
//     } else flag = true;
//     console.log("----------");
//   }

//   console.log(flag);
//   return "Erica loh";
// };

// const deepEqual = function (obj1, obj2) {
//   let flag = true;
//   if (
//     !(JSON.stringify(Object.keys(obj1)) === JSON.stringify(Object.keys(obj2)))
//   ) {
//     return false;
//   } else {
//     for (let [key, value] of Object.entries(obj1)) {
//       if (typeof value === "object" && value !== null) {
//         flag = flag && deepEqual(value, obj2[`${key}`]);
//       } else if (value === obj2[`${key}`]) {
//         flag = flag && true;
//       } else flag = false;
//     }
//   }
//   return flag;
//   // console.log(Object.keys(obj1) === Object.keys(obj2));
//   // console.log(Object.keys(obj1));
//   // console.log(Object.keys(obj2));
// };
// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// // → true
// console.log("--------------------");
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log("--------------------");
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2}));
// // → true

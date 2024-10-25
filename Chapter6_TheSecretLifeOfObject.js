// 'use strict';
// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// let config = {
//   alert: setInterval(() => {
//     console.log("Alert!");
//   }, 1000),
// };

// config = null;

// function isPromise(value) {
//   return Boolean(value && typeof value.then === "function");
// }
// var i = 1;
// var promise = new Promise(function (resolve, reject) {
//   resolve();
// });

// console.log(isPromise(i));
// console.log(isPromise(promise));

// console.log(null ?? true);
// console.log(false ?? true);
// console.log(undefined ?? true);

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a);
//   })(1);
// })(0);

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

// function foo() {
//   let a;
//   window.b = 0;
//   a = window.b;
//   a++;
//   return a;
// }

// foo();
// console.log(typeof a);
// console.log(typeof window.b);

// const clothes = ["jacket", "t-shirt"];
// clothes.length = 0;
// console.log(clothes[0]);

// var x = 3;
// var obj = {
//   x: 2,
//   foo: {
//     x: 1,
//     bar: function () {
//       console.log(this.x);
//     },
//     baz: function () {
//       setTimeout(function () {
//         console.log(this.x);
//       });
//     },
//   },
// };

// obj.foo.bar();
// var func = obj.foo.bar;
// func();
// obj.foo.baz();
// x = 4;

// function findUniq(strings) {
//   // Функция для нормализации строки
//   function normalize(str) {
//     return [...new Set(str.replace(/\s+/g, '').toLowerCase())].sort().join('');
//   }

//   // Нормализуем все строки
//   const normalizedStrings = strings.map(normalize);

//   // Считаем частоты нормализованных строк
//   const freq = {};
//   normalizedStrings.forEach((str) => {
//     if (freq[str]) {
//       freq[str]++;
//     } else {
//       freq[str] = 1;
//     }
//   });

//   // Находим нормализованную строку, которая встречается один раз
//   const uniqueNormalized = Object.keys(freq).find((key) => freq[key] === 1);

//   // Возвращаем оригинальную строку, которая соответствует уникальной нормализованной строке
//   return strings[normalizedStrings.indexOf(uniqueNormalized)];
// }

// // Примеры тестов
// console.log(findUniq(['a', 'a Aa', 'ab a', 'AA a']));
// console.log(findUniq(['ab', 'a Aa', 'ab a', 'bAA a']));
// console.log(findUniq(['aBca', 'fO o', 'ac b', 'bac', 'bca', 'cabaccBA', ' Ccba']));

// console.log('Все тесты пройдены');

// // Тип Вектора
// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   plus(anotherVec) {
//     return new Vec(this.x + anotherVec.x, this.y + anotherVec.y);
//   }

//   minus(anotherVec) {
//     return new Vec(this.x - anotherVec.x, this.y - anotherVec.y);
//   }

//   length() {
//     return Math.sqrt(this.x ** 2 + this.y ** 2);
//   }
// }

//Группы

// class Group {
//   constructor() {
//     this.group = [];
//   }

//   add(element) {
//     console.log(this.group);
//     return this.has(element) ? this.group : this.group.push(element);
//   }

//   has(element) {
//     console.log(this.group);
//     return this.group.includes(element);
//   }

//   delete(element) {
//     console.log(this.group);
//     return this.has(element) ? this.group.splice(this.group.indexOf(element), 1) : this.group;
//   }

//   static from(arr) {
//     console.log(this.group);
//     let group = new Group();
//     arr.map((element) => group.add(element));
//     return group;
//   }
// }

// const test = new Group();
// test.add(1);
// test.add(2);
// test.add(3);
// test.delete(2);
// test.has(2);
// test.has(1);
// console.log(Group.from([1, 3, 7]) instanceof Group);
// test.has(1);

"use strict";
//1 task
for (let i = 1; i < 7; i++) {
  console.log("#".repeat(i));
}
// for (let line = "#"; line.length < 8; line += "#") console.log(line);
//2 task
for (let i = 1; i < 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log("FizzBuzz");
    } else console.log("Fizz");
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log("Buzz");
  } else console.log(i);
}

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

//3 task
let size = 8;
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (j % 2 == 0) {
      i % 2 == 0 ? (row += " ") : (row += "#");
    } else i % 2 == 0 ? (row += "#") : (row += " ");
  }
  console.log(row);
}

// let size = 8;

// let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

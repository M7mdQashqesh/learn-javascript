/*
  a while loop require thee elements:
    1. the while keyword
    2. a condition expression the evaluates to a boolean value
    3. a block of code

    while (conditional) {
      // block of code...
    }

  ********************

  a for loop require thee elements:
    1. the for keyword
    2. three optional expressions
    3. a block of code 

    for (initialization; condition; final-expression) {
      // block of code...
    }

  ********************

  -- continue
  -- break
*/

//=========================
/* let count = 3;
while (count > 0) {
  console.log(count);
  count--;
} */
//=========================

//=========================
/* for (let count = 3; count > 3; count--) {
  console.log(count);
} */
//=========================

//==========={Exercise}==============
/* let str = "abcdefg";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
} */
//===================================

//==========={Exercise}==============
/* let fruits = ["apple", "mango", "banana", "watermelon"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("*************");

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
} */
//===================================

//===================================
/* let fruits = ["apple", "mango", "banana", "watermelon"];

for (let i = 0; i < fruits.length; i++) {
  let currentFruit = fruits[i];
  if (currentFruit === "banana") {
    continue; // skip current loop, go to next loop
  }
  console.log(currentFruit);
} */
//===================================

//===================================
/* let fruits = ["apple", "mango", "banana", "watermelon"];

for (let i = 0; i < fruits.length; i++) {
  let currentFruit = fruits[i];
  if (currentFruit === "banana") {
    break; // exit from loop, does not complete the next loop
  }
  console.log(currentFruit);
} */
//===================================

//===================================
/* let fruits = ["apple", "mango", "banana", "watermelon"];
let count = fruits.length - 1;

while (count >= 0) {
  if (fruits[count] === "mango") {
    break;
  }
  console.log(fruits[count]);

  count--;
} */
//===================================

//===================================
/* let count = 0;
while (count < 5) {
  count++;
  if (count === 3) {
    continue;
  }
  console.log(count);
} */
//===================================

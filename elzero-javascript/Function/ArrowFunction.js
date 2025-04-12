/* 
  Function
    - Arrow Function
      -- Regular vs Arrow [Param + No Param]
      -- Multiple Lines
*/

// No Param
//=================================
// Regular Function
function print1() {
  return 10;
}
console.log(print1());

//
// We Can Assign function to variable
let print2 = function () {
  return 10;
};
console.log(print2());

//
// Arrow Function
let print3 = () => {
  return 10;
};
console.log(print3());

//
// if we have one line (one statement) inside "arrow function" we can ignore "return" word, by remove { } ((auto return)), if we have multi line (more than one statement), we should write { } and "return" word inside { }
let print4 = () => 10;

console.log(print4());
//=================================

console.log("=".repeat(15));

//
// One Param
//=================================
// Regular Function
function print5(num) {
  return num;
}
console.log(print5(20));

//
// Assign function to variable
let print6 = function (num) {
  return num;
};
console.log(20);

//
// Arrow Function
let print7 = (num) => {
  return num;
};
console.log(print7(20));

// one line, so we can remove {} and "return"
let print8 = (num) => num;

console.log(print8(20));

// if we have one param \ argument, we can remove ( )
let print9 = (num) => num; // Prettier add () automatic with "ctrl + s"
console.log(print9(20));
//=================================

console.log("=".repeat(15));

//
// Two Parameter
//=================================
// Regular Function
function print10(num1, num2) {
  return num1 + num2;
}
console.log(print10(50, 100));

//
// Assign function to variable
let print11 = function (num1, num2) {
  return num1 + num2;
};
console.log(print11(50, 100));

//
// Arrow Function
let print12 = (num1, num2) => {
  return num1 + num2;
};
console.log(print12(50, 100));

// one line, so we can remove {} and "return"
let print13 = (num1, num2) => num1 + num2;

console.log(print13(50, 100));

// here we cant remove (), because we have two parameter \ argument
//=================================

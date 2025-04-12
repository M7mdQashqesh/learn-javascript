/*
  - What is a functions?
  - Why use functions ?
  - Create a function
  - Calling a function
  - Parameters and arguments
  - Returning values
*/

//===================================
/* function print() {
  console.log("Hello World");
}
// To use a function, we should (call, invoke, execute, استدعاء) the function
print(); */
//===================================

//===================================
/* function print(firstName, lastName) {
  // (parameters)
  console.log("Hello " + firstName + " " + lastName);
}

let fname = "Mohammed";
let lname = "Qashqesh";
print(fname, lname); // (arguments) */
//===================================

//===================================
/* function print(firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
}

let fname = "Mohammed";
let lname = "Qashqesh";
console.log(print(fname, lname));
// or
let output = print(fname, lname);
console.log(output); */
//===================================
// or
//===================================
/* function print(firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
}

let fname = "Mohammed";
let lname = "Qashqesh";

let output = print(fname, lname);
console.log(output); */
//===================================

//===================================
/* function plus(num1, num2) {
  return num1 + num2;
}

let answer = plus(5, 2);
console.log(answer);

function multiple(num1, num2) {
  return num1 * num2;
}

console.log(multiple(7, 6));

console.log(multiple(plus(5, 2), 6));
// or
console.log(multiple(answer, 6)); */
//===================================

//===================================
/* function isEven(num) {
  return num % 2 === 0 ? true : false;
}

console.log(isEven(4));
console.log(isEven(9)); */
//===================================

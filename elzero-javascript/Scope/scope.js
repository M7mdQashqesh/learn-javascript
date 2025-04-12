/* 
  Scope
    - Global Scope
    - Local Scope (inside function)
    - Block Scope [if, switch, for, while], for let & const, var -> global
*/

//================================
// Scope : هو مفهوم التحكم في التواجديه تاعت المتغيرات، عن طريق السكوب رح نقدر نعرف المتغير نقدر نصللو من وين، وما نقدر نصللو من وين

// مش من المنطقي ان البرنامج ان جميع المتغيرات يكون الوصول الها مفتوح من اي مكان، من overwrite ناحية الحماية، من ناحيه تجنب
//================================

// let and const is same, we use one (let)

var a = 1;
let b = 2;

// a & b, exist in global scope, (can access to this variables from anywhere)
console.log(`From Global ${a} & ${b}`);

//
// show Global variables from function
function showTextFromGlobal() {
  console.log(`Function - From Global ${a} & ${b}`);
}
showTextFromGlobal();

//
// If we add variables inside function
function showText() {
  //& add after error messagae, and comment last two lines
  var a = 10;
  let b = 20;

  console.log(`Funciton - From Local ${a} & ${b}`);

  // This are Local Scope (just inside function "showText"), special for this function only.

  //! Uncaught ReferenceError: Cannot access 'b' before initialization
  // -> at first search of variables in the local scope, if does not exist, search outside(global)

  //& var a = 1;
  //& let b = 2;
}
showText();

//
// We cant access inside variables from outside, When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
function accessFromOut() {
  var a_in = 100;
  let b_in = 200;

  console.log(`Function - From inside ${a_in} & ${b_in}`);
}
accessFromOut();

//! Uncaught ReferenceError: a_in is not defined
//& console.log(a_in);
//& console.log(b_in);

//====================================
console.log("=".repeat(15));
console.log("BLock:");
//====================================

// var is Global Scope, even if write inside block scope.
var x = 10;
if (10 === 10) {
  var x = 50;
}
console.log(x);

// let and const are Block scope, declare just inside the block, cant access to this variable from outsie.
let y = 100;
if (100 === 100) {
  let y = 200;
  console.log(`from if block ${y}`);
}
console.log(`from global ${y}`);

// you can redeclare the variable by "let" if each one in different scope

//====================================
console.log("=".repeat(15));
console.log("Lexical:");
//====================================

/* 
  Scope
    - Lexical scope (nested function)
*/

// if we create a function and this function have variables, then we create nested function, inner function can access parent variables, but outer function cant access inner function variables

// innerFun scope -> outerFun scope -> global scope

function outerFun () {
  let a_lexical = 10;
  
  function innerFun() {
    let b_lexical = 20;
    console.log(a_lexical)
    console.log(b_lexical)
  }
  innerFun();

  //& Uncaught ReferenceError: b_lexical is not defined at outerFun
  // console.log(b_lexical)
}

outerFun();
/*
  - What is Scope?
  
  - Types of Scope
    - Global
    - Functional (Local)
    - Block
*/

//============{Global}===============
/* let global = "circle";

console.log("Outer " + global);

function funFunction() {
  console.log("Inner " + global);
}

funFunction(); */
//===================================

//============{Functional}===============
/* let message = "Out Of Function";

function happyFunction() {
  let message = "I'm So Happy";
  console.log(message); // I'm So Happy
}
happyFunction();

console.log(message); // Out Of Function */
//=======================================

//====================={Block}========================
/* if (true) {
  let block = "Mohammed from";
  // let ==> var: does not respect the block scope
  console.log(block, "Palestine");
}

console.log(block); */
//====================================================

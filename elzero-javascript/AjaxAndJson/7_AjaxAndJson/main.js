/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

//--------------------------------------------------------
// console.log("One"); // execute directly

// setTimeout(() => {
//   console.log("Three");
// }, 0);
// // go to callback queue -> FIFO (Firs In First Out)
// // if Call Stack Empty, go to Call Stack and execute

// setTimeout(() => {
//   console.log("Four");
// }, 0);
// // go to callback queue -> FIFO (Firs In First Out)
// // if Call Stack Empty, go to Call Stack and execute

// // go to callback queue, (together)
// // if Call Stack Empty, go to Call Stack and execute, one by one not together

// console.log("Two"); // execute directly
//--------------------------------------------------------

//--------------------------------------------------------
// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

// let myVar = 10;
// myVar += 100;
// console.log(myVar);
//--------------------------------------------------------

//--------------------------------------------------------
// console.log(myVar); // Cannot access 'myVar' before initialization

// let myVar = 10;
// myVar += 100;
//--------------------------------------------------------

//--------------------------------------------------------
setTimeout(() => {
  console.log(myVar);
}, 0);

let myVar = 10;
myVar += 100;
//--------------------------------------------------------

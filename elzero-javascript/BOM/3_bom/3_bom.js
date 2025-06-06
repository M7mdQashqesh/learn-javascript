/* 
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, additionalArguments)
  - clearTimeout(Identifier)
*/

/* 
  عن طريق ال setTimeout نقدر ننادي function معين بعد وقت معين

  ال Timeout بنكتب بال ms
*/

/* ---------------------------- */
/* setTimeout(function () {
  console.log("Hello after 3s");
}, 3000); */
/* ---------------------------- */

/* ---------------------------- */
/* setTimeout(sayHello, 2000)

function sayHello() {
  console.log("Hello All");
} */
/* ---------------------------- */

/* With additional arguments */
/* ---------------------------- */

/* 
  this is error, because we change the structure of setTimeout(function, Timeout, additionalArguments)
*/

/* function display without waiting 3000ms */
/* setTimeout(sayHello("Mohammed"), 3000)

function sayHello(user) {
  console.log(`iam message for ${user}`)
} */
/* ---------------------------- */

/* ---------------------------- */
/* correct way, using additionalArguments */
/* setTimeout(sayHello, 3000, "Mohammed", 21);

function sayHello(user, age) {
  console.log(`Hello From ${user}, he is ${age} years old`);
} */
/* ---------------------------- */

/* clearTimeout(Identifier) */
/* 
  بتوقف عمل ال setTimeout
  لو انت قدامك 5 ثواني وبتشغل ال function 
  ال clearTimeout لو استخدمتو في اللحظه هاي
  بيوقف ال setTimeout
*/
let handler = setTimeout(sayHello, 3000);
console.log(handler);
// this is id of setTimeout

function sayHello() {
  console.log("Message");
}

let stopBtn = document.getElementsByTagName("button")[0];
stopBtn.onclick = function () {
  clearTimeout(handler); // handler -> id of setTimeout
};

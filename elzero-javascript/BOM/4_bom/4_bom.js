/* 
  BOM [Browser Object Model]
  - setInterval(Function, Milliseconds, additionalArguments)
  - clearInterval(Identified)
*/

/* 
  ال setInterval وال setTimeout نفس ال structural
  وتقريباً نفس الوظيفة ما عدا ان ال setInterval بتنفذ ال call function مراراً وتكراراً

  بال setTimeout كنا نستنى ال milliseconds بعديها بنفذ ال function

  ام ال setInterval ال milliseconds هو الوقت بين كل call function وال call يلي بعدها

  بضل يكرر ال call function لحد ما استعمل ال clearInterval 
*/

/* ---------------------------------- */
/* setInterval(function () {
  console.log("Message");
}, 1000); */
/* ---------------------------------- */

/* ---------------------------------- */
/* setInterval(sayHello, 1000);

function sayHello() {
  console.log("Hello");
} */
/* ---------------------------------- */

/* ---------------------------------- */
/* setInterval(sayHello, 1000, "Mohammed", 21);

function sayHello(user, age) {
  console.log(`This message from ${user}, he is ${age} years old`);
} */
/* ---------------------------------- */

/* ---------------------------------- */
let div = document.querySelector("div");
function countDown() {
  div.textContent -= 1;

  if (div.textContent === "0") {
    clearInterval(handler);
  }
}

let handler = setInterval(countDown, 1000);
/* ---------------------------------- */

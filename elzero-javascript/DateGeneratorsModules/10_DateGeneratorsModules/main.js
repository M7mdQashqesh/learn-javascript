/* 
  Modules
    - Export Alias
    - Named Export
    - Default Export
    - Import All
*/

let num = 10;
let myArr = [1, 2, 3];
function sayHello() {
  return "Hello";
}

export { num as a, myArr, sayHello };

// myArr -> Named Export
// sayHello -> Named Export

/*  */
/* Default Export */

/* 
  كل module الو واحد default export 
  يعني حاجه وحده بس تعمللها export as default 
  
  وتقدر تستدعيها من اي مكان بدون اسمها
*/

/* export default function saySomething() {
  return "Something";
} */

/*  */
// can be without name
export default function () {
  return `Anonymous function`;
}

/* 
  DOM [Class List]
  - classList
    - Length
    - contains
    - item(index)
    - add
    - remove
    - toggle
*/

/* 
  classList -> object
  class list -> الخاص بالعنصر

  عن طريق ال classList بنقدر نضيف class جديد في قائمة ال class الخاصه بالعنصر
  او نحذف class من الموجودين
  او نبحث عن كلاس موجود في العنصر ولا لا
*/
let element = document.getElementById("my-div");
console.log(element);
console.log(element.classList);
console.log(typeof element.classList);

console.log(element.classList.length);

console.log(element.classList.contains("two"));
console.log(element.classList.contains("three"));

console.log(element.classList.item(0));
console.log(element.classList.item(1));
console.log(element.classList.item(2));
console.log(element.classList.item(3));

/* ---------------------------------- */
/* 
element.onclick = function () {
  this.classList.add("add-one", "add-two");
};
 */
/* ---------------------------------- */

/* ---------------------------------- */
/* 
element.onclick = function () {
  this.classList.remove("one", "two");
};
 */
/* ---------------------------------- */

/* ---------------------------------- */
/* 
  toggle -> if class exist, remove
            if class not exist, add
*/
element.onclick = function () {
  this.classList.toggle("toggle");
};
/* ---------------------------------- */

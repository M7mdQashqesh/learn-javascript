/* 
  DOM [Deal With Elements]
  - before [Elements || String]
  - after [Elements || String]
  - append [Elements || String]
  - prepend [Elements || String]
  - remove
*/
let element = document.getElementById("my-div");

let beforeAndAfterElement = document.createElement("p");
beforeAndAfterElement.textContent = "beforeAndAfterElement";

element.before("This Is String");
element.after("This Is String");

element.before(beforeAndAfterElement);
element.after(beforeAndAfterElement);
/* 
  before and after does not work together for the same element
*/

/* 
  in before and after
  we talk about outside the element

  in append and prepend
  we talk about inside the element
*/

let appendAndPrependElement = document.createElement("p");
appendAndPrependElement.textContent = "appendAndPrependElement";

element.prepend(" | string | ");
element.append(" | string | ");

element.prepend(appendAndPrependElement);
element.append(appendAndPrependElement);

/* 
  append and prepend does not work together for the same element
*/

element.prepend(beforeAndAfterElement);

/* 
  append and prepend and before and after does not work together for the same element

  one element -> only one from this property
*/

/* remove */
/* 
  ال remove بشيل العنصر من ال dom tree تماماً 
  يعني بشيل العنصر من ال document تماماً
  مش راح يكون موجود من مره
*/

element.remove();

/* 
  قيم سطر 59 عشان يشتغل الي فوق بشكل صحيح
*/

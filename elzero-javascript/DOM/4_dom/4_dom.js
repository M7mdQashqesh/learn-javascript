/*
  DOM [Create Element]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

/*  */
/* createElement */
/* 
  اول اشي لازم ننشئ العنصر
  ثم بعديها بنحطو بالمكان المناسب زي ما بدنا
*/
let myElement = document.createElement("div");
console.log(myElement); /* <div></div> */

/* create class attribute */
myElement.className = "product";

/* createAttribute */
let myAttr = document.createAttribute("data-src");
console.log(myAttr);

myElement.setAttributeNode(myAttr);

/* 
  هيك احنا انشئنا attribute جديد مكانش موجود
  وحطيناه في ال element
*/

/* Create Text of tag */
myText = document.createTextNode("Product One");

/* Append text to element */ /* insert */
myElement.appendChild(myText);

/* Append element to body (page) */
document.body.appendChild(myElement);

/*  */
/* createComment */
let myComment = document.createComment("this is DIV");

/* Append to element */
myElement.appendChild(myComment);

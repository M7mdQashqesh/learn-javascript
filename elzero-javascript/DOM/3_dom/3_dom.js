/* 
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttributes
*/

/*  */
/* Element.attributes */
/* 
  بتجيب قائمة بجميع ال Attributes للعنصر
*/
console.log(document.querySelector(".para").attributes);

/*  */
/* Element.hasAttribute */
/* Element.removeAttribute */
/* 
  بدي اعمل فحص هل ال attribute معين موجود عندي في العنصر ولا لا

  بحذف ال attribute كامل عن الوجود
*/
let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  console.log("Found");
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
    console.log("attribute was removed");
  } else {
    myP.setAttribute("data-src", "changed");
    console.log("value was changed");
  }
} else {
  console.log("Not Found");
}

/*  */
/* Element.hasAttributes */
/* 
  بترجع boolean 
  هل العنصر في اي attribute ولا لا
*/
if (myP.hasAttributes()) {
  console.log("Yes is full");
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log("Yes");
} else {
  console.log("no does not have any attribute");
}

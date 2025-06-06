/* 
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

let element = document.getElementById("my-div");

/* inline style */
/* 
  كل خاصيه بسطر لحالها
*/
element.style.color = "red";
element.style.fontWeight = "bold";

/* 
  لو بدي اكتبهم كلهم بسطر واحد
*/

element.style.cssText = "color: green; background-color: black; ";

/* remove from inline */
element.style.removeProperty("background-color");

element.style.setProperty("background-color", "tomato", "important");

/* remove from css file (stylesheet) */
document.styleSheets[0].rules[0].style.removeProperty("line-height");

document.styleSheets[0].rules[0].style.setProperty("padding", "10px");

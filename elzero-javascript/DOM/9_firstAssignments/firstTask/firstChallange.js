/* 
  لديك العنصر التالي في ال HTML عليك إختياره بال JavaScript ب 15 طريقة مختلفة
  يمكنك إستخدام querySelector أربع مرات فقط وكذلك querySelectorAll اربع مرات فقط
*/
/* 
  <div id="elzero" class="element" name="js">JavaScript</div>
*/
console.log(document.getElementById("elzero"));

console.log(document.getElementsByClassName("element")[0]);

console.log(document.getElementsByTagName("div")[0]);

console.log(document.getElementsByName("js")[0]);

console.log(document.body.children[0]);

console.log(document.body.firstElementChild);

console.log(document.body.childNodes[1]);

console.log(document.querySelector("#elzero"));

console.log(document.querySelector(".element"));

console.log(document.querySelector("[name='js']"));

console.log(document.querySelector("div"));

console.log(document.querySelectorAll("#elzero")[0]);

console.log(document.querySelectorAll(".element")[0]);

console.log(document.querySelectorAll('[name="js"]')[0]);

console.log(document.querySelectorAll("div")[0]);

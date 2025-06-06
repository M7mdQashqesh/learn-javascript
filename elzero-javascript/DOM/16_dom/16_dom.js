/* 
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

/* 
  ال addEventListener
  بتعمل attach ل event معين على العنصر
*/

let myP = document.querySelector("p");
/* old way */
/* ------------------------------------------ */
/* myP.onclick = function () {
  console.log("Message From OnClick");
}; */
/* ------------------------------------------ */

/* if want to attach multiple function */
/* ------------------------------------------ */
/* myP.onclick = one;
myP.onclick = two;

function one() {
  console.log("Message From Function One");
}
function two() {
  console.log("Message from function two");
} */
/* does not work, "two" will overwrite on "one" */
/* ------------------------------------------ */

/* addEventListener solve this problem */

/* Error Test */
/* this is error, but will not get warning or error */
window.onload = "Mohammed";

/* in addEventListener will get warning or error */

/* ----------------[new version]---------------- */
/* myP.addEventListener("click", function () {
  console.log("Message From addEventListener");
}); */
/* ------------------------------------------ */

/* -----------------[multiple]-------------------- */
/* myP.addEventListener("click", one);
myP.addEventListener("click", two);

function one() {
  console.log("Message from function One");
}
function two() {
  console.log("Message from function two");
} */
/* ------------------------------------------ */

/* --------------[error test]----------------- */
/* myP.addEventListener("click", "Mohammed"); */ /* error */
/* ------------------------------------------ */

/* ----------------[practice]------------------ */
/* when click in paragraph, create clone under it */
myP.addEventListener("click", function () {
  let myPClone = myP.cloneNode(true);
  myPClone.className = "clone-paragraph";
  myP.after(myPClone);
  /* another way */
  /* document.body.appendChild(myPClone);*/
});

/* -------------[this is error]--------------- */
/* document.querySelector(".clone-paragraph").onclick = function () {
  console.log("This is cloned");
}; */
/* ------------------------------------------- */

/* ---------------[correct way]--------------- */
document.addEventListener("click", function (e) {
  if (e.target.className === "clone-paragraph") {
    console.log("Cloned Version");
  }
});
/* ------------------------------------------ */
/* 
  هان انا عملت event على عنصر لسا لم يتم انشاءه
  الطريقه الفوق ال error 
  بجيب خطأ انه ما بنفع يحط event على عنصر ما تم انشاءة
  اول ما يتم انشاءة، هان انا عرفته، جبته عن طريق الكلاس تاعه
  اعمل فيه يلي بدي اياه

  هذا اكبر استخدام لل addEventListener 
*/

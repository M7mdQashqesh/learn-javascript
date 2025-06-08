/* 
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = copy Session
  - New Tab With Same URL = New Session
*/

/* 
  بعد ما تعرفنا على ال localStorage وتعرفنا على جميع properties تاعونها
  هم نفس الاشي موجودين في ال sessionStorage

  الفرق الجهوري بينهم هو ان ال localStorage بحتفظ بالبيانات على طول حتى لو سكرت الصفحه

  لكن ال sessionStorage بحتفظ بالبيانات خلال الجلسة يلي انت فيها بس
*/

/* ---------------------------------------------- */
/* window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue"); */
/* ---------------------------------------------- */

/* 
  بعد ما عملنا الاكواد comments
  بدنا نجرب نعمل reload للصفحه ونجرب نسكر الصفحه
  ونشوف الفرق بينهم

  اول اشي بال reload الاثنين بضلو

  لما سكرنا الصفحه ورجعنا شغلناها ال sessionStorage انحذفت
  وال localStorage ضلت

  يعني بمجرد ما اسكر ال tab
  ال sessionStorage بتروح
*/

/*
  رجعنا حطينا القيم بال storage

  هلحين بدنا نشوف لو فتحنا نفس ال tab في tab جديده
*/

/* 
  كيف بدي افتح نفس الصفحه ب tab جديده مع ال sessionStorage

  اعمل duplicate لل tab
  عن طريق زر الماوس اليمين على ال tab
*/

/* 
  نشوف الفكرة الي ممكن نستعمل فيها موضوع ال localStorage or sessionStorage

  create form in html file

  على فرض ان المستخدم بعبي البيانات في الحقول

  ثم عمل reload عن طريق الخطأ

  ممكن عن طريق ال localStorage نخلي البيانات تضل موجوده في الحقول
*/

/* ----------------------------------------------- */
/* let field = document.querySelector("input");

if (window.localStorage.getItem("nameField") !== "") {
  field.value = window.localStorage.getItem("nameField");
}
field.oninput = function () {
  let dataFiled = field.value;
  window.localStorage.setItem("nameField", dataFiled);

  if (window.localStorage.getItem("nameField") === "") {
    window.localStorage.removeItem("nameField");
  }
}; */
/* ----------------------------------------------- */

/* 
  هلحين الكود يلي فوق هو صحيح برمجياً 
  لكن منطقياً غلط
  انا بدي يحفظ البيانات بس اذا عمل reload للصفحه
  مش اذا سكر الصفحه

  لذلك بنستخدم sessionStorage
*/
/* ----------------------------------------------- */
let field = document.querySelector("input");

if (window.sessionStorage.getItem("nameField") !== "") {
  field.value = window.sessionStorage.getItem("nameField");
}
field.oninput = function () {
  let dataFiled = field.value;
  window.sessionStorage.setItem("nameField", dataFiled);

  if (window.sessionStorage.getItem("nameField") === "") {
    window.sessionStorage.removeItem("nameField");
  }
};
/* ----------------------------------------------- */

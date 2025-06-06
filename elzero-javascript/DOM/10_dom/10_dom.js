/* 
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

/* 
  تعاملنا مع ال onclick, onfocus, onblur events وغيرهم كثير

  وكنا نعملها بايدينا نكبس على عنصر بال onclick ونعمل action معين

  ال event simulation
  مش احنا يلي رح نعملها، ممكن نعمل action معينة
  والناتج منها يروح يعمل event من احد ال events
  
  يعني بعمل محاكاة لل events يلي انا بعملها بنفسي
  مش انا يلي بعملها
*/

/* 
  مطلوب منا انو اول ما يفتح الصفحه ينعمل 
  على الحقل الثاني focus 
  بدون تدخل مني
*/

let firstFiled = document.querySelector(".one");
let secondField = document.querySelector(".two");

/* ================================== */
/* 
window.onload = function () {
  secondField.focus();
};

firstFiled.onblur = function () {
  document.links[0].click();
};
*/
/* ================================== */

/* 
  تطبيق عملي زي two-factor-random-number
  في عنا حقلين، الحقل الاول بسع بس one digit
  لما ينحط ال digit 
  بدنا ياه يروح من الحقل الاول على الثاني لحالو
*/

firstFiled.oninput = function () {
  if (firstFiled.value.length === 1) {
    firstFiled.blur();
    secondField.focus();
  }
};

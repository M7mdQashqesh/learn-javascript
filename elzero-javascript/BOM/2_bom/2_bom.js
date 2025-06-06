/* 
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/
/* 
  هذول methods بتظهر رسائل بالصفحة
*/

/* 
  لو انت موجود بال global context(global scope)
  مش حتفرق لو كتبت window.alert() || alert() || this.alert()
*/

/* ------------------------------ */
/* window.alert("Hello"); */
/* ------------------------------ */

/* 
  ال alert بطلب منك رسالة تظهرها للشخص
  الرساله مش محتاجه منو اي استجابة
  بس المطلوب انو يشوفها ويضعط ok

  ال alert حالياً مش مستخدمة 
  لانها مزعجة وبتوقف التحكم في الصفحه بشكل كامل لحد ما تختفي

  في الو بديل زي مكتبة sweetalert2
  هي customizable معمولة بال html and css 
  والتحكم عن طريق ال javaScript
*/

/* confirm(Message) */
/* 
  ال confirm بتأكد هل انت بدك تعمل ال action هاي ولا لا

  مثل: هل انت متأكد انك تريد ازالة المنتج من السلة

  ال confirm
  بطلب مني رسالة اكتبها وبطلب مني response اعمله
  yes or no 
  وبرجع boolean
*/

/* ------------------------------ */
/* let confMsg = window.confirm("Are You Sure ");
console.log(confMsg);
if (confMsg === true) {
  console.log("Item Deleted");
} else {
  console.log("does not Deleted");
} */
/* ------------------------------ */

/* prompt(Message, DefaultMessage) */
/* 
  عبارة عن رسالة رح تطلع للشخص مش مطلوب منك ok or cancel
  مطلوب منك تكتب قيمة في المربع 

  ال defaultMessage بتكون مكتوبه في المربع وانت بتعدل عليها او بتحذفها
*/
/* ------------------------------ */
/* let promptMessage = window.prompt("Good Dar To You", "Saturday");
console.log(promptMessage); */
/* ------------------------------ */

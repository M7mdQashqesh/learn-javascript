/* 
  Local Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

  Info
    - No Expiration Time
    - HTTP And HTTPS
    - Private Tab
*/

/* 
  ال localStorage عبارة عن property في ال window بتقدر تخليك تعمل access على ال storage object

  ال storage عبارة عن object بنقدر نضيف فيه بيانات عشان نستخدمها في ال application تاعنا
*/

/* 
  نبلش في الموضوع

  ال storage object تاعنا محتاجين نبدأ نضيف فيه البيانات الي بدنا نشتغل عليها 
*/

/* 
  setItem بطلب منك شغلتين
  - key
  - value

  بتعامل معه نفس ال object
  ال key هي اسم الخاصيه يلي بدي اضيفها
  وال value هي قيمة ال key يلي بدي اضيفها
*/
window.localStorage.setItem("color", "red");

console.log(window.localStorage);
console.log(typeof window.localStorage);

/*  */
/* another ways to add into localStorage as object */
window.localStorage.fontWeight = "bold";

window.localStorage["fontSize"] = "20px";

/* 
  الان تعلمنا كيف نضيف البيانات على ال localStorage

  هلحين بدنا نتعلم كيف نجيب هاي البيانات ونستخدمها

  بنستخدم window.localStorage.getItem(key)
*/

console.log(window.localStorage.getItem("color"));

/* another way */
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

/* set color in page */
document.body.style.backgroundColor = window.localStorage.getItem("color");

/*  */
/* remove one */
window.localStorage.removeItem("fontSize");

/*  */
/* clear */
/* 
  بتشيل كل اشي موجود في ال storage object
*/
window.localStorage.clear();

/* 
  ال background لونها احمر لانو عملنالها اللون قبل ما نحذف اللون من ال storage
*/

/*  */
/* Get key */
window.localStorage.setItem("name", "mohammed");
window.localStorage.setItem("age", 21);

console.log(window.localStorage.key(0));
console.log(window.localStorage.key(1));
/* 
  بيوخذ ال index 
*/


/* 
  لو احنا فاتحين الموقع في private tab
  لما نقفل الصفحه، ال storage بتنحذف

  بيختلف بين ال HTTP and HTTPS

  مفش expiration time
*/

/* 
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

/* 
  لو انت فتحت موقع، والموقع فيه resources كثيره زي الصور وال text والخ
  ال resources بدها تضل تحمل وحده ورا وحده لحد ما الموقع كلو يحمل 
  لو انت في نص التحميل كبست على زر Esc في الكيبورد بيعمل stop لل loading الخاص بال resources
*/

/*
  window.stop() -> بتعمل نفس الشرح يلي فوق
*/

/*  */
/* window.print() */
/* 
  عشان تعمل طباعه للصفحه
*/

/*  */
/* window.focus() */
/* 
  هي نفس القصة الموجوده في ال inputField

  بس هان بنعمل focus على window عشان هي يلي بتقبى طالعه قدامنا

  عشان نقدر نحدد ال window بدنا نستخدم variable
*/
/* ------------------------------- */
/* let myNewWindow = window.open(
  "https:\\google.com",
  "",
  "width=400, height=400"
); */
/* ------------------------------- */

/* myNewWindow.focus(); --> write this in console */
/* does not work im my browser and myNewWindow.close() does not work */

/*  */
/* scrollTo(x, y) & scroll(x, y) */
/* 
  الاثنين بعملو نفس الوظيفه بالزبط
  انعملو ثنتين بسبب التوافق مع المتصفحات بس مش اكثر
*/
/* -------------------------------------------------------------------- */
/* window.scrollTo(500, 500) -> make this in console */
/* (500, 500) -> 500px */
/* 
  scroll(x, y) & scrollTo(x, y) 
  هذا بودينا للاحداثيات x, y
*/
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/*  */
/* scrollBy(x, y) */
/* 
  هذا بخلينا نتحرك بمقدار x, y
*/
/* window.scrollBy(500, 200) -> make this in console */
/* 500px , 200px */
/* -------------------------------------------------------------------- */
/* 
  لو بدي احط ال options
  رح تتغير بنية ال scroll

  window.scrollTo({
    left: 200,
    top: 3000,
    behavior: "smooth",
  });
*/
/* -------------------------------------------------------------------- */
let btn = document.querySelector("button");

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 3000,
    behavior: "smooth",
  });
};

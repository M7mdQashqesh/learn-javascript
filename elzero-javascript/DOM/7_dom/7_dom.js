/* 
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
    - onclick
    - oncontextmenu
    - onmouseenter
    - onmouseleave

    - onload
    - onscroll
    - onresize

    - onfocus
    - onblur
    - onsubmit
*/

/* 
  من اهم الحاجات الي بنتعامل معها مع ال document
  هي كل action يتم في الصفحة 
  click on button -> this is click event
*/

/*  */
/* onclick */
/* 
  هذا event عبارة عن left click mouse
  ممكن استخدمها في ال HTML مباشرة
  وممكن استخدمها في كود الجافاسكريبت
*/

/*
  تم تطبيق الكود في HTML

  ممكن تطبيق نفس الكود هنا في كود ال js
  عن طريق انو نختار العنصر بالاول الي محتاجينو
  ثم بدنا نخبرو انو في اكشن معينه رح تصير 
  عن طريق انو نحنا نستخدم anonymous function
*/
let firstBtn = document.getElementById("first-btn");

firstBtn.onclick = function () {
  console.log("Hello From JavaScript Code");
};

/*  */
/* oncontextmenu */
/* 
  هاي عبارة عن event 
  right click mouse
  مثال عليها في كثير applications 
  بتلغي كبسة الماوس اليمين

  او يعمل menu خاصه بالموقع تظهر عند النقر على زر الماوس اليمين 
*/

/*  */
/* onmouseenter */
/* 
  هاي event معناها اول ما تحط الماوس على الي بدك اياه
  بدون ما تنقر على الماس، بس مجرد زيارة
*/
firstBtn.onmouseenter = function () {
  console.log("you put the mouse on me");
};

/*  */
/* onmouseleave */
/* 
  هاي عكس الفوق، عند الذهاب من عنده
*/
firstBtn.onmouseleave = function () {
  console.log("stay, lsa early");
};

/*  */
/* onscroll */
/* 
  هاي غالباً مرتبطة مع ال window
  عند عمل scroll
*/
window.onscroll = function () {
  console.log("window was scrolled");
};

/*  */
/* onresize */
/* 
  برضو غالباً مرتبطة مع ال window
  كل ما اكبر او اصغر الصفحه بنفذ ال function
*/
window.onresize = function () {
  console.log("window was resized");
};

/*  */
/* onfocus */
/* 
  هاي event لل form
  ال focus لما اضغط على الحق input
*/
let inputText = document.querySelector("form input[type='text']");

inputText.onfocus = function () {
  console.log("was focused");
};

/*  */
/* onblur */
/* 
  هذا ال event عكس الفوق بس برضو لل form
  لما اكون عامل focus واطلع من ال focus 
  يسمى blur
*/
inputText.onblur = function () {
  console.log("stay focus on me");
};

/*  */
/* onsubmit */
/* 
  هاي event لل form
  تستخدم عند تسليم ال form
  بقدر اعمل حاجات زي
  قبل ما تروح البيانات على ال database
  اعمل check على ال data في ال client side 
  validation
  اذا كلشي تمام
  ابعث البيانات
*/
let submitBtn = document.querySelector(".submit-btn");

submitBtn.onsubmit = function () {
  console.log("form was submitted");
};

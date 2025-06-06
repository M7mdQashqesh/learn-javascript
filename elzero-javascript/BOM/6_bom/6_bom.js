/* 
  BOM [Browser Object Model]
  - open(URL [opt], Window Name Or Target Attr [opt], Win Features [opt], History Replace)
  - close()
  - Window Features
    - width [Num]
    - height [Num]
    - left [Num]
    - top [Num]

  Search
    - Window.Open Window Features
*/

/* 
  عن طريق ال open()
  رح تقدر تفتح window جديده وتتحكم في الخواص تاعتها
*/

/*  */
/* close() */
/* 
  بتقفل ال window 
  هاي بتقفلش الا ال windows يلي انفتحو عن طريق ال open()
*/

/*  */
/* open(URL [opt], Window Name Or Target Attr [opt], Win Features [opt], History Replace[opt -> boolean]) */
/* ------------------[default]----------------- */
/* setTimeout(function () {
  window.open("", "", "");
  console.log("page was open");
}, 2000); */
/* ------------------------------------------ */
/* setTimeout(function () {
  window.open("https:\\google.com", "", "");
}, 2000); */
/* ------------------------------------------ */
/* setTimeout(function () {
  window.open("https:\\google.com", "_blank", "");
}, 2000); */
/* _blank or _self */
/* ------------------------------------------ */
/* setTimeout(function () {
  window.open("https:\\google.com", "_blank", "width=400, height=400");
}, 2000); */
/* ------------------------------------------ */
/* setTimeout(function () {
  window.open(
    "https:\\google.com",
    "_blank",
    "width=400, height=400,left=200, top=100"
  );
}, 2000); */
/* top and left from the original page */
/* ------------------------------------------ */
/* 
  URL [opt] -> ممكن تكون رابط صفحه او موقع ممكن تكون صورة او pdf وممكن تكون file او اي اشي الو url

  لو ما حطيناش رابط رح يفتح صفحة blank

  Window Name Or Target Attr [opt] --> بتعطيها اسم مجرد identified وبنفس الوقت بتكتب ال target, by default "_blank"

  Win Features [opt] --> مميزات ال window ال window يلي بتفتحها تقدر تتحكم في المميزات تاعتها
  طولها، عرضها، مكانها في الصفحه، هل هي resizable ولا لا

  
*/

/*
  AJAX
  - Asynchronous JavaScript And XML (الاختصار)
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

/* 
  لما تفتح صفحه معينه، اي صفحه
  انت بتعمل request

  ال request برجع منو response

  في بعض الاكواد، كود معين يجكيلي ال response هذا ايش نوعو، واجاني سليم ولا لا

  في درس اليوم احنا بس بدنا نشوف هذول الاكواد
*/

let req = new XMLHttpRequest();
console.log(req);

/*
  روح على اي صفحه ومن ال google developer tools
  فوت على ال network

  وعيد تحميلها
  وفوت على topics/

  رح يجيبلك ال 
  request methods: GET, POST...etc
  status code: 200 ok, 404...etc

  المطلوب نفهم انو في request بتم
  في status code
  في response بيرجع
*/

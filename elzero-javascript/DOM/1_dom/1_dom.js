/* 
  DOM
    - What is DOM
    - DOM selectors
      -- Find Element By ID
      -- Find Element By Tag Name
      -- Find Element By Class Name
      -- Find Element By CSS Selectors
      -- Find Element By Collection
        -- title
        -- body
        -- images
        -- forms
        -- links
*/

/* 
  - What is DOM:

  DOM --> Document object model

  لما الصفحة ينعمللها load ال browser بينشئ model للصفحه كاملة عباره عن object
  فيه جميع العناصر تقدر تتعامل معاهم
  لغة ال جافاسكريبت تقدر تعمل كلشي في هاي العناصر
  تقدر تحذف، وتضيف، وتغير ال attributes 
  تغير ال classes واشياء اخرىُ
*/

/* 
  - DOM selectors:
*/

/*  */
/* Find Element By ID */
let myIdElement = document.getElementById("my-div");
/* 
  document هي عبارة عن ال object التي تحتوي على كل العناصر الي تاعتنا كلها
  فيه property and method نقدر نستخدمها على العناصر
*/

/*  */
/* Find Element By Tag Name */
let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements);
/* to access some one from element -> use index */
console.log(myTagElements[1]);

/*  */
/* Find Element By Class Name */
let myClassElements = document.getElementsByClassName("my-span");
console.log(myClassElements);

/* to access some one from element -> use index */
console.log(myClassElements[0]);

/*  */
/* Find Element By CSS Selectors (Query Selector) */
/* 
  بقدر استعمل فيها اي حاجه 
  بقدر اكتب  فيها اي حاجه

  class, id, tag, advanced selector in css ... anything

  in class we should add .
  in id we should add #

  بجيب اول وحده بلاقيها
*/

let myQueryElement = document.querySelector(".special");
console.log(myQueryElement);

let myQueryElement2 = document.querySelector("#my-div");
console.log(myQueryElement2);

/* querySelectorAll */
/* 
  بجيب كل ال elements وبحطهم جوا array
*/
let allQueryElement = document.querySelectorAll(".my-span");
console.log(allQueryElement);

/* to access some one from element -> use index */
console.log(allQueryElement[1]);

/*  */
/* Find Element By Collection */

/* title */
console.log(document.title);

/* body */
console.log(document.body);

/* forms */
console.log(document.forms);
/* to access some one from element -> use index */
console.log(document.forms[1]);

/* we can use this */
console.log(document.forms[0].one);
console.log(document.forms[0].one.value);

/* links */
console.log(document.links);
/* to access some one from element -> use index */
console.log(document.links[0]);

/* we can use this */
console.log(document.links[0].href);

/* 
  بالنهاية احنا بنشتغل get and set
  بالاول بنجيب ثم بنعدل
*/

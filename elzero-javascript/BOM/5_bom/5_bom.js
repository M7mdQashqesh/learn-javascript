/* 
  BOM [Browser Object Model]
  - Location Object
    - href GET / SET [URL || Hash || File || Mail]
    - host
    - hash
    - protocol
    - reload()
    - replace()
    - assign()
*/

/* 
  عن طريق ال location object وال properties وال methods الموجوده فيه
  رح نقدر نتعامل مع ال URL تاعتنا ونعمل فيها كل حاجه
*/

console.log(window.location);

// get
console.log(window.location.href);

/* 
  set (our website will go to "google")
  this will store our move in the history
*/
/* window.location.href = "https:\\google.com"; */

/*
  href [Hash] #
  does not work in my page
  hash -> go to section in website
*/
/* window.location = "/#sec02"; */

/*  */
/* host */
console.log(window.location.host); // With PORT
console.log(window.location.hostname); // without port

/* example: change hostname only without باقي الرابط  */

/* window.location.href = "https:\\google.com"; */
/*
  هان بغير الرابط كلو
*/

/*
  على فرض انو احنا برابط زي 
  https://elzero.org/study/javascript-bootcamp-2021-study-plan/

  وبدي اغير بس elzero.org والباقي يضل
  بستخدم ال hostname
*/
/* window.location.hostname = "google.com"; */

console.log(window.location.protocol);

/*  */
/* reload() */
/* -------------------------------- */
/* setInterval(function () {
  window.location.reload();
}, 2000); */
/* -------------------------------- */

/*  */
/* replace() & assign() */
/* 
  الاثنين بعملو تغيير لل url تاعنا
  بس الاثنين بختلفو عن بعض في موضوع ال history

  window.location.replace("String") -> remove from history
  
  window.location.assign("String") -> save in the history
*/

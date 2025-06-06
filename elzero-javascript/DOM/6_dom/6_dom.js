/* 
  DOM [Deal With Children's]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myDiv = document.getElementsByTagName("div")[0];
console.log(myDiv);

/*  */
/* children */
/* 
  برجع الابناء الموجودين في الاب
  يعني برجع بس ال elements 
  يعني ال tags
*/
console.log(myDiv.children);
console.log(myDiv.children[0]);

/*  */
/* childNodes */
/* 
  برجع قائمة مصفوفة تحتوي على جميع ال nodes 
  الموجودين داخل الاب
  تتضمن ال text, comments, tags

  الجواب عنا طلع 7 بسبب المسافات بين ال tags
  لو قمنا المسافات برجع ل 5
*/
console.log(myDiv.childNodes);
console.log(myDiv.childNodes[3]);

/*  */
/* firstChild */
console.log(myDiv.firstChild);

/*  */
/* lastChild */
console.log(myDiv.lastChild);

/*  */
/* firstElementChild */
console.log(myDiv.firstElementChild);

/*  */
/* lastElementChild */
console.log(myDiv.lastElementChild);

/* 
  ال firstChild & lastChild 
  بقبل اي اشي
  elements (tags) , comments, text

  ال firstElementChild & lastElementChild
  بقبل بس ال elements (tags)
*/

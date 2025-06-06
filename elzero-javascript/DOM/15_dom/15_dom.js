/* 
  DOM [Cloning]
  - cloneNode(Deep)
*/

/* 
  cloning -> الاستنساخ
*/

/* 
  عندي ال paragraph بدي انقلو جوا ال div
*/

/* ------------------------------------------ */
/* let myP = document.getElementById("my-p");

let myDiv = document.getElementsByTagName("div")[0].appendChild(myP); */
/* ------------------------------------------ */

/* 
  طيب انا بدي انسخو من مكانو واحطلو نسخه جوا ال div
  الطريقه القبل بوخذ نفس العنصر وبنقلو
*/

/* 
  cloneNode(boolean)

  if true -> بوخذ كل العناصر داخل هذا العنصر
  if false -> بوخذ بس العنصر الي اخترناه بدون العناصر يلي جواه

  by default is "false"
  
  العناصر تشمل ال tags, text, comments

  طبعاً النسخه يلي بياخذها مع ال attributes

  فكرة ال cloning اني اخذ العنصر واتصرف فيه في اي مكان بدون ما أثر على العنصر الاساسي
*/

/* ------------------------------------------ */
let myP = document.getElementById("my-p").cloneNode(true);

let myDiv = document.getElementsByTagName("div")[0];

myDiv.appendChild(myP);
/* ------------------------------------------ */

/* 
  طبعاً هان بعد ما اخذت نسخه اخذها نفس ال attributes
  وهان ممكن يسبب مشكلة اذا كانو نفس ال id ونفس ال name

  بالتالي لازم اتعامل معهم برمجياً واغيرهم
*/

myP.id = `${myP.id}-clone`;
/* 
  myP -> clone version not original
*/

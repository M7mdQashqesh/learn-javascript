/* 
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

let str1 = "10 20 100 1000 5000";
/* --------------[normal way]-------------- */
/* return number less than 20 */
let myArr = str1.split(" ").map((el) => parseInt(el));

myArr = myArr.filter((el) => el < 20);
console.log(myArr);
/* ---------------------------------------- */

let str2 = "OS1 OS12 OS123 OS123OS";
/* --------------[normal way]-------------- */
/* return OS1 */
let myArr2 = str2.split(" ");

console.log(myArr2.filter((el) => el === "OS1"));
/* ---------------------------------------- */

/* 
  لو طلب ان ترجع العناصر الي مكتوب فيها كلمة OS وبعدها اي عدد من الارقام

  او

  لو طلب ان ترجع العناصر الي مكتوب فيها كلمة OS وبعدها اي عدد من الارقام وما يكونش وراها كلمة

  OS123OS -- هاي بتزبطش

  الي فوق ممكن ينعملو بال if لكن معقده شوي، بس بتنعمل

  او

  لو طلب ان ترجع العناصر الي مكتوب فيها كلمة OS وبعدها اي عدد من الارقام وبعدها لو في كلمة ووراها ارقام، لكن لو الكلمة بعدها ارقام، ترجعهاش

  هاي صعبة جدا نعملها باستخدام if

  هذا الهدف من ال regular expression
*/

/* 
  استخدامنا لل Regular Expression في العالم الحقيقي
*/

/*  */
/* Email */
let invalidEmail = "Moh@@@gmail....com";

/* 
  ال email عشان يكون valid في الو معايير
  1_ اسم الايميل، ممكن يحتوي على ارقام وحروف 
  2_ بعدها علامة ال @
  3_ بعدها ال domain (email provider)
  4_ بعدها علامة ال .
  5_ بعدهاال top level domain (TLD) [com, net ...etc]

  هلحين احنا مشعارفين شو ممكن يكون ال الاسم، او الدويمن، او ال TLD

  بس عارفين انو في pattern (نمط) معين اذا كان الايميل على نفس النمط، بكون valid
*/

let validEmail = "o@nn.sa";

/* 
  اني احصل على هذا النمط من خلال ال if conditions
  رح يتطلب شغل كثير

  في وجود ال regular expression بتقدر تحدد الايميل valid or not
*/

/*  */
/* IP */
let ip = "192.168.2.1" // IPV4 (version 4)

let url1 = "elzero.org" // valid
let url2 = "elzero.org/" // valid
let url3 = "http://elzero.org/" // valid
let url4 = "http://www.elzero.org/" // valid
let url5 = "https://elzero.org/" // valid
let url6 = "https://www.elzero.org/" // valid
let url7 = "https://www.elzero.org/?facbookId=avzkxngkelej32" // valid


/* 
  الملخص
  احنا بنستخدم ال regular expression حتى نحدد نمط معين
  (PATTERN)
  اكثر اشي مستخدم بال forms 
  زي emails, ip, password, phone, url ...etc

  for Validations
*/

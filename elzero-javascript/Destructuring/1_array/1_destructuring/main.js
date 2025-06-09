/* 
  Destructuring
  "Is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set then into new distinct variables."

  - Destructuring Array
*/

/* 
  عن طريق ال destructuring تقدر ان انت توخذ البيانات من ال arrays وال objects وال map وتضيفهم في متغيرات جديده وتوزعهم بالطريقه يلي انت بدك اياها
*/
let a = 1;
let b = 2;
let c = 3;
let d = 4;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
console.log(myFriends);

/* 
  بدي اعمل extract للبيانات الفوق اضيفها في متغيرات جديده

  كون المتغيرات مش موجوده بدنا نعمللهم declare
*/

let [myFriend1, myFriend2, myFriend3, myFriend4] = myFriends;

console.log(myFriend1);
console.log(myFriend2);
console.log(myFriend3);
console.log(myFriend4);

/*
  لو البيانات معرفه من قبل
  زي a,b,c,d
*/
console.log("-".repeat(20));

/* -------------------------------- */
/* [a, b, c, d] = myFriends; */
/* [a, b, c] = myFriends; */
/* [a, b, c, d, e] = myFriends; */
[a = "A", b, c, d, e = "Mohammed"] = myFriends;

/* -------------------------------- */

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/* 
  في عملية ال destructuring مش لازم يكونو عدد المتغيرات الي بدي اضيفها نفس عدد ال items
*/

/* 
  بدنا نجرب لو كانو عدد المتغيرات اكبر من عدد ال items

  جوابها رح يكون undefined
  بقدر احطلها default value
*/

/* 
  بدي اعرف 3 متغيرات جديده، ولكن بدي اخذ الاول والثاني والرابع
*/
console.log("-".repeat(20));

/* let [x, y, z] = myFriends; */
/* let [x, y, , z] = myFriends; */
let [, y, , z] = myFriends;

console.log(y);
console.log(z);

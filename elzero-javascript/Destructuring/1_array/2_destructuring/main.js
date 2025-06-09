/* 
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohammed", "Gamal"]],
];

/* by indexing, pring Gamal */
console.log(myFriends[3][2][1]);
console.log("#".repeat(15));
/* 
  من الحاجات العظيمة في ال destructuring ان انت بعد ما تعيد بناء ال array عن طريق توزيعها على متغيرات ثانية

  بتقدر توصل للعنصر الي انت بدك اياه ب variable واحد بس مباشرةً
*/

/* challenge */
/* write your code here */
let [, , , [a, , [, b]]] = myFriends;
console.log(a); // Shady
console.log(b); // Gamal

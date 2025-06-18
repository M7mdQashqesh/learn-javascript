/* 
  Modules
    - Import And Export
*/

/* 
  ال module عبارة عن وحدة برمجية بتنفذ وظيفة معينه او مجموعة من الوظائف

  اذا كان عندي الكود مكتوب في ملف معين، وبدي استخدمو في ملف اخر، مش منطق اكتب نفس الكود في الملفين

  هنا تأتي وظيفه ال import and export modules
*/

/* first way of export */
/* ----------------------------------------- */
/* export let num = 10;
export let myArr = [1, 2, 3, 4];
export function sayHello() {
  return `Hello`;
} */
/* ----------------------------------------- */

/* seconde way of export */
/* ----------------------------------------- */
let num = 10;
let myArr = [1, 2, 3, 4];
function sayHello() {
  return `Hello`;
}

export { num, myArr, sayHello };
/* ----------------------------------------- */

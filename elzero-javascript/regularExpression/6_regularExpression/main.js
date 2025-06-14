/* 
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word
  \B => matches not at the beginning/end of a word

  Test Method:
  pattern.test(input);
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

/* return spam */
/* 
  اخر واحد اسم عادي وليس spam
  لكن سوف يتم وضعه في ال array
  ولمنع ذلك، ال spam الحقيقي يكون مكتوب اما في البدايه او النهايه
  وهنا تكون فائدة ال \b
*/
let regex = /spam/gi;
console.log(names.match(regex));

/* At the beginning */
let regex2 = /\bspam/gi;
console.log(names.match(regex2));

/* At the End */
let regex3 = /spam\b/gi;
console.log(names.match(regex3));

/* at the beginning and at the end */
let regex4 = /(\bspam|spam\b)/gi;
console.log(names.match(regex4));

/*  */
/* Test Method -> pattern.test(input), return boolean */
console.log(regex4.test(names));
console.log(/(\bspam|spam\b)/gi.test("Mohammed"));
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
console.log(/(\bspam|spam\b)/gi.test("Spam1"));

/* 
  ال test method تستخدم مع ال if condition 
  في عملية عمل validation لل forms
  بتعمل test ل input معين على pattern معين 
  وبناءاً على النتيجه بتعمل المطلوب
*/

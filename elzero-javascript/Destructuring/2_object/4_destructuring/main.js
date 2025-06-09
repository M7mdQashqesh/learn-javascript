/* 
  Destructuring
  - Destructuring Object
*/

const myUser = {
  theName: "Mohammed",
  theAge: 21,
  theTitle: "Developer",
  theCountry: "Palestine",
};

/* older way */
/* ------------------------------------ */
console.log(myUser.theName);
console.log(myUser.theAge);
console.log(myUser.theTitle);
console.log(myUser.theCountry);
console.log("#".repeat(20));

let a = 1;
let b = 2;
let c = 3;
let d = 4;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("#".repeat(20));

a = myUser.theName;
b = myUser.theAge;
c = myUser.theTitle;
d = myUser.theCountry;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("#".repeat(20));
/* ------------------------------------ */
console.log("#".repeat(20));

/* Destructuring way */
/* 
  في ال destructuring لازم اسماء ال variable تكون نفس اسماء ال properties

  لانه احنا بنعمل استخراج لقيم ال variables

  بال array احنا كنا نعرف variables بغض النظر عن اسمائهم ونحط القيم في المتغيرات

  اما بال object احنا بنستخرج قيم ال variables
  بالتالي لازم يكونو ال variables اسمائهم موجوده بال object

  مش مهم الترتيب
*/

/* if variables are declared before */
/* ({ theAge, theTitle, theName, theCountry } = myUser); */

/* ---------------------------------------------- */
/* let { theAge, theTitle, theName, theCountry } = myUser;
console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry); */
/* ---------------------------------------------- */
/* 
  لو بدي افوت قيمة
*/

let {theName, theAge,theCountry} = myUser;

console.log(theName);
console.log(theAge);
console.log(theCountry);

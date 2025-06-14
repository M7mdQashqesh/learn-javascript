/* 
  Regular Expression

  Ranges
    - (X|Y)  => X Or Y
    - [0-9]  => 0 to 9
    - [^0-9] => Any Character not 0 to 9

    - Practice
*/

/* (X|Y)  => X Or Y */
let tld = "Com Net Org Io Info Code";
/* 
  رجع المواقع التي تنتهي ب org او info او io
*/
let tldRegex = /(org|info|io)/i;
let tldRegex2 = /(info|org|io)/i;

console.log(tld.match(tldRegex));
console.log(tld.match(tldRegex2));
/* 
  برضو نفس الجواب، لانه برجع اول قيمة بلاقيها من ضمن الخيارات، وليس اول خيار
*/

let tldRegex3 = /(info|org|io)/gi;

console.log(tld.match(tldRegex3));

/*  */
/* [0-9]  => 0 to 9 */
let numbers = "12345678910";

let numRegex1 = /[0-9]/;
console.log(numbers.match(numRegex1));

let numRegex2 = /[0-9]/g;
console.log(numbers.match(numRegex2));

let numRegex3 = /[0-2]/g;
console.log(numbers.match(numRegex3));

let notNumberRegex = /[^0-2]/g;
/* 
  جيب كل الارقام يلي مش داخل هذا ال range
*/
console.log(numbers.match(notNumberRegex));

let special = "1!2@3#4$5%678910";
let specialRegex = /[^0-9]/g;
console.log(special.match(specialRegex));

/*  */
/* Practice */
let practice = "Os1 Os1Os Os2 Os8 Os8Os";

/* return ""Os"" in the middle contain number between 5 to 9, then end with Os */
let practiceRegex1 = /[5-9]/g;
console.log(practice.match(practiceRegex1));

let practiceRegex2 = /Os[5-9]/g;
console.log(practice.match(practiceRegex2));

let practiceRegex3 = /Os[5-9]Os/g;
console.log(practice.match(practiceRegex3));

/* 
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => MultiLines

  Search Methods 
  - match(pattern)

  Match
    - Matches A String Against A Regular Expression Pattern
      - Return An Array With The Matches
      - Returns null If No Match Is Found
*/

let str = "Hello Elzero Web School I Love elzero";
let regex1 = /Elzero/;
let regex2 = /elzero/;
console.log(str.match(regex2));

/* i => case-insensitive */
let regex3 = /elzero/i;
console.log(str.match(regex3));
/* 
  بما ان الاحرف insensitive رح يجيب اول كلمة بشوفها
*/

/*  */
/* g => global (بجيب كل المطلوب) */
/* we can use more than one modifier */
let regex4 = /elzero/ig;

console.log(str.match(regex4));
